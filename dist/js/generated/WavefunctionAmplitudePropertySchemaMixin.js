"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wavefunctionAmplitudePropertySchemaMixin = wavefunctionAmplitudePropertySchemaMixin;
function wavefunctionAmplitudePropertySchemaMixin(item) {
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
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
