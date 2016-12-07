import {OpaqueToken, Injectable} from "@angular/core";
import * as _ from 'lodash';
import {Restangular} from "./ng2-restangular";
import {Http, BaseRequestOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
// import {Test} from "./testProvider";


export const RESTANGULAR = new OpaqueToken('restangularWithConfig');
export function RestangularFactory(...config) {
  // return () => {
    let configObj = {
      fn: config[0],
      arrServices: [],
    };

    if(_.isArray(config[0])){
      configObj = {
        arrServices: config[0],
        fn: config[1]
      }
    }

  debugger;

  return configObj;
  // };
}
// export function RestangularFactoryTest(http: MockBackend) {
//
//     console.log("aaaaa");
//     debugger;
//
//     return new Test("teeeeest");
//
// }


