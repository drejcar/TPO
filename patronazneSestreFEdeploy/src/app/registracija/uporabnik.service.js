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
        this.baseUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UporabnikService.prototype.save = function (upr, dodaj, kontaktnov) {
        var sp = 1;
        if (upr.spol == 'Moški') {
            sp = 1;
        }
        else {
            sp = 2;
        }
        var devided = upr.postnaStevilka.split(' ');
        var spol = ({
            idspol: sp,
            opis: upr.spol,
        });
        var posta = ({
            idposta: Number(devided[0]),
            opis: devided[1],
        });
        //vloga
        var vloga = ({
            idvloga: 7,
        });
        //uporabnik nov
        var uporabnikDrugi = ({
            email: upr.mail,
            geslo: upr.pwd,
            vloga: vloga
        });
        console.log(dodaj + "\n");
        var devided2 = kontaktnov.kpostnaStevilka.split(' ');
        var posta2 = ({
            idposta: Number(devided2[0]),
            opis: devided2[1],
        });
        var kontakt = ({
            ime: kontaktnov.kime,
            priimek: kontaktnov.kpriimek,
            telefonskaStevilka: kontaktnov.ktel,
            ulica: kontaktnov.kulica,
            hisnaStevilka: kontaktnov.khisnaStevilka,
            posta: posta2,
            sorodstvenoRazmerje: kontaktnov.krazmerje,
        });
        if (dodaj == false) {
            kontakt = null;
        }
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
            okolis: upr.okolis,
            datumRojstva: upr.datumRojstva,
            kontakt: kontakt,
        });
        return this.http.post(this.baseUrl + "/registracija", JSON.stringify(pacient), { headers: this.headers });
    };
    UporabnikService.prototype.update = function (upr, dodaj, kontaktnov) {
        var devided = upr.posta.split(' ');
        var posta = ({
            idposta: Number(devided[0]),
            opis: devided[1],
        });
        upr.posta = posta;
        var kontakt = null;
        console.log(dodaj);
        if (dodaj == true) {
            var devided3 = kontaktnov.kpostnaStevilka.split(' ');
            var posta2 = ({
                idposta: Number(devided3[0]),
                opis: devided3[1],
            });
            console.log(kontaktnov.krazmerje);
            kontakt = ({
                ime: kontaktnov.kime,
                priimek: kontaktnov.kpriimek,
                telefonskaStevilka: kontaktnov.ktel,
                ulica: kontaktnov.kulica,
                hisnaStevilka: kontaktnov.khisnaStevilka,
                posta: posta2,
                sorodstvenoRazmerje: kontaktnov.krazmerje,
            });
        }
        console.log(kontakt);
        if (dodaj == true) {
            upr.kontakt = kontakt;
        }
        console.log(upr);
        console.log(JSON.stringify(upr));
        var headers2 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        return this.http.put(this.baseUrl + "/pacient", JSON.stringify(upr), { headers: headers2 });
    };
    UporabnikService.prototype.pobrisi = function (upr) {
        console.log(upr);
        upr.pacient = null;
        var headers2 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        return this.http.put(this.baseUrl + "/pacient", JSON.stringify(upr), { headers: headers2 });
    };
    UporabnikService.prototype.getPoste = function () {
        return this.http.get(this.baseUrl + "/registracija/posta", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    UporabnikService.prototype.getSpol = function () {
        return this.http.get(this.baseUrl + "/registracija/spol", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    UporabnikService.prototype.getRazmerje = function () {
        return this.http.get(this.baseUrl + "/registracija/sorodstvenoRazmerje", { headers: this.headers }).map(function (response) { return response.json(); });
    };
    UporabnikService.prototype.getOkolisByPosta = function (post) {
        return this.http.get(this.baseUrl + "/registracija/okolisByPosta/" + post, { headers: this.headers }).map(function (response) { return response.json(); });
    };
    UporabnikService.prototype.aktivirajRacun = function (id) {
        return this.http.get(this.baseUrl + "/registracija/" + id, { headers: this.headers });
    };
    return UporabnikService;
}());
UporabnikService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UporabnikService);
exports.UporabnikService = UporabnikService;
//# sourceMappingURL=uporabnik.service.js.map
