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
//klasa za service
var PacientService = (function () {
    function PacientService(http) {
        this.http = http;
        this.baseUrl = 'localhost:8080/patronazneSestre/v1';
    }
    //service za prejemanje pacienta
    PacientService.prototype.get = function (zz) {
        var _this = this;
        /*var username = localStorage.getItem('username');
        var pass = localStorage.getItem('password');*/
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin@gmail:admin') });
        var pacient$ = this.http.get(this.baseUrl + "/pacient/zz/" + zz, { headers: headers }).map(function (res) { return _this.mapPacient(res); });
        return pacient$;
    };
    //vmesna funkcija
    PacientService.prototype.mapPacient = function (response) {
        return this.toPacient(response.json());
    };
    //pretvorba json objekta v angular objekt
    PacientService.prototype.toPacient = function (r) {
        var pacient = ({
            hisnaStevilka: r.hisnaStevilka,
            ime: r.ime,
            priimek: r.priimek,
            stevilkaZdravstvenegaZavarovanja: r.stevilkaZdravstvenegaZavarovanja,
            telefonskaStevilka: r.telefonskaStevilka,
            ulica: r.ulica,
            posta: r.posta,
            spol: r.spol,
            uporabnik: r.uporabnik,
        });
        return pacient;
    };
    return PacientService;
}());
PacientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PacientService);
exports.PacientService = PacientService;
//# sourceMappingURL=pacient.service.js.map