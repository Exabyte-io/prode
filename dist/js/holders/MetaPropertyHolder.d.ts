import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type MetaPropertyHolderMixin } from "./mixins/MetaPropertyHolderMixin";
interface MetaPropertyHolder extends MetaPropertyHolderMixin {
}
declare class MetaPropertyHolder extends InMemoryEntity {
    constructor(data: MetaPropertyHolderSchema);
}
export default MetaPropertyHolder;
