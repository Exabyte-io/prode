import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";

export type WorkflowPropertySchemaMixin = Omit<
    WorkflowPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type WorkflowPropertyInMemoryEntity = InMemoryEntity & WorkflowPropertySchemaMixin;

export function workflowPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & WorkflowPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & WorkflowPropertySchemaMixin = {
        get name() {
            return this.requiredProp<WorkflowPropertySchema["name"]>("name");
        },
        set name(value: WorkflowPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get workflows() {
            return this.requiredProp<WorkflowPropertySchema["workflows"]>("workflows");
        },
        set workflows(value: WorkflowPropertySchema["workflows"]) {
            this.setProp("workflows", value);
        },
        get isDefault() {
            return this.prop<WorkflowPropertySchema["isDefault"]>("isDefault");
        },
        set isDefault(value: WorkflowPropertySchema["isDefault"]) {
            this.setProp("isDefault", value);
        },
        get metadata() {
            return this.prop<WorkflowPropertySchema["metadata"]>("metadata");
        },
        set metadata(value: WorkflowPropertySchema["metadata"]) {
            this.setProp("metadata", value);
        },
        get properties() {
            return this.requiredProp<WorkflowPropertySchema["properties"]>("properties");
        },
        set properties(value: WorkflowPropertySchema["properties"]) {
            this.setProp("properties", value);
        },
        get isUsingDataset() {
            return this.prop<WorkflowPropertySchema["isUsingDataset"]>("isUsingDataset");
        },
        set isUsingDataset(value: WorkflowPropertySchema["isUsingDataset"]) {
            this.setProp("isUsingDataset", value);
        },
        get isMultiMaterial() {
            return this.prop<WorkflowPropertySchema["isMultiMaterial"]>("isMultiMaterial");
        },
        set isMultiMaterial(value: WorkflowPropertySchema["isMultiMaterial"]) {
            this.setProp("isMultiMaterial", value);
        },
        get subworkflows() {
            return this.requiredProp<WorkflowPropertySchema["subworkflows"]>("subworkflows");
        },
        set subworkflows(value: WorkflowPropertySchema["subworkflows"]) {
            this.setProp("subworkflows", value);
        },
        get units() {
            return this.requiredProp<WorkflowPropertySchema["units"]>("units");
        },
        set units(value: WorkflowPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get application() {
            return this.prop<WorkflowPropertySchema["application"]>("application");
        },
        set application(value: WorkflowPropertySchema["application"]) {
            this.setProp("application", value);
        },
        get tags() {
            return this.prop<WorkflowPropertySchema["tags"]>("tags");
        },
        set tags(value: WorkflowPropertySchema["tags"]) {
            this.setProp("tags", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
