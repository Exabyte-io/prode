import { deepClone, flattenObject } from "@mat3ra/code/dist/js/utils";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { BandGapsPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";

type Schema = BandGapsPropertySchema;

export default class BandGapsProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.band_gaps;

    declare toJSON: () => BandGapsPropertySchema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: BandGapsProperty.propertyName });
    }

    get eigenvalues() {
        return this.prop<BandGapsPropertySchema["eigenvalues"]>("eigenvalues");
    }

    get values() {
        return this.requiredProp<BandGapsPropertySchema["values"]>("values");
    }

    toRowValues(group: string) {
        return [this.toJSONByType("direct", group), this.toJSONByType("indirect", group)];
    }

    flattenProperties() {
        return this.values
            .map((x) => {
                return {
                    name: `${this.name}:${x.type}`,
                    value: x.value,
                };
            })
            .map((x) => flattenObject(x));
    }

    /**
     * @summary Gets specified band gap (direct/indirect) and returns it in simplified form (as pressure).
     * Characteristic name will be `band_gaps:<type>`
     * @param type {String}
     */
    private toJSONByType(type: string, group: string) {
        const ch = this.toJSON();
        const bandGapByType = deepClone(ch) as BandGapsPropertySchema;
        const directData = this.values.find((x) => x.type === type);
        const name = `band_gaps:${type}`;

        return {
            ...bandGapByType,
            data: {
                ...directData,
                name,
            },
            slug: name,
            group,
        };
    }

    /**
     * @summary Converts QueryBuilder selector into mongo selector by value.
     * @param name band_gaps:direct/band_gaps:indirect
     * @param selector Mongo selector
     */
    static normalizeSelectorByDataField(name: string, selector: object) {
        // name is in 'band_gaps:direct' format
        const type = name.split(":")[1]; // direct/indirect

        return {
            name: "band_gaps",
            values: {
                $elemMatch: {
                    type,
                    value: selector,
                },
            },
        };
    }
}
