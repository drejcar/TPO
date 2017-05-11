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
var user_service_1 = require("./prijava/user.service");
var AppComponent = (function () {
    function AppComponent(http, usr) {
        this.http = http;
        this.usr = usr;
        this.loggedIn = false;
        this.mojiDelovniNalog = false;
        this.admin = false;
        this.patronaznaSestra = false;
        this.dovoljenjeKreirat = false;
        this.aliJeLoginan = false;
        this.opis = '';
        this.opis2 = '';
        this.prjava = 'Prijava';
        this.vloga = '';
        this.prjava2 = 'prijava';
        this.email = '';
        this.datumZadnjePrijave = '';
        this.name = 'Angular';
        this.log = this.usr.isLoggedIn();
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('vloga') != null) {
            this.vloga = localStorage.getItem('vloga');
            // dovoljenja in kaj se lahko prikaze
            if (this.vloga != 'guest') {
                this.email = localStorage.getItem('email');
                this.datumZadnjePrijave = localStorage.getItem('datumZadnjePrijave');
                this.opis = this.email;
                this.opis2 = "Zadnja prijava: " + this.datumZadnjePrijave;
                this.prjava = 'Odjava';
                this.prjava2 = 'odjava';
                this.aliJeLoginan = true;
            }
            else {
                this.admin = false;
                this.patronaznaSestra = false;
                this.dovoljenjeKreirat = false;
                this.opis = '';
                this.opis2 = '';
                this.prjava = 'Prijava';
                this.prjava2 = 'prijava';
                this.aliJeLoginan = false;
            }
            //kaj se prikaze glede na vlogo
            if (this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSestra' || this.vloga == 'PatronaznaSluzba') {
                this.mojiDelovniNalog = true;
                if (this.vloga == 'PatronaznaSestra') {
                    this.patronaznaSestra = true;
                }
            }
            if (this.vloga == 'Administrator') {
                this.admin = true;
            }
            if (this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSluzba') {
                this.dovoljenjeKreirat = true;
            }
        }
    };
    //zato da lahko klicem iz drugje
    AppComponent.prototype.change = function () {
        if (localStorage.getItem('vloga') != null) {
            this.vloga = localStorage.getItem('vloga');
            // dovoljenja in kaj se lahko prikaze
            if (this.vloga != 'guest') {
                this.email = localStorage.getItem('email');
                this.datumZadnjePrijave = localStorage.getItem('datumZadnjePrijave');
                this.opis = this.email;
                this.opis2 = "Zadnja prijava: " + this.datumZadnjePrijave;
                this.prjava = 'Odjava';
                this.prjava2 = 'odjava';
                this.aliJeLoginan = true;
            }
            else {
                this.dovoljenjeKreirat = false;
                this.opis = '';
                this.opis2 = '';
                this.prjava = 'Prijava';
                this.prjava2 = 'prijava';
                this.mojiDelovniNalog = false;
                this.admin = false;
                this.patronaznaSestra = false;
                this.aliJeLoginan = false;
            }
            //kaj se prikaze glede na vlogo
            if (this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSestra' || this.vloga == 'PatronaznaSluzba') {
                this.mojiDelovniNalog = true;
                if (this.vloga == 'PatronaznaSestra') {
                    this.patronaznaSestra = true;
                }
            }
            if (this.vloga == 'Administrator') {
                this.admin = true;
            }
            if (this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSluzba') {
                this.dovoljenjeKreirat = true;
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n\t  <header>\n\t\t<nav>\n\t\t\t<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Domov</a>\n\t\t\t<a [hidden]=\"!admin\" routerLink=\"/registracijazd\" routerLinkActive=\"active\">regZd</a>\t\n\t\t\t<a [hidden]=\"!aliJeLoginan\" routerLink=\"/spremembaGesla\" routerLinkActive=\"active\">sprGesla</a>\t\n\t\t\t<a [hidden]=\"!mojiDelovniNalog\" routerLink=\"/seznamObiskov\" routerLinkActive=\"active\">Seznam obiskov</a>\n\t\t\t<a [hidden]=\"!patronaznaSestra\" routerLink=\"/planiranjeObiskov\" routerLinkActive=\"active\">Planiranje obiskov</a>\n\t\t</nav>\n\t\t<div id=\"userProf\">{{opis}}</div>\n\t\t<div id=\"zadnjaPrijava\">{{opis2}}</div>\n\t\t<div id=\"navRight\">\n\t\t\t<a routerLink=\"/{{prjava2}}\" routerLinkActive=\"active\">{{prjava}}</a>\n\t\t\t\n\t\t\t<a [hidden]=\"aliJeLoginan\"routerLink=\"/registracija\" routerLinkActive=\"active\">/ Registracija</a>\n\t\t\t\n\t\t\t<a [hidden]=\"!dovoljenjeKreirat\" routerLink=\"/delovniNalog\" routerLinkActive=\"active\">/ DelovniNalog</a>\n\t\t\t<a [hidden]=\"!mojiDelovniNalog\" routerLink =\"/delovniNalogi\" routerLinkActive=\"active\">/ Moji delovni nalogi</a>\n\t\t</div>\n\t  </header>\n\t  <router-outlet></router-outlet>\n\t  \n\t  <footer>@ 2017</footer>\n\n  ",
        styleUrls: ['./app.component.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map