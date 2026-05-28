import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import type { PropertyHolderMixin } from "./mixins/PropertyHolderMixin";
import { propertyHolderMixin } from "./mixins/PropertyHolderMixin";

type Schema = PropertyHolderSchema;

type Base = typeof InMemoryEntity & Constructor<PropertyHolderMixin>;

export default class PropertyHolder extends (InMemoryEntity as Base) implements Schema {
    // eslint-disable-next-line no-useless-constructor
    constructor(data: Schema) {
        super(data);
    }
}

propertyHolderMixin(PropertyHolder.prototype);
