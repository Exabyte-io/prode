import Property from "./Property";
export default class PropertyFactory {
    static Property: typeof Property;
    static methodsTree: Record<string, () => void>;
    static create(config: string | object, methodType?: string): Property;
    static _precisionFunctionByMethodType(methodType?: string): () => void;
}
