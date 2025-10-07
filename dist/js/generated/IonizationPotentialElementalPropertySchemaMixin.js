"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ionizationPotentialElementalPropertySchemaMixin = ionizationPotentialElementalPropertySchemaMixin;
function ionizationPotentialElementalPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get units() {
            return this.requiredProp("units");
        },
        get value() {
            return this.requiredProp("value");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
