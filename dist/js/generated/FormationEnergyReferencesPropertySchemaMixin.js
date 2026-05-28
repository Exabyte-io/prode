"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formationEnergyReferencesPropertySchemaMixin = formationEnergyReferencesPropertySchemaMixin;
function formationEnergyReferencesPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get value() {
            return this.requiredProp("value");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
