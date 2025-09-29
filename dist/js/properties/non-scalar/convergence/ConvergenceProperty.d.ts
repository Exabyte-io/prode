import type { PropertyName } from "../../../settings";
import NonScalarProperty from "../base/NonScalarProperty";
/**
 * Base class for all convergence properties
 * Provides common functionality and ensures proper convergence configuration
 */
export default abstract class ConvergenceProperty<Schema extends {
    data: unknown[];
    units: string;
    name: `${PropertyName}`;
}> extends NonScalarProperty<Schema> {
    static readonly isConvergence = true;
    static readonly propertyName: PropertyName;
    get data(): Schema["data"];
    get units(): Schema["units"];
}
