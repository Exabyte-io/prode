import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";

import type { PropertyHolderMixin } from "./mixins/PropertyHolderMixin";
import { propertyHolderMixin } from "./mixins/PropertyHolderMixin";

type NamedPropertyBase = typeof InMemoryEntity & Constructor<PropertyHolderMixin>;

export default class PropertyHolder extends (InMemoryEntity as NamedPropertyBase) {}

propertyHolderMixin(PropertyHolder.prototype);
