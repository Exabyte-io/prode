"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandStructureConfig = exports._POINT_COORDINATES_PRECISION_ = void 0;
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
const math_1 = require("@mat3ra/code/dist/js/math");
const utils_1 = require("@mat3ra/code/dist/js/utils");
const zip_1 = __importDefault(require("lodash/zip"));
const highcharts_1 = require("../../charts/highcharts");
const BandStructurePropertySchemaMixin_1 = require("../../generated/BandStructurePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
exports._POINT_COORDINATES_PRECISION_ = 4; // number of decimals to keep for point coordinates
class BandStructureConfig extends highcharts_1.HighChartsConfig {
    constructor(property, chartConfig) {
        var _a;
        super({
            subtitle: property.subtitle,
            yAxisTitle: property.yAxisTitle,
            yAxisType: "linear",
        });
        this.yDataSeries = property.yDataSeries;
        this.spin = property.spin;
        this.xDataArray = this.cleanXDataArray(property.xDataArray);
        this.pointsPath = chartConfig === null || chartConfig === void 0 ? void 0 : chartConfig.pointsPath;
        this.pointsDistanceArray = this.calculatePointsDistance(this.xDataArray);
        this.fermiEnergy = (_a = chartConfig === null || chartConfig === void 0 ? void 0 : chartConfig.fermiEnergy) !== null && _a !== void 0 ? _a : null;
        this.plotXLineAtPoint = this.plotXLineAtPoint.bind(this);
        this.plotXLines = this.plotXLines.bind(this);
    }
    // round each value in array to certain precision
    cleanXDataArray(rawData = []) {
        return rawData.map((p) => {
            if (!p || !Array.isArray(p))
                return [];
            return p.map((c) => {
                return math_1.math.roundValueToNDecimals(c, exports._POINT_COORDINATES_PRECISION_);
            });
        });
    }
    // returns the array of distances calculated from an array of points
    calculatePointsDistance(listOfPoints = []) {
        let pointsDistanceSum = 0;
        return listOfPoints.map((el, idx, arr) => {
            if (idx !== 0) {
                const distance = math_1.math.vDist(el, arr[idx - 1]);
                pointsDistanceSum += Number(distance);
            }
            return pointsDistanceSum;
        });
    }
    // find index of a point inside an array of points
    findSymmetryPointIndex(xDataArray, point) {
        return xDataArray.findIndex((p) => math_1.math.vDist(p, point) === 0);
    }
    // create config for vertical lines at high symmetry points
    plotXLines() {
        const copiedXDataArray = (0, utils_1.deepClone)(this.xDataArray);
        return this.pointsPath
            ? this.pointsPath
                .map((p) => {
                const idx = this.findSymmetryPointIndex(copiedXDataArray, p.coordinates);
                // "reset" element at index if found to avoid duplicate matches
                if (idx > -1)
                    copiedXDataArray[idx] = [-1, -1, -1];
                return {
                    point: p.point,
                    distance: idx > -1 ? this.pointsDistanceArray[idx] : null,
                };
            })
                .map(this.plotXLineAtPoint)
            : [];
    }
    plotXLineAtPoint({ point, distance }) {
        return {
            label: {
                verticalAlign: "bottom",
                rotation: 0,
                align: "center",
                y: 20,
                x: 0,
                text: point,
            },
            value: distance !== null && distance !== void 0 ? distance : undefined,
            width: 1,
            dashStyle: "solid",
            color: "#E0E0E0",
        };
    }
    get series() {
        const { fermiEnergy } = this;
        const series_ = this.yDataSeries.map((item, index) => {
            var _a;
            // shift values by fermiEnergy
            const itemUpdated = item.map((x) => {
                return fermiEnergy ? Number(x) - fermiEnergy : Number(x);
            });
            const spin = (_a = this.spin) === null || _a === void 0 ? void 0 : _a[index];
            const spinText = spin && spin > 0 ? "up" : "down";
            return {
                data: (0, zip_1.default)(this.pointsDistanceArray, itemUpdated),
                name: spinText,
                color: spinText === "up" ? "#3677d9" : "#ff7f0e",
                animation: false,
            };
        });
        return series_;
    }
    xAxis() {
        return {
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 2,
            minorTickLength: 0,
            title: {
                text: "Path in reciprocal space",
                offset: 40,
            },
            type: "linear",
            tickPositioner: () => [], // disable ticks
            plotLines: this.pointsPath ? this.plotXLines() : undefined,
            labels: {
                enabled: false,
            },
        };
    }
    tooltipFormatter(xDataArray, yAxisName = "energy") {
        // note 'this' below refers to Highcharts tooltip scope
        // eslint-disable-next-line func-names
        return function () {
            return ("<b>spin:</b> " +
                this.series.name +
                "<br>" +
                "<b>point:</b> " +
                xDataArray.map((p) => {
                    if (!Array.isArray(p)) {
                        console.error("xDataArray is not a nested array", xDataArray);
                        return [];
                    }
                    return p.map((c) => c.toFixed(exports._POINT_COORDINATES_PRECISION_));
                })[this.point.index] +
                "<br>" +
                "<b>" +
                yAxisName +
                ": </b>  " +
                this.y.toFixed(exports._POINT_COORDINATES_PRECISION_));
        };
    }
    yAxis() {
        return {
            ...super.yAxis(),
            gridZIndex: 1,
            plotLines: this.fermiEnergy
                ? this.plotSingleLine({
                    value: 0.0,
                    width: 2, // to be shown above above grid/tickLine at zero
                    label: {
                        text: "E_F",
                        style: {
                            color: "red",
                        },
                        y: -5,
                        x: -10,
                    },
                })
                : [],
        };
    }
    get overrideConfig() {
        const { xDataArray } = this;
        return {
            chart: {
                animation: false,
                type: "spline",
                zoomType: "xy",
            },
            plotOptions: {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 6,
                        },
                    },
                    marker: {
                        enabled: false,
                    },
                },
            },
            tooltip: {
                valueSuffix: "",
                formatter: this.tooltipFormatter(xDataArray),
            },
            legend: {
                enabled: false,
            },
        };
    }
}
exports.BandStructureConfig = BandStructureConfig;
class BandStructureProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: BandStructureProperty.propertyName });
        this.subtitle = "Electronic Bandstructure";
        this.yAxisTitle = `Energy (${this.yAxis.units})`;
        this.chartConfig = new BandStructureConfig(this, {
            fermiEnergy: config.fermiEnergy,
            pointsPath: config.pointsPath,
        }).config;
    }
}
BandStructureProperty.isRefined = true;
BandStructureProperty.propertyName = settings_1.PropertyName.band_structure;
BandStructureProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = BandStructureProperty;
(0, BandStructurePropertySchemaMixin_1.bandStructurePropertySchemaMixin)(BandStructureProperty.prototype);
