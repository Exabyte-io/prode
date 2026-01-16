/* eslint-disable no-unused-expressions */
import type { WavefunctionAmplitudePropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import WavefunctionAmplitudeProperty from "../../../src/js/properties/non-scalar/WavefunctionAmplitudeProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("WavefunctionAmplitudeProperty", () => {
    const config: Omit<WavefunctionAmplitudePropertySchema, "name"> = {
        xDataArray: [-6.0, -5.0, -4.0, -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
        yDataSeries: [
            [0.0, 0.1, 0.3, 0.5, 0.7, 0.9, 1.0, 0.9, 0.7, 0.5, 0.3, 0.1, 0.0] as [
                number,
                ...number[],
            ],
        ],
        xAxis: {
            label: "z coordinate",
        },
        yAxis: {
            label: "amplitude",
        },
    };

    it("should create a wavefunction amplitude property with correct constructor, propertyType, propertyName, and defined properties", () => {
        const wavefunctionAmplitudeProperty = new WavefunctionAmplitudeProperty(config);

        // Test basic properties
        expect(wavefunctionAmplitudeProperty).to.be.instanceOf(WavefunctionAmplitudeProperty);
        expect(WavefunctionAmplitudeProperty.propertyType).equal(PropertyType.non_scalar);
        expect(WavefunctionAmplitudeProperty.propertyName).equal(
            PropertyName.wavefunction_amplitude,
        );
        expect(WavefunctionAmplitudeProperty.isRefined).to.be.true;

        // Test defined properties
        expect(wavefunctionAmplitudeProperty.subtitle).to.equal("Wavefunction Amplitude");
        expect(wavefunctionAmplitudeProperty.yAxisTitle).to.equal("Amplitude");
        expect(wavefunctionAmplitudeProperty.xAxisTitle).to.equal("Z Coordinate");
        expect(wavefunctionAmplitudeProperty.chartConfig).to.exist;
        expect(wavefunctionAmplitudeProperty.chartConfig).to.be.an("object");
    });

    it("should handle multiple wavefunction series", () => {
        const multiSeriesConfig: Omit<WavefunctionAmplitudePropertySchema, "name"> = {
            xDataArray: [-2.0, -1.0, 0.0, 1.0, 2.0],
            yDataSeries: [
                [0.0, 0.5, 1.0, 0.5, 0.0] as [number, ...number[]],
                [0.1, 0.3, 0.5, 0.3, 0.1] as [number, ...number[]],
            ],
            xAxis: {
                label: "z coordinate",
            },
            yAxis: {
                label: "amplitude",
            },
        };

        const wavefunctionAmplitudeProperty = new WavefunctionAmplitudeProperty(multiSeriesConfig);

        expect(wavefunctionAmplitudeProperty).to.be.instanceOf(WavefunctionAmplitudeProperty);
        expect(wavefunctionAmplitudeProperty.yDataSeries).to.have.lengthOf(2);
        expect(wavefunctionAmplitudeProperty.chartConfig).to.exist;
    });
});
