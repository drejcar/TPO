"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var UporabnikService = (function () {
    function UporabnikService(http) {
        this.http = http;
        this.baseUrl = 'localhost:8080/patronazneSestre/v1';
    }
    UporabnikService.prototype.save = function (zdravstveniDelavec) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin@gmail.com:admin') });
        //TODO
        this.http.post(this.baseUrl + "/zdravstveniDelavec/", JSON.stringify(zdravstveniDelavec), { headers: headers });
    };
    return UporabnikService;
}());
UporabnikService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UporabnikService);
exports.UporabnikService = UporabnikService;
//# sourceMappingURL=zdravstveniDelavec.service.js.map