"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@mat3ra/code/dist/js/entity");
class Property extends entity_1.NamedInMemoryEntity {
    constructor() {
        super(...arguments);
        this.prettyName = Property.prettifyName(this.name);
    }
    toRowValues(group, slug) {
        return [
            {
                ...this.toJSON(),
                slug,
                group,
            },
        ];
    }
    static prettifyName(name) {
        return (name.charAt(0).toUpperCase() + name.slice(1)).replace("_", " ");
    }
}
Property.isRefined = false;
Property.isConvergence = false;
Property.isAbleToReturnMultipleResults = false;
exports.default = Property;
