import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PropertyHolderMixin } from "./mixins/PropertyHolderMixin";
type NamedPropertyBase = typeof InMemoryEntity & Constructor<PropertyHolderMixin>;
declare const PropertyHolder_base: NamedPropertyBase;
export default class PropertyHolder extends PropertyHolder_base {
}
export {};
