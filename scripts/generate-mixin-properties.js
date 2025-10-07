#!/usr/bin/env node
/* eslint-disable no-restricted-syntax */

/**
 * Script to generate mixin properties from JSON schema
 *
 * This script generates mixin functions for property/holder, property/meta_holder,
 * and property/proto_holder schemas automatically.
 *
 * Usage:
 *   node scripts/generate-mixin-properties.js
 */

const fs = require("fs");
const { execSync } = require("child_process");

// Import JSONSchemasInterface from esse
const JSONSchemasInterface = require("@mat3ra/esse/dist/js/esse/JSONSchemasInterface").default;
const allSchemas = require("@mat3ra/esse/dist/js/schemas.json");

/**
 * Determines if a property should use requiredProp() or prop()
 * @param {string} propertyName - Name of the property
 * @param {Array} requiredProperties - Array of required property names
 * @returns {boolean} - True if property is required
 */
function isRequiredProperty(propertyName, requiredProperties) {
    return requiredProperties.includes(propertyName);
}

/**
 * Generates TypeScript type annotation for a property
 * @param {string} propertyName - The property name
 * @param {string} schemaName - Name of the schema (for type reference)
 * @returns {string} - TypeScript type annotation
 */
function generateTypeAnnotation(propertyName, schemaName) {
    return `${schemaName}["${propertyName}"]`;
}

/**
 * Extracts properties from a schema, handling allOf if present
 * @param {Object} schema - The JSON schema
 * @returns {Object} - Object with properties and required fields
 */
function extractSchemaProperties(schema) {
    let properties = {};
    let required = [];

    // Handle allOf by merging properties from all schemas
    if (schema.allOf && Array.isArray(schema.allOf)) {
        for (const subSchema of schema.allOf) {
            const extracted = extractSchemaProperties(subSchema);
            properties = { ...properties, ...extracted.properties };
            required = [...required, ...extracted.required];
        }
    }

    // Add properties from current schema
    if (schema.properties) {
        properties = { ...properties, ...schema.properties };
    }
    if (schema.required) {
        required = [...required, ...schema.required];
    }

    return { properties, required };
}

/**
 * Generates the complete mixin function
 * @param {Object} schema - The JSON schema
 * @param {string} schemaName - Name of the schema
 * @param {string} mixinTypeName - Name of the mixin type
 * @param {string} entityTypeName - Name of the entity type
 * @param {Array} skipFields - Array of field names to skip
 * @returns {string} - Generated TypeScript code
 */
function generateMixinFunction(schema, schemaName, mixinTypeName, entityTypeName, skipFields = []) {
    // Convert mixin type name to camelCase for function name
    const functionName = mixinTypeName.charAt(0).toLowerCase() + mixinTypeName.slice(1);

    // Extract properties, handling allOf if present
    const { properties, required } = extractSchemaProperties(schema);

    if (Object.keys(properties).length === 0) {
        throw new Error("No properties found in schema");
    }

    // Filter out skip fields
    const propertyEntries = Object.entries(properties).filter(
        ([propertyName]) => !skipFields.includes(propertyName),
    );

    let code = `import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";\n`;
    code += `import type { ${schemaName} } from "@mat3ra/esse/dist/js/types";\n\n`;

    // Generate the mixin type using Omit utility
    const skipFieldNames = skipFields.map((field) => `"${field}"`).join(" | ");
    code += `export type ${mixinTypeName} = Omit<${schemaName}, ${skipFieldNames}>;\n\n`;

    // Generate the entity type
    code += `export type ${entityTypeName} = InMemoryEntity & ${mixinTypeName};\n\n`;

    code += `export function ${functionName}(item: InMemoryEntity) {\n`;
    code += `    // @ts-expect-error\n`;
    code += `    const properties: InMemoryEntity & ${mixinTypeName} = {\n`;

    for (let i = 0; i < propertyEntries.length; i++) {
        const [propertyName] = propertyEntries[i];
        const isRequired = isRequiredProperty(propertyName, required);
        const methodName = isRequired ? "requiredProp" : "prop";
        const typeAnnotation = generateTypeAnnotation(propertyName, schemaName);

        code += `get ${propertyName}() {\n`;
        code += `return this.${methodName}<${typeAnnotation}>("${propertyName}");\n`;
        code += `}`;

        // Add comma for all properties except the last one
        if (i < propertyEntries.length - 1) {
            code += `,\n`;
        } else {
            code += `,\n`;
        }
    }

    code += `    };\n\n`;
    code += `    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));\n`;
    code += `}\n`;

    return code;
}

