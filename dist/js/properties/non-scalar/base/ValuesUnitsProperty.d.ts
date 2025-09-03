import type { PropertyName } from "../../../settings";
import NonScalarProperty from "./NonScalarProperty";
export default class ValuesUnitsProperty<TSchema extends {
    values: unknown;
    units: string;
    name: `${PropertyName}`;
}> extends NonScalarProperty<TSchema> {
    get values(): TSchema["values"];
    get units(): TSchema["units"];
}
