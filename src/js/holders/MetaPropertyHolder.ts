import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import {
    type MetaPropertyHolderMixin,
    metaPropertyHolderMixin,
} from "./mixins/MetaPropertyHolderMixin";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MetaPropertyHolder extends MetaPropertyHolderMixin {}

class MetaPropertyHolder extends InMemoryEntity {
    // eslint-disable-next-line no-useless-constructor
    constructor(data: MetaPropertyHolderSchema) {
        super(data);
    }
}

metaPropertyHolderMixin(MetaPropertyHolder.prototype);

export default MetaPropertyHolder;
