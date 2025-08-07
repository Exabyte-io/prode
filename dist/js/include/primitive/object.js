"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectProperty = void 0;
const Property_1 = __importDefault(require("../../Property"));
// by default this is a one-level object: eg. {a: 1, b: 2}
class ObjectProperty extends Property_1.default {}
exports.ObjectProperty = ObjectProperty;
