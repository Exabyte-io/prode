"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chargeDensityProfilePropertySchemaMixin = chargeDensityProfilePropertySchemaMixin;
function chargeDensityProfilePropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value) {
            this.setProp("yDataSeries", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
