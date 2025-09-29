"use strict";
/* eslint-disable class-methods-use-this */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighChartsConfig = void 0;
/**
 * @description Base class for Highcharts configuration
 */
class HighChartsConfig {
    constructor({ title, subtitle, yAxisTitle, xAxisTitle, yAxisType, series, legend, }) {
        this.title = title;
        this.subtitle = subtitle;
        this.yAxisTitle = yAxisTitle;
        this.xAxisTitle = xAxisTitle;
        this.yAxisType = yAxisType;
        this._series = series;
        this.legend = legend;
    }
    yAxis() {
        return {
            title: {
                text: this.yAxisTitle,
            },
            type: this.yAxisType,
            gridLineColor: "#eee",
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: "#808080",
                },
            ],
        };
    }
    xAxis() {
        return {
            title: {
                text: this.xAxisTitle,
            },
            tickPixelInterval: 200,
        };
    }
    // override in children
    tooltipFormatter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _xDataArray = []) {
        return undefined;
    }
    plotSingleLine({ value = 0.0, width = 1, label = { text: "Point" }, color = "red", dashStyle = "dash", }) {
        return [
            {
                value,
                width,
                label,
                color,
                dashStyle,
            },
        ];
    }
    get series() {
        return this._series;
    }
    get config() {
        return {
            credits: {
                enabled: false,
            },
            chart: {
                animation: false,
                zoomType: "xy",
            },
            title: {
                text: "",
                x: -20, // center
            },
            subtitle: {
                text: this.subtitle,
                x: -20,
            },
            yAxis: this.yAxis(),
            xAxis: this.xAxis(),
            tooltip: {
                formatter: this.tooltipFormatter(),
            },
            plotOptions: {
                series: {
                    animation: false,
                },
            },
            legend: {
                enabled: Boolean(this.legend),
                maxHeight: 70,
            },
            series: this.series,
            ...this.overrideConfig,
        };
    }
    // use in child classes to add/override default config props
    get overrideConfig() {
        return {};
    }
}
exports.HighChartsConfig = HighChartsConfig;
