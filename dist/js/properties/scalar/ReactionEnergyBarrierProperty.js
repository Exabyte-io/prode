"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactionEnergyBarrierPropertySchemaMixin_1 = require("../../generated/ReactionEnergyBarrierPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class ReactionEnergyBarrierProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: ReactionEnergyBarrierProperty.propertyName });
    }
}
ReactionEnergyBarrierProperty.isRefined = true;
ReactionEnergyBarrierProperty.propertyName = settings_1.PropertyName.reaction_energy_barrier;
ReactionEnergyBarrierProperty.propertyType = settings_1.PropertyType.scalar;
(0, ReactionEnergyBarrierPropertySchemaMixin_1.reactionEnergyBarrierPropertySchemaMixin)(ReactionEnergyBarrierProperty.prototype);
exports.default = ReactionEnergyBarrierProperty;
