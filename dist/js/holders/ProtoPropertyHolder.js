"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@mat3ra/code/dist/js/entity");
const ProtoPropertyHolderMixin_1 = require("./mixins/ProtoPropertyHolderMixin");
class ProtoPropertyHolder extends entity_1.InMemoryEntity {
}
exports.default = ProtoPropertyHolder;
(0, ProtoPropertyHolderMixin_1.protoPropertyHolderMixin)(ProtoPropertyHolder.prototype);
