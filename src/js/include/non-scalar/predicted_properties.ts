import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PredictedPropertiesPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

type BaseProperty = typeof Property & Constructor<PredictedPropertiesPropertySchema>;

export class PredictedPropertiesProperty
    extends (Property as BaseProperty)
    implements PredictedPropertiesPropertySchema {}
