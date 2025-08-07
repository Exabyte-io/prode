"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyWithValuesMixin = propertyWithValuesMixin;
function propertyWithValuesMixin(item) {
    // @ts-expect-error - this is a workaround to allow the propertyMixin to be used with any type of entity
    const properties = {
        get values() {
            return this.prop("values", []);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
