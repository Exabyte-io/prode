import { expect } from "chai";

import { PropertyFactory, PropertyName } from "../../src/js";

describe("PropertyFactory", () => {
    describe("getRefinedPropertyNames", () => {
        it("should return an array of PropertyName values for refined properties", () => {
            const refinedPropertyNames = PropertyFactory.getRefinedPropertyNames();

            expect(refinedPropertyNames).to.be.an("array");
            expect(refinedPropertyNames.length).to.be.greaterThan(0);

            // Verify that all returned values are valid PropertyName enum values
            refinedPropertyNames.forEach((propertyName) => {
                expect(Object.values(PropertyName)).to.include(propertyName);
            });

            // Verify that specific known refined properties are included
            const expectedRefinedProperties = [
                PropertyName.total_energy,
                PropertyName.pressure,
                PropertyName.surface_energy,
                PropertyName.reaction_energy_barrier,
                PropertyName.valence_band_offset,
                PropertyName.band_structure,
                PropertyName.density_of_states,
                PropertyName.band_gaps,
                PropertyName.potential_profile,
                PropertyName.charge_density_profile,
                PropertyName.is_relaxed,
                PropertyName.reaction_energy_profile,
                PropertyName.average_potential_profile,
            ];

            expectedRefinedProperties.forEach((expectedProperty) => {
                expect(refinedPropertyNames).to.include(expectedProperty);
            });
        });

        it("should only return properties that have isRefined = true", () => {
            const refinedPropertyNames = PropertyFactory.getRefinedPropertyNames();

            // Verify that properties known to NOT be refined are not included
            const nonRefinedProperties = [
                PropertyName.fermi_energy,
                PropertyName.zero_point_energy,
                PropertyName.atomic_forces,
                PropertyName.stress_tensor,
                PropertyName.magnetic_moments,
            ];

            nonRefinedProperties.forEach((nonRefinedProperty) => {
                expect(refinedPropertyNames).to.not.include(nonRefinedProperty);
            });
        });
    });

    describe("getConvergencePropertyNames", () => {
        it("should return an array of PropertyName values for convergence properties", () => {
            const convergencePropertyNames = PropertyFactory.getConvergencePropertyNames();

            expect(convergencePropertyNames).to.be.an("array");
            expect(convergencePropertyNames.length).to.be.greaterThan(0);

            // Verify that all returned values are valid PropertyName enum values
            convergencePropertyNames.forEach((propertyName) => {
                expect(Object.values(PropertyName)).to.include(propertyName);
            });

            // Verify that specific known convergence properties are included
            const expectedConvergenceProperties = [
                PropertyName.convergence_electronic,
                PropertyName.convergence_ionic,
            ];

            expectedConvergenceProperties.forEach((expectedProperty) => {
                expect(convergencePropertyNames).to.include(expectedProperty);
            });
        });

        it("should only return properties that have isConvergence = true", () => {
            const convergencePropertyNames = PropertyFactory.getConvergencePropertyNames();

            // Verify that properties known to NOT be convergence are not included
            const nonConvergenceProperties = [
                PropertyName.total_energy,
                PropertyName.pressure,
                PropertyName.fermi_energy,
                PropertyName.atomic_forces,
                PropertyName.band_structure,
            ];

            nonConvergenceProperties.forEach((nonConvergenceProperty) => {
                expect(convergencePropertyNames).to.not.include(nonConvergenceProperty);
            });
        });
    });

    describe("getMultipleResultsPropertyNames", () => {
        it("should return an array of PropertyName values for properties that can return multiple results", () => {
            const multipleResultsPropertyNames = PropertyFactory.getMultipleResultsPropertyNames();

            expect(multipleResultsPropertyNames).to.be.an("array");
            expect(multipleResultsPropertyNames.length).to.be.greaterThan(0);

            // Verify that all returned values are valid PropertyName enum values
            multipleResultsPropertyNames.forEach((propertyName) => {
                expect(Object.values(PropertyName)).to.include(propertyName);
            });

            // Verify that specific known multiple results properties are included
            const expectedMultipleResultsProperties = [PropertyName.file_content];

            expectedMultipleResultsProperties.forEach((expectedProperty) => {
                expect(multipleResultsPropertyNames).to.include(expectedProperty);
            });
        });

        it("should only return properties that have isAbleToReturnMultipleResults = true", () => {
            const multipleResultsPropertyNames = PropertyFactory.getMultipleResultsPropertyNames();

            // Verify that properties known to NOT return multiple results are not included
            const nonMultipleResultsProperties = [
                PropertyName.total_energy,
                PropertyName.pressure,
                PropertyName.fermi_energy,
                PropertyName.atomic_forces,
                PropertyName.band_structure,
                PropertyName.convergence_electronic,
            ];

            nonMultipleResultsProperties.forEach((nonMultipleResultsProperty) => {
                expect(multipleResultsPropertyNames).to.not.include(nonMultipleResultsProperty);
            });
        });
    });

    describe("getScalarPropertyNames", () => {
        it("should return an array of PropertyName values for scalar properties", () => {
            const scalarPropertyNames = PropertyFactory.getScalarPropertyNames();

            expect(scalarPropertyNames).to.be.an("array");
            expect(scalarPropertyNames.length).to.be.greaterThan(0);

            // Verify that all returned values are valid PropertyName enum values
            scalarPropertyNames.forEach((propertyName) => {
                expect(Object.values(PropertyName)).to.include(propertyName);
            });

            // Verify that specific known scalar properties are included
            const expectedScalarProperties = [
                PropertyName.total_energy,
                PropertyName.pressure,
                PropertyName.fermi_energy,
                PropertyName.surface_energy,
                PropertyName.zero_point_energy,
            ];

            expectedScalarProperties.forEach((expectedProperty) => {
                expect(scalarPropertyNames).to.include(expectedProperty);
            });
        });

        it("should only return properties that have propertyType = scalar", () => {
            const scalarPropertyNames = PropertyFactory.getScalarPropertyNames();

            // Verify that properties known to NOT be scalar are not included
            const nonScalarProperties = [
                PropertyName.atomic_forces,
                PropertyName.stress_tensor,
                PropertyName.magnetic_moments,
                PropertyName.band_structure,
                PropertyName.density_of_states,
                PropertyName.total_energy_contributions,
            ];

            nonScalarProperties.forEach((nonScalarProperty) => {
                expect(scalarPropertyNames).to.not.include(nonScalarProperty);
            });
        });
    });

    describe("getNonScalarPropertyNames", () => {
        it("should return an array of PropertyName values for non-scalar properties", () => {
            const nonScalarPropertyNames = PropertyFactory.getNonScalarPropertyNames();

            expect(nonScalarPropertyNames).to.be.an("array");
            expect(nonScalarPropertyNames.length).to.be.greaterThan(0);

            // Verify that all returned values are valid PropertyName enum values
            nonScalarPropertyNames.forEach((propertyName) => {
                expect(Object.values(PropertyName)).to.include(propertyName);
            });

            // Verify that specific known non-scalar properties are included
            const expectedNonScalarProperties = [
                PropertyName.convergence_electronic,
                PropertyName.convergence_ionic,
                PropertyName.density_of_states,
                PropertyName.band_structure,
                PropertyName.band_gaps,
                PropertyName.phonon_dispersions,
                PropertyName.phonon_dos,
                PropertyName.final_structure,
                PropertyName.is_relaxed,
                PropertyName.workflow_pyml_predict,
                PropertyName.reaction_energy_profile,
                PropertyName.potential_profile,
                PropertyName.charge_density_profile,
                PropertyName.average_potential_profile,
                PropertyName.file_content,
                PropertyName.dielectric_tensor,
                PropertyName.hubbard_u,
                PropertyName.hubbard_v_nn,
                PropertyName.hubbard_v,
                PropertyName.jupyter_notebook_endpoint,
                PropertyName.pseudopotential,
                PropertyName.boundary_conditions,
                PropertyName.atomic_constraints,
            ];

            expect(nonScalarPropertyNames).to.deep.equal(expectedNonScalarProperties);
        });

        it("should only return properties that have propertyType = non_scalar", () => {
            const nonScalarPropertyNames = PropertyFactory.getNonScalarPropertyNames();

            // Verify that properties known to be scalar are not included
            const scalarProperties = [
                PropertyName.total_energy,
                PropertyName.pressure,
                PropertyName.fermi_energy,
                PropertyName.surface_energy,
                PropertyName.zero_point_energy,
            ];

            scalarProperties.forEach((scalarProperty) => {
                expect(nonScalarPropertyNames).to.not.include(scalarProperty);
            });
        });
    });
});
