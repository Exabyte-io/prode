"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinDependentMixin = spinDependentMixin;
function spinDependentMixin(item) {
    // @ts-expect-error - this is a workaround to allow the mixin to be used with any type of entity
    const properties = {
        get spin() {
            return this.prop("spin");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
