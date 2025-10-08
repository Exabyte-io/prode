"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.densityOfStatesPropertySchemaMixin = densityOfStatesPropertySchemaMixin;
function densityOfStatesPropertySchemaMixin(item) {
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
        get legend() {
            return this.requiredProp("legend");
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