/**
 * Generates mixin function for a given schema ID
 * @param {string} schemaId - The schema ID (e.g., "property/holder")
 * @param {string} outputPath - The output file path
 * @param {Array} skipFields - Array of field names to skip
 * @returns {string} - Generated TypeScript code
 */
function generateMixinFromSchemaId(schemaId, outputPath, skipFields = []) {
    // Get the resolved schema by ID
    const schema = JSONSchemasInterface.getSchemaById(schemaId);

    if (!schema) {
        throw new Error(`Schema not found with ID: ${schemaId}`);
    }

    // Extract schema name from title for import
    let schemaName;
    if (schema.title) {
        // Convert title to proper schema name
        schemaName = schema.title
            .split(/\s+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");
    } else {
        // Convert schema ID to proper schema name
        schemaName =
            schemaId
                .split(/[/-]/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("") + "Schema";
    }

    // Extract type names from output file path
    const fileName = outputPath.split("/").pop().replace(".ts", "");
    const mixinTypeName = fileName;
    const entityTypeName = fileName.replace("SchemaMixin", "InMemoryEntity");

    // Generate the complete mixin function
    return generateMixinFunction(schema, schemaName, mixinTypeName, entityTypeName, skipFields);
}

/**
 * Fields to skip during generation
 */
const SKIP_FIELDS = ["_id", "slug", "systemName", "schemaVersion"];

/**
 * Output file paths for each schema
 */
const OUTPUT_PATHS = {
    "property/holder": "src/js/generated/PropertyHolderSchemaMixin.ts",
    "property/meta-holder": "src/js/generated/MetaPropertyHolderSchemaMixin.ts",
    "property/proto-holder": "src/js/generated/ProtoPropertyHolderSchemaMixin.ts",
    "methods-directory/physical/psp/file-data-item":
        "src/js/generated/PseudopotentialMetaPropertySchemaMixin.ts",
    "properties-directory/non-scalar/average-potential-profile":
        "src/js/generated/AveragePotentialProfilePropertySchemaMixin.ts",
    "properties-directory/non-scalar/band-gaps": "src/js/generated/BandGapsPropertySchemaMixin.ts",
    "properties-directory/non-scalar/band-structure":
        "src/js/generated/BandStructurePropertySchemaMixin.ts",
    "properties-directory/non-scalar/charge-density-profile":
        "src/js/generated/ChargeDensityProfilePropertySchemaMixin.ts",
    "properties-directory/non-scalar/density-of-states":
        "src/js/generated/DensityOfStatesPropertySchemaMixin.ts",
    "properties-directory/non-scalar/dielectric-tensor":
        "src/js/generated/DielectricTensorPropertySchemaMixin.ts",
    "properties-directory/non-scalar/file-content":
        "src/js/generated/FileContentPropertySchemaMixin.ts",
    "properties-directory/non-scalar/final-structure":
        "src/js/generated/FinalStructurePropertySchemaMixin.ts",
    "properties-directory/non-scalar/hubbard-u": "src/js/generated/HubbardUPropertySchemaMixin.ts",
    "properties-directory/non-scalar/hubbard-v-nn":
        "src/js/generated/HubbardVNNPropertySchemaMixin.ts",
    "properties-directory/non-scalar/hubbard-v": "src/js/generated/HubbardVPropertySchemaMixin.ts",
    "properties-directory/non-scalar/is-relaxed":
        "src/js/generated/IsRelaxedPropertySchemaMixin.ts",
    "properties-directory/jupyter-notebook-endpoint":
        "src/js/generated/JupyterNotebookEndpointPropertySchemaMixin.ts",
    "properties-directory/non-scalar/phonon-dispersions":
        "src/js/generated/PhononDispersionsPropertySchemaMixin.ts",
    "properties-directory/non-scalar/phonon-dos":
        "src/js/generated/PhononDOSPropertySchemaMixin.ts",
    "properties-directory/non-scalar/potential-profile":
        "src/js/generated/PotentialProfilePropertySchemaMixin.ts",
    "properties-directory/non-scalar/reaction-energy-profile":
        "src/js/generated/ReactionEnergyProfilePropertySchemaMixin.ts",
    "properties-directory/workflow/convergence/ionic":
        "src/js/generated/ConvergenceIonicPropertySchemaMixin.ts",
    "properties-directory/workflow/convergence/electronic":
        "src/js/generated/ConvergenceElectronicPropertySchemaMixin.ts",
    "properties-directory/non-scalar/workflow": "src/js/generated/WorkflowPropertySchemaMixin.ts",
    "properties-directory/non-scalar/total-energy-contributions":
        "src/js/generated/TotalEnergyContributionsPropertySchemaMixin.ts",
    "properties-directory/scalar/fermi-energy":
        "src/js/generated/FermiEnergyPropertySchemaMixin.ts",
    "properties-directory/elemental/ionization-potential":
        "src/js/generated/IonizationPotentialElementalPropertySchemaMixin.ts",
    "properties-directory/scalar/pressure": "src/js/generated/PressurePropertySchemaMixin.ts",
    "properties-directory/scalar/reaction-energy-barrier":
        "src/js/generated/ReactionEnergyBarrierPropertySchemaMixin.ts",
    "properties-directory/scalar/surface-energy":
        "src/js/generated/SurfaceEnergyPropertySchemaMixin.ts",
    "properties-directory/scalar/total-energy":
        "src/js/generated/TotalEnergyPropertySchemaMixin.ts",
    "properties-directory/scalar/total-force": "src/js/generated/TotalForcePropertySchemaMixin.ts",
    "properties-directory/scalar/valence-band-offset":
        "src/js/generated/ValenceBandOffsetPropertySchemaMixin.ts",
    "properties-directory/scalar/zero-point-energy":
        "src/js/generated/ZeroPointEnergyPropertySchemaMixin.ts",
    "properties-directory/structural/atomic-forces":
        "src/js/generated/AtomicForcesPropertySchemaMixin.ts",
    "properties-directory/structural/magnetic-moments":
        "src/js/generated/MagneticMomentsPropertySchemaMixin.ts",
    "properties-directory/non-scalar/stress-tensor":
        "src/js/generated/StressTensorPropertySchemaMixin.ts",
    "properties-directory/structural/basis/atomic-constraints-property":
        "src/js/generated/AtomicConstraintsPropertySchemaMixin.ts",
    "properties-directory/structural/basis/boundary-conditions":
        "src/js/generated/BoundaryConditionsPropertySchemaMixin.ts",
};

/**
 * Runs ESLint autofix on generated files
 * @param {Array} filePaths - Array of file paths to fix
 */
function runESLintAutofix(filePaths) {
    if (filePaths.length === 0) return;

    try {
        console.log("Running ESLint autofix on generated files...");
        const filesToFix = filePaths.join(" ");
        execSync(`npx eslint --fix ${filesToFix}`, { stdio: "inherit" });
        console.log("✓ ESLint autofix completed successfully");
    } catch (error) {
        console.warn("⚠ ESLint autofix failed:", error.message);
        // Don't fail the entire process if ESLint autofix fails
    }
}

/**
 * Generates mixins for multiple schemas
 * @param {Object} outputPaths - Object mapping schema IDs to output file paths
 * @param {Array} skipFields - Array of field names to skip during generation
 * @returns {Object} - Object with success and error counts
 */
function generateMixinsForSchemas(outputPaths, skipFields = []) {
    // Setup schemas
    JSONSchemasInterface.setSchemas(allSchemas);

    console.log("Generating mixin properties for all schemas...");

    const schemaIds = Object.keys(outputPaths);
    let successCount = 0;
    let errorCount = 0;
    const generatedFiles = [];

    for (const schemaId of schemaIds) {
        try {
            console.log(`\nProcessing schema: ${schemaId}`);

            const outputPath = outputPaths[schemaId];
            if (!outputPath) {
                throw new Error(`No output path defined for schema: ${schemaId}`);
            }

            const generatedCode = generateMixinFromSchemaId(schemaId, outputPath, skipFields);

            // Ensure the directory exists
            const dir = outputPath.substring(0, outputPath.lastIndexOf("/"));
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(outputPath, generatedCode);
            console.log(`✓ Generated mixin written to: ${outputPath}`);
            generatedFiles.push(outputPath);
            successCount += 1;
        } catch (error) {
            console.error(`✗ Error processing schema ${schemaId}: ${error.message}`);
            errorCount += 1;
        }
    }

    // Run ESLint autofix on generated files
    if (generatedFiles.length > 0) {
        runESLintAutofix(generatedFiles);
    }

    console.log(`\n=== Summary ===`);
    console.log(`Successfully generated: ${successCount} mixins`);
    if (errorCount > 0) {
        console.log(`Errors: ${errorCount} schemas failed`);
    } else {
        console.log("All mixins generated successfully!");
    }

    return { successCount, errorCount };
}

/**
 * Main function to generate all mixins
 */
function main() {
    const result = generateMixinsForSchemas(OUTPUT_PATHS, SKIP_FIELDS);

    if (result.errorCount > 0) {
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    generateMixinFromSchemaId,
    generateMixinsForSchemas,
};
