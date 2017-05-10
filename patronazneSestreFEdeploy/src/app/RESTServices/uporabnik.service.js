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
        this.baseUrl = 'http://localhost:8080/patronazneSestre/v1/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('guest@guest:guest') });
    }
    UporabnikService.prototype.save = function (upr) {
        var sp = 1;
        if (upr.spol == 'Moski') {
            sp = 1;
        }
        else {
            sp = 2;
        }
        //spol TODO se id za spol
        var spol = ({
            idspol: sp,
            opis: upr.spol,
        });
        //TODO dokoncat posto
        var posta = ({
            idposta: upr.postnaStevilka,
            opis: upr.okolis,
        });
        //vloga
        var vloga = ({
            idvloga: 2,
        });
        //uporabnik nov
        var uporabnikDrugi = ({
            email: upr.mail,
            geslo: upr.pwd,
            vloga: vloga
        });
        //filamo json pacient
        var pacient = ({
            ime: upr.ime,
            priimek: upr.priimek,
            stevilkaZdravstvenegaZavarovanja: upr.stKartice,
            telefonskaStevilka: upr.tel,
            ulica: upr.ulica,
            posta: posta,
            spol: spol,
            hisnaStevilka: upr.hisnaStevilka,
            uporabnik: uporabnikDrugi,
        });
        return this.http.post(this.baseUrl + "pacient/", JSON.stringify(pacient), { headers: this.headers });
    };
    UporabnikService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic' + btoa('guest@guest:guest'));
        return headers;
    };
    return UporabnikService;
}());
UporabnikService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UporabnikService);
exports.UporabnikService = UporabnikService;
//# sourceMappingURL=uporabnik.service.js.map