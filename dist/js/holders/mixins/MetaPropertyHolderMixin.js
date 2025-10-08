"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaPropertyHolderMixin = metaPropertyHolderMixin;
const MetaPropertyHolderSchemaMixin_1 = require("../../generated/MetaPropertyHolderSchemaMixin");
const PropertyFactory_1 = __importDefault(require("../../PropertyFactory"));
function metaPropertyHolderMixin(item) {
    // @ts-expect-error - this is a workaround to allow the metaPropertyMixin to be used with any type of entity
    const properties = {
        get property() {
            return PropertyFactory_1.default.createMetaProperty(this.data);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
    (0, MetaPropertyHolderSchemaMixin_1.metaPropertyHolderSchemaMixin)(item);
}
