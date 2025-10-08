"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandStructurePropertySchemaMixin = bandStructurePropertySchemaMixin;
function bandStructurePropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        get name() {
            return this.requiredProp("name");
        },
        get spin() {
            return this.requiredProp("spin");
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
