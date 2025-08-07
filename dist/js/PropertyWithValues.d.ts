import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import { type PropertyWithValuesMixin } from "./mixins/PropertyWithValues";
import Property from "./Property";
type NamedPropertyWithValuesBase = typeof Property & Constructor<PropertyWithValuesMixin>;
declare const PropertyWithValues_base: NamedPropertyWithValuesBase;
export declare class PropertyWithValues extends PropertyWithValues_base {
}
export {};
