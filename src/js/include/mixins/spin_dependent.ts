import type { Constructor } from "@mat3ra/code/dist/js/utils/types";

import type Property from "../../Property";

export interface SpinDependentMixin {
    spin: number[];
}

export type SpinDependentMixinConstructor = Constructor<SpinDependentMixin>;

export function spinDependentMixin(item: Property) {
    // @ts-expect-error - this is a workaround to allow the mixin to be used with any type of entity
    const properties: PropertyHolderMixin & SpinDependentMixin = {
        get spin() {
            return this.prop<SpinDependentMixin["spin"]>("spin");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
