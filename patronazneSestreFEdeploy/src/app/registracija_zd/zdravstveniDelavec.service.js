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
var zdravstveniDelavecService = (function () {
    function zdravstveniDelavecService(http) {
        this.http = http;
        this.baseUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password')) });
    }
    zdravstveniDelavecService.prototype.save = function (zdravstveniDelavec, check) {
        var okoli = ({
            idokolis: zdravstveniDelavec.okolis.idokolis,
        });
        if (check == false) {
            okoli = null;
        }
        var vlog = ({
            idvloga: zdravstveniDelavec.uporabnik.vloga.idvloga,
        });
        var uporabnik = ({
            email: zdravstveniDelavec.uporabnik.email,
            geslo: zdravstveniDelavec.uporabnik.geslo,
            vloga: vlog,
        });
        var izv = ({
            idizvajalecZdravstvenihStoritev: zdravstveniDelavec.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev,
        });
        var zdr = ({
            ime: zdravstveniDelavec.ime,
            priimek: zdravstveniDelavec.priimek,
            sifra: zdravstveniDelavec.sifra,
            telefonskaStevilka: zdravstveniDelavec.telefonskaStevilka,
            uporabnik: uporabnik,
            izvajalecZdravstvenihStoritev: izv,
            okolis: okoli,
        });
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        return this.http.post(this.baseUrl + "/zdravstveniDelavec", JSON.stringify(zdr), { headers: this.headers });
    };
    zdravstveniDelavecService.prototype.getVloge = function () {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        return this.http.get(this.baseUrl + "/sifranti/vloga", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    zdravstveniDelavecService.prototype.getIzvajalecZdravstvenihStoritev = function () {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        return this.http.get(this.baseUrl + "/izvajalecZdravstvenihStoritev/", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    zdravstveniDelavecService.prototype.getOkolisByPosta = function (post) {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.baseUrl + "/registracija/okolisByPosta/" + post, { headers: this.headers }).map(function (response) { return response.json(); });
    };
    return zdravstveniDelavecService;
}());
zdravstveniDelavecService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], zdravstveniDelavecService);
exports.zdravstveniDelavecService = zdravstveniDelavecService;
//# sourceMappingURL=zdravstveniDelavec.service.js.map
