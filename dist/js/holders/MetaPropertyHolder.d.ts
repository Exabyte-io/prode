import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import { type MetaPropertyHolderMixin } from "./mixins/MetaPropertyHolderMixin";
type MetaPropertyBase = typeof InMemoryEntity & Constructor<MetaPropertyHolderMixin>;
declare const MetaPropertyHolder_base: MetaPropertyBase;
export default class MetaPropertyHolder extends MetaPropertyHolder_base {
}
export {};
