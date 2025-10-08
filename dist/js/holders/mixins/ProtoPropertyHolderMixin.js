"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protoPropertyHolderMixin = protoPropertyHolderMixin;
const ProtoPropertyHolderSchemaMixin_1 = require("../../generated/ProtoPropertyHolderSchemaMixin");
const PropertyFactory_1 = __importDefault(require("../../PropertyFactory"));
function protoPropertyHolderMixin(item) {
    // @ts-expect-error - this is a workaround to allow the protoPropertyMixin to be used with any type of entity
    const properties = {
        get property() {
            return PropertyFactory_1.default.createProtoProperty(this.data);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
    (0, ProtoPropertyHolderSchemaMixin_1.protoPropertyHolderSchemaMixin)(item);
}
