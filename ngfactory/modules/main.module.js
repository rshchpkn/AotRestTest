import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloWorldComponent } from '../components/hello-world.component';
import { RestangularModule } from "../lib";
import { routes } from "./main.module.routes";
import { HttpModule, Http } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
export function test(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1/');
    RestangularProvider.setDefaultHeaders({
        'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'
    });
}
export var MainModule = (function () {
    function MainModule() {
    }
    MainModule.decorators = [
        { type: NgModule, args: [{
                    bootstrap: [HelloWorldComponent],
                    declarations: [HelloWorldComponent],
                    imports: [
                        BrowserModule,
                        HttpModule,
                        RouterModule.forRoot(routes),
                        RestangularModule.forRoot([Http], test)
                    ],
                    providers: [MockBackend]
                },] },
    ];
    MainModule.ctorParameters = [];
    return MainModule;
}());
//# sourceMappingURL=main.module.js.map