import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type TotalEnergyContributionsPropertySchemaMixin = Omit<
    TotalEnergyContributionsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type TotalEnergyContributionsPropertyInMemoryEntity = InMemoryEntity &
    TotalEnergyContributionsPropertySchemaMixin;

export function totalEnergyContributionsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & TotalEnergyContributionsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & TotalEnergyContributionsPropertySchemaMixin = {
        get temperatureEntropy() {
            return this.prop<TotalEnergyContributionsPropertySchema["temperatureEntropy"]>(
                "temperatureEntropy",
            );
        },
        set temperatureEntropy(
            value: TotalEnergyContributionsPropertySchema["temperatureEntropy"],
        ) {
            this.setProp("temperatureEntropy", value);
        },
        get harris_foulkes() {
            return this.prop<TotalEnergyContributionsPropertySchema["harris_foulkes"]>(
                "harris_foulkes",
            );
        },
        set harris_foulkes(value: TotalEnergyContributionsPropertySchema["harris_foulkes"]) {
            this.setProp("harris_foulkes", value);
        },
        get smearing() {
            return this.prop<TotalEnergyContributionsPropertySchema["smearing"]>("smearing");
        },
        set smearing(value: TotalEnergyContributionsPropertySchema["smearing"]) {
            this.setProp("smearing", value);
        },
        get one_electron() {
            return this.prop<TotalEnergyContributionsPropertySchema["one_electron"]>(
                "one_electron",
            );
        },
        set one_electron(value: TotalEnergyContributionsPropertySchema["one_electron"]) {
            this.setProp("one_electron", value);
        },
        get hartree() {
            return this.prop<TotalEnergyContributionsPropertySchema["hartree"]>("hartree");
        },
        set hartree(value: TotalEnergyContributionsPropertySchema["hartree"]) {
            this.setProp("hartree", value);
        },
        get exchange() {
            return this.prop<TotalEnergyContributionsPropertySchema["exchange"]>("exchange");
        },
        set exchange(value: TotalEnergyContributionsPropertySchema["exchange"]) {
            this.setProp("exchange", value);
        },
        get exchange_correlation() {
            return this.prop<TotalEnergyContributionsPropertySchema["exchange_correlation"]>(
                "exchange_correlation",
            );
        },
        set exchange_correlation(
            value: TotalEnergyContributionsPropertySchema["exchange_correlation"],
        ) {
            this.setProp("exchange_correlation", value);
        },
        get ewald() {
            return this.prop<TotalEnergyContributionsPropertySchema["ewald"]>("ewald");
        },
        set ewald(value: TotalEnergyContributionsPropertySchema["ewald"]) {
            this.setProp("ewald", value);
        },
        get alphaZ() {
            return this.prop<TotalEnergyContributionsPropertySchema["alphaZ"]>("alphaZ");
        },
        set alphaZ(value: TotalEnergyContributionsPropertySchema["alphaZ"]) {
            this.setProp("alphaZ", value);
        },
        get atomicEnergy() {
            return this.prop<TotalEnergyContributionsPropertySchema["atomicEnergy"]>(
                "atomicEnergy",
            );
        },
        set atomicEnergy(value: TotalEnergyContributionsPropertySchema["atomicEnergy"]) {
            this.setProp("atomicEnergy", value);
        },
        get eigenvalues() {
            return this.prop<TotalEnergyContributionsPropertySchema["eigenvalues"]>("eigenvalues");
        },
        set eigenvalues(value: TotalEnergyContributionsPropertySchema["eigenvalues"]) {
            this.setProp("eigenvalues", value);
        },
        get PAWDoubleCounting2() {
            return this.prop<TotalEnergyContributionsPropertySchema["PAWDoubleCounting2"]>(
                "PAWDoubleCounting2",
            );
        },
        set PAWDoubleCounting2(
            value: TotalEnergyContributionsPropertySchema["PAWDoubleCounting2"],
        ) {
            this.setProp("PAWDoubleCounting2", value);
        },
        get PAWDoubleCounting3() {
            return this.prop<TotalEnergyContributionsPropertySchema["PAWDoubleCounting3"]>(
                "PAWDoubleCounting3",
            );
        },
        set PAWDoubleCounting3(
            value: TotalEnergyContributionsPropertySchema["PAWDoubleCounting3"],
        ) {
            this.setProp("PAWDoubleCounting3", value);
        },
        get hartreeFock() {
            return this.prop<TotalEnergyContributionsPropertySchema["hartreeFock"]>("hartreeFock");
        },
        set hartreeFock(value: TotalEnergyContributionsPropertySchema["hartreeFock"]) {
            this.setProp("hartreeFock", value);
        },
        get name() {
            return this.requiredProp<TotalEnergyContributionsPropertySchema["name"]>("name");
        },
        set name(value: TotalEnergyContributionsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.prop<TotalEnergyContributionsPropertySchema["units"]>("units");
        },
        set units(value: TotalEnergyContributionsPropertySchema["units"]) {
            this.setProp("units", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
