"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScalarProperty_1 = __importDefault(require("./ScalarProperty"));
class ValenceBandOffsetProperty extends ScalarProperty_1.default {
    constructor(config) {
        super(config, "valence_band_offset");
    }
}
exports.default = ValenceBandOffsetProperty;
