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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var UporabniskiProfilComponent = (function () {
    function UporabniskiProfilComponent(http, router) {
        this.http = http;
        this.router = router;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.kime = '';
        this.kpriimek = '';
        this.ktel = '';
        this.kulica = '';
        this.khisnaStevilka = '';
        this.kpostnaStevilka = '';
        this.krazmerje = '';
        this.posta = ({ 'idposta': 0, 'opis': '' });
        this.kontakt = ({ 'kime': this.kime, 'kpriimek': this.kpriimek, 'ktel': this.ktel, 'kulica': this.kulica, 'khisnaStevilka': this.khisnaStevilka, 'kpostnaStevilka': this.kpostnaStevilka, 'krazmerje': this.krazmerje });
        this.spol = ({ 'idspol': 0, 'opis': '' });
        this.posta2 = ({ 'idposta': 0, 'opis': '' });
        this.okolis = ({ 'idokolis': 0, 'opis': '', 'posta': this.posta2, });
        this.vloga = ({ 'idvloga': 0, 'opis': '' });
        this.uporabnik = ({ 'iduporabnik': 0, 'aktivirajDo': '', 'zadnjaPrijava': '', 'email': '', 'geslo': '', 'vloga': this.vloga });
        this.model = [{ 'idpacient': 0, 'hisnaStevilka': '', 'ime': '', 'priimek': '', 'stevilkaZdravstvenegaZavarovanja': '', 'telefonskaStevilka': '', 'ulica': '', 'datumRojstva': '', 'kontakt': this.kontakt, 'posta': this.posta, 'sorodstvenoRazmerje': '', 'spol': this.spol, 'okolis': this.okolis, 'uporabnik': this.uporabnik }];
    }
    UporabniskiProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage['iduporabnik']);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.model[0] = ({ 'idpacient': 0, 'hisnaStevilka': '', 'ime': '', 'priimek': '', 'stevilkaZdravstvenegaZavarovanja': '', 'telefonskaStevilka': '', 'ulica': '', 'datumRojstva': '', 'kontakt': this.kontakt, 'posta': this.posta, 'sorodstvenoRazmerje': '', 'spol': this.spol, 'okolis': this.okolis, 'uporabnik': this.uporabnik });
        this.http.get(this.restUrl + "/pacient/uporabnikId/" + localStorage['iduporabnik'], { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (res) {
            _this.res = res;
            var vmesna = JSON.stringify(_this.res);
            var dobiUporabnika = JSON.parse(vmesna);
            console.log(dobiUporabnika);
            _this.model[0] = dobiUporabnika;
        });
    };
    return UporabniskiProfilComponent;
}());
UporabniskiProfilComponent = __decorate([
    core_1.Component({
        selector: 'uporabniskiProfil',
        templateUrl: './uporabniskiProfil.component.html',
        styleUrls: ['./uporabniskiProfil.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], UporabniskiProfilComponent);
exports.UporabniskiProfilComponent = UporabniskiProfilComponent;
//# sourceMappingURL=uporabniskiProfil.component.js.map
