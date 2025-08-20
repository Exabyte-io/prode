"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaPropertyHolderMixin = metaPropertyHolderMixin;
const Pseudopotential_1 = __importDefault(require("../../include/meta_properties/Pseudopotential"));
function metaPropertyHolderMixin(item) {
    // @ts-expect-error - this is a workaround to allow the metaPropertyMixin to be used with any type of entity
    const properties = {
        get data() {
            return this.requiredProp("data");
        },
        get property() {
            return new Pseudopotential_1.default(this.data);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
