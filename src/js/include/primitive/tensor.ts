import Property from "../../Property";

// by default this is a 2d array: eg. [ [], [], []]
export class TensorProperty extends Property {
    // TODO: ask Pranab in Jira
    /* the logic below supports transition for atomic forces from previously used format:
     *   {
     *       "name": "atomic_forces",
     *       "units": "eV/bohr",
     *       "value": [
     *           [
     *               0.0,
     *               -0.0,
     *               -0.0
     *           ],
     *           [
     *               -0.0,
     *               0.0,
     *               0.0
     *           ]
     *       ]
     *   }
     * to
     *   {
     *       "units": "eV/bohr",
     *       "values": [
     *           {
     *               "id": 1,
     *               "value": [
     *                   0.0,
     *                   -0.0,
     *                   -0.0
     *               ]
     *           },
     *           {
     *               "id": 2,
     *               "value": [
     *                   -0.0,
     *                   0.0,
     *                   0.0
     *               ]
     *           }
     *       ],
     *       "name": "atomic_forces"
     *   }
     */
    get values() {
        return this.valueProp || this.valuesProp.map((x) => x.value);
    }

    private get valueProp() {
        return this.prop<number[][]>("value");
    }

    private get valuesProp() {
        return this.prop<{ id: number; value: number[] }[]>("values", []);
    }
}
