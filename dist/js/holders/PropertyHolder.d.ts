import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type { PropertyHolderMixin } from "./mixins/PropertyHolderMixin";
type Schema = PropertyHolderSchema;
type Base = typeof InMemoryEntity & Constructor<PropertyHolderMixin>;
declare const PropertyHolder_base: Base;
export default class PropertyHolder extends PropertyHolder_base implements Schema {
    constructor(data: Schema);
}
export {};
