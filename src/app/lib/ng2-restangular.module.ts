/* tslint:disable:member-ordering no-unused-variable */
import {ModuleWithProviders, NgModule, Optional, SkipSelf, Injector, Injectable, OpaqueToken} from '@angular/core';
import {HttpModule, Http, BaseRequestOptions} from "@angular/http";
// import {RESTANGULAR, RestangularFactory, RestangularFactoryTest} from './ng2-restangular.config';
import {Restangular} from './ng2-restangular';
import {RestangularHttp} from './ng2-restangular-http';
import {MockBackend} from "@angular/http/testing";
// import {RestangularFactoryTest} from "./ng2-restangular.config";
import {Test} from "./testProvider";
import { RestangularFactory, RESTANGULAR} from "./ng2-restangular.config";
import {Resolve} from "@angular/router";
import {BehaviorSubject} from "rxjs";

//
// @Injectable
// export class Test {
//   public name;
//
//   constructor(){
//     this.name = name
//   }
//
//   test(){
//     console.log("test");
//   }
// }


export const RESTANGULAR2 = new OpaqueToken('restangularWithConfig2');
// export function RestangularFactory2(qqq) {
//   return function () {
//     return qqq
//   }
// }
export function RestangularFactory2() {
  let qqq = new BehaviorSubject({});
  qqq.subscribe(res=>{
    console.log(res);
  });
  return qqq;
}

@NgModule({
  providers: [Restangular]
})
export class RestangularModule {
  
  constructor(@Optional() @SkipSelf() parentModule: RestangularModule) {
    if (parentModule) {
      throw new Error(
        'RestangularModule is already loaded. Import it in the AppModule only');
    }
  }
  
  static forRoot(...config): ModuleWithProviders {


    // let RestangularFactory3 = new RestangularFactory2()

    return {
      ngModule: RestangularModule,
      providers: [
        HttpModule,
        RestangularHttp,
        // Restangular
        {provide: RESTANGULAR2, useValue: config},
        {provide: RESTANGULAR, useFactory: RestangularFactory, deps: [RESTANGULAR2]}
      ]
    };
  }
}