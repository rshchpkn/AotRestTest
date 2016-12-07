import { Component } from '@angular/core';
import { Restangular } from "../lib";
export var HelloWorldComponent = (function () {
    function HelloWorldComponent(restangular) {
        this.restangular = restangular;
        debugger;
    }
    HelloWorldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hello-world-app',
                    templateUrl: 'hello-world.template.html',
                    styleUrls: ['hello-world.style.css']
                },] },
    ];
    HelloWorldComponent.ctorParameters = [
        { type: Restangular, },
    ];
    return HelloWorldComponent;
}());
//# sourceMappingURL=hello-world.component.js.map