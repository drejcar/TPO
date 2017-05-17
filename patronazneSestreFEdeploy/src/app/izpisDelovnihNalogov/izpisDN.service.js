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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Obisk = (function () {
    function Obisk() {
    }
    return Obisk;
}());
var izpisDNService = (function () {
    function izpisDNService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.baseUrl = 'rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
    }
    izpisDNService.prototype.getDelovneNaloge = function (idZD, idStart) {
        var date = new Date();
        var datum = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
        return this.http.get(this.baseUrl + "/delovniNalog/zdravstveniDelavecId/" + idZD + "?od=2017-1-1&do=" + datum + "&start=" + idStart + "&size=10", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    izpisDNService.prototype.getDelovniNalog = function (idDN) {
        return this.http.get(this.baseUrl + "/delovniNalog/" + idDN, { headers: this.headers }).map(function (response) { return response.json(); });
    };
    izpisDNService.prototype.getDelovneNalogePrekIzv = function (izvId) {
        console.log(izvId);
        return this.http.get(this.baseUrl + "/delovniNalog/izvajalecZdr/" + izvId + "?start=0&size=10", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    izpisDNService.prototype.getDelovneNalogePrekIzv2 = function (izvId, start) {
        console.log(izvId);
        console.log(start);
        return this.http.get(this.baseUrl + "/delovniNalog/izvajalecZdr/" + izvId + "?start=" + start + "&size=10", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    izpisDNService.prototype.updateDatum = function (obi, delovniNalog) {
        var fixen = 0;
        if (obi.fiksniDatum == 'NE') {
            fixen = 1;
        }
        var opravljen = 0;
        console.log(delovniNalog);
        var obisk = ({
            idobisk: obi.idObiska,
            datumObiska: obi.predvideniDatumObiska,
            fixenDatum: fixen,
            delovniNalog: delovniNalog,
            opravljen: opravljen,
            dejanskiDatumObiska: obi.dejanskiDatumObiska,
        });
        return this.http.put(this.baseUrl + "/delovniNalog/obisk", JSON.stringify(obisk), { headers: this.headers });
    };
    return izpisDNService;
}());
izpisDNService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], izpisDNService);
exports.izpisDNService = izpisDNService;
//# sourceMappingURL=izpisDN.service.js.map
