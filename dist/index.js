"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sum
 * @param a number
 * @param b number
 */
function add(a, b) {
    return a + b;
}
exports.add = add;
/**
 * 解析url
 * @param str string
 */
function queryParameter(str) {
    var obj = {
        HASH: ''
    };
    var reg = /([^?=&#]+)=([^?=&#]+)/g;
    str.replace(reg, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        obj[args[1]] = args[2];
        return '';
    });
    reg = /#([^?=&#]+)/;
    if (reg.test(str)) {
        var hash = reg.exec(str);
        obj["HASH"] = hash[1];
    }
    return obj;
}
exports.queryParameter = queryParameter;
