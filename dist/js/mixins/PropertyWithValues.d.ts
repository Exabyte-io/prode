import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type Property from "../Property";
export interface PropertyWithValuesMixin {
    values: object[];
}
export type PropertyWithValuesMixinConstructor = Constructor<PropertyWithValuesMixin>;
export declare function propertyWithValuesMixin<T extends Property = Property>(item: T): void;
