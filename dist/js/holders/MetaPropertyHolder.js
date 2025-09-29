"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@mat3ra/code/dist/js/entity");
const MetaPropertyHolderMixin_1 = require("./mixins/MetaPropertyHolderMixin");
class MetaPropertyHolder extends entity_1.InMemoryEntity {
}
exports.default = MetaPropertyHolder;
(0, MetaPropertyHolderMixin_1.metaPropertyHolderMixin)(MetaPropertyHolder.prototype);
