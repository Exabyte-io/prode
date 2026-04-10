import { assert, expect } from "chai";

import * as index from "../../src/js";

/**
 * Loads every runtime export from the package barrel so re-export bindings
 * count toward function coverage (most suite tests import implementation files directly).
 */
describe("package index (barrel)", () => {
    it("exposes all public runtime exports", () => {
        const keys = Object.keys(index) as (keyof typeof index)[];
        expect(keys.length).to.be.greaterThan(0);
        keys.forEach((key) => {
            assert.exists(index[key], String(key));
        });
    });
});
