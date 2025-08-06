import { expect } from "chai";

import { Property as PropertyClass } from "../src/js/property.js";
import { Property } from "../src/js/settings.ts";

describe("Property", () => {
    const obj = { name: Property.pressure };

    it("can be created", () => {
        const property = new PropertyClass(obj);
        expect(property).to.be.instanceOf(PropertyClass);
    });

    it("has a name", () => {
        const property = new PropertyClass(obj);
        expect(property.name).to.equal(Property.pressure);
    });
});
