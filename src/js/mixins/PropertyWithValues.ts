import type { Constructor } from "@mat3ra/code/dist/js/utils/types";

import type { Property } from "../property";

export interface PropertyWithValuesMixin {
    values: object[];
}

export type PropertyWithValuesMixinConstructor = Constructor<PropertyWithValuesMixin>;

export function propertyWithValuesMixin<T extends Property = Property>(item: T) {
    // @ts-expect-error - this is a workaround to allow the propertyMixin to be used with any type of entity
    const properties: T & PropertyWithValuesMixin = {
        get values() {
            return this.prop("values", []);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
