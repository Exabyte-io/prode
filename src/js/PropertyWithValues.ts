import type { Constructor } from "@mat3ra/code/dist/js/utils/types";

import { type PropertyWithValuesMixin, propertyWithValuesMixin } from "./mixins/PropertyWithValues";
import Property from "./Property";

type NamedPropertyWithValuesBase = typeof Property & Constructor<PropertyWithValuesMixin>;

export default class PropertyWithValues extends (Property as NamedPropertyWithValuesBase) {}

propertyWithValuesMixin(PropertyWithValues.prototype);
