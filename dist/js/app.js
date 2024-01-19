"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let cl = console.log;
function logMsg(nameofClass) {
    return function (target) {
        cl(`Instance of class ${nameofClass} is created!!!`);
    };
}
let Department = class Department {
    constructor() {
    }
};
Department = __decorate([
    logMsg("Department")
], Department);
let d1 = new Department();
let Person = class Person {
    constructor() {
    }
};
Person = __decorate([
    logMsg("Person")
], Person);
let p1 = new Department();
