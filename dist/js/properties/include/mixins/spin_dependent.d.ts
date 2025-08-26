import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type Property from "../../../Property";
export interface SpinDependentMixin<TSchema extends {
    spin: number[];
} = {
    spin: number[];
}> {
    spin: TSchema["spin"];
}
export type SpinDependentMixinConstructor = Constructor<SpinDependentMixin>;
export declare function spinDependentMixin(item: Property): void;
