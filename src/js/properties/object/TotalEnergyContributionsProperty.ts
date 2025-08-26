import type { TotalEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = TotalEnergyContributionsPropertySchema;

export default class TotalEnergyContributionsProperty extends Property implements Schema {
    declare readonly name: Schema["name"];

    static readonly propertyType = PropertyType.object;

    static readonly propertyName = PropertyName.total_energy_contributions;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: TotalEnergyContributionsProperty.propertyName });
    }

    get temperatureEntropy() {
        return this.prop<Schema["temperatureEntropy"]>("temperatureEntropy");
    }

    get harrisFoulkes() {
        return this.prop<Schema["harrisFoulkes"]>("harrisFoulkes");
    }

    get oneElectron() {
        return this.prop<Schema["oneElectron"]>("oneElectron");
    }

    get hartree() {
        return this.prop<Schema["hartree"]>("hartree");
    }

    get exchange() {
        return this.prop<Schema["exchange"]>("exchange");
    }

    get exchangeCorrelation() {
        return this.prop<Schema["exchangeCorrelation"]>("exchangeCorrelation");
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
