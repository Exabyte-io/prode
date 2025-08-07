"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.TensorProperty = void 0;
const Property_1 = __importDefault(require("../../Property"));
// by default this is a 2d array: eg. [ [], [], []]
class TensorProperty extends Property_1.default {
    // TODO: ask Pranab in Jira
    /* the logic below supports transition for atomic forces from previously used format:
     *   {
     *       "name": "atomic_forces",
     *       "units": "eV/bohr",
     *       "value": [
     *           [
     *               0.0,
     *               -0.0,
     *               -0.0
     *           ],
     *           [
     *               -0.0,
     *               0.0,
     *               0.0
     *           ]
     *       ]
     *   }
     * to
     *   {
     *       "units": "eV/bohr",
     *       "values": [
     *           {
     *               "id": 1,
     *               "value": [
     *                   0.0,
     *                   -0.0,
     *                   -0.0
     *               ]
     *           },
     *           {
     *               "id": 2,
     *               "value": [
     *                   -0.0,
     *                   0.0,
     *                   0.0
     *               ]
     *           }
     *       ],
     *       "name": "atomic_forces"
     *   }
     */
    get values() {
        return this.valueProp || this.valuesProp.map((x) => x.value);
    }
    get valueProp() {
        return this.prop("value");
    }
    get valuesProp() {
        return this.prop("values", []);
    }
}
exports.TensorProperty = TensorProperty;
