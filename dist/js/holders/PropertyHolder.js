"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@mat3ra/code/dist/js/entity");
const PropertyHolderMixin_1 = require("./mixins/PropertyHolderMixin");
class PropertyHolder extends entity_1.InMemoryEntity {
}
exports.default = PropertyHolder;
(0, PropertyHolderMixin_1.propertyHolderMixin)(PropertyHolder.prototype);
