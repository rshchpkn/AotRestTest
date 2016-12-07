import { OpaqueToken } from "@angular/core";
import * as _ from 'lodash';
export var RESTANGULAR = new OpaqueToken('restangularWithConfig');
export function RestangularFactory(config) {
    console.log(config);
    debugger;
    var configObj = {
        fn: config[0],
        arrServices: [],
    };
    if (_.isArray(config[0])) {
        debugger;
        configObj = {
            arrServices: config[0],
            fn: config[1]
        };
        debugger;
    }
    debugger;
    return configObj;
}
//# sourceMappingURL=ng2-restangular.config.js.map