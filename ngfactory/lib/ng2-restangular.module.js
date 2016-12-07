import { NgModule, Optional, SkipSelf, OpaqueToken } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Restangular } from './ng2-restangular';
import { RestangularHttp } from './ng2-restangular-http';
import { RestangularFactory, RESTANGULAR } from "./ng2-restangular.config";
import { BehaviorSubject } from "rxjs";
export var RESTANGULAR2 = new OpaqueToken('restangularWithConfig2');
export function RestangularFactory2() {
    var qqq = new BehaviorSubject({});
    qqq.subscribe(function (res) {
        console.log(res);
    });
    return qqq;
}
export var RestangularModule = (function () {
    function RestangularModule(parentModule) {
        if (parentModule) {
            throw new Error('RestangularModule is already loaded. Import it in the AppModule only');
        }
    }
    RestangularModule.forRoot = function (configOne, configTwo) {
        return {
            ngModule: RestangularModule,
            providers: [
                HttpModule,
                RestangularHttp,
                { provide: RESTANGULAR2, useValue: [configOne, configTwo] },
                { provide: RESTANGULAR, useFactory: RestangularFactory, deps: [RESTANGULAR2] }
            ]
        };
    };
    RestangularModule.decorators = [
        { type: NgModule, args: [{
                    providers: [Restangular]
                },] },
    ];
    RestangularModule.ctorParameters = [
        { type: RestangularModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
    ];
    return RestangularModule;
}());
//# sourceMappingURL=ng2-restangular.module.js.map