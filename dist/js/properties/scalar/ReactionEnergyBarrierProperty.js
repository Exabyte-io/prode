"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const ScalarProperty_1 = __importDefault(require("./base/ScalarProperty"));
class ReactionEnergyBarrierProperty extends ScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: ReactionEnergyBarrierProperty.propertyName });
    }
}
ReactionEnergyBarrierProperty.isRefined = true;
ReactionEnergyBarrierProperty.propertyName = settings_1.PropertyName.reaction_energy_barrier;
exports.default = ReactionEnergyBarrierProperty;
