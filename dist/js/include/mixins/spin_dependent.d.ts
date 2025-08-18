import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type Property from "../../Property";
export interface SpinDependentMixin {
    spin: number[];
}
export type SpinDependentMixinConstructor = Constructor<SpinDependentMixin>;
export declare function spinDependentMixin(item: Property): void;
