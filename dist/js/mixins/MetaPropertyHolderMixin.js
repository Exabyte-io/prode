"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaPropertyHolderMixin = metaPropertyHolderMixin;
const pseudopotential_1 = require("../include/meta_properties/pseudopotential");
function metaPropertyHolderMixin(item) {
    // @ts-expect-error - this is a workaround to allow the metaPropertyMixin to be used with any type of entity
    const properties = {
        get data() {
            return this.requiredProp("data");
        },
        get property() {
            return new pseudopotential_1.Pseudopotential(this.data);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
