import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type { ProtoPropertyHolderMixin } from "./mixins/ProtoPropertyHolderMixin";
type ProtoPropertyBase = typeof InMemoryEntity & Constructor<ProtoPropertyHolderMixin>;
declare const ProtoPropertyHolder_base: ProtoPropertyBase;
export default class ProtoPropertyHolder extends ProtoPropertyHolder_base {
    constructor(data: ProtoPropertyHolderSchema);
}
export {};
