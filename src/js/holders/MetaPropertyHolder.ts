import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";

import {
    type MetaPropertyHolderMixin,
    metaPropertyHolderMixin,
} from "./mixins/MetaPropertyHolderMixin";

type MetaPropertyBase = typeof InMemoryEntity & Constructor<MetaPropertyHolderMixin>;

export default class MetaPropertyHolder extends (InMemoryEntity as MetaPropertyBase) {}

metaPropertyHolderMixin(MetaPropertyHolder.prototype);
