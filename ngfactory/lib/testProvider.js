import { Injectable } from "@angular/core";
export var Test = (function () {
    function Test(name) {
        this.name = name;
    }
    Test.prototype.test = function () {
        console.log("test");
    };
    Test.decorators = [
        { type: Injectable },
    ];
    Test.ctorParameters = [
        null,
    ];
    return Test;
}());
//# sourceMappingURL=testProvider.js.map