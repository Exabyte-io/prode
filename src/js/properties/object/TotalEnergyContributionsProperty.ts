import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { TotalEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = TotalEnergyContributionsPropertySchema;

export default class TotalEnergyContributionsProperty extends Property implements Schema {
    declare readonly name: Schema["name"];

    static readonly propertyType = PropertyType.object;

    static readonly propertyName = PropertyName.total_energy_contributions;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: TotalEnergyContributionsProperty.propertyName });
    }

    get temperatureEntropy() {
        return this.prop<Schema["temperatureEntropy"]>("temperatureEntropy");
    }

    get harris_foulkes() {
        return this.prop<Schema["harris_foulkes"]>("harris_foulkes");
    }

    get one_electron() {
        return this.prop<Schema["one_electron"]>("one_electron");
    }

    get hartree() {
        return this.prop<Schema["hartree"]>("hartree");
    }

    get exchange() {
        return this.prop<Schema["exchange"]>("exchange");
    }

    get exchangeCorrelation() {
        return this.prop<Schema["exchange_correlation"]>("exchange_correlation");
    }

    get exchange_correlation() {
        return this.prop<Schema["exchange_correlation"]>("exchange_correlation");
    }

    get ewald() {
        return this.prop<Schema["ewald"]>("ewald");
    }

    get alphaZ() {
        return this.prop<Schema["alphaZ"]>("alphaZ");
    }

    get atomicEnergy() {
        return this.prop<Schema["atomicEnergy"]>("atomicEnergy");
    }

    get eigenvalues() {
        return this.prop<Schema["eigenvalues"]>("eigenvalues");
    }

    get PAWDoubleCounting2() {
        return this.prop<Schema["PAWDoubleCounting2"]>("PAWDoubleCounting2");
    }

    get PAWDoubleCounting3() {
        return this.prop<Schema["PAWDoubleCounting3"]>("PAWDoubleCounting3");
    }

    get hartreeFock() {
        return this.prop<Schema["hartreeFock"]>("hartreeFock");
    }

    get units() {
        return this.prop<Schema["units"]>("units");
    }
}
