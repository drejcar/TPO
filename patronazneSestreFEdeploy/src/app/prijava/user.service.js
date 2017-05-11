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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var router_1 = require("@angular/router");
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.baseUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.loggedIn = !!localStorage.getItem('email');
    }
    UserService.prototype.login = function (prijava) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(prijava.mail + ':' + prijava.pwd) });
        this.loggedIn = true;
        return this.http.get(this.baseUrl + "/uporabnik/login/" + prijava.mail, { headers: headers }).map(function (res) { return _this.mapUporabnik(res); });
    };
    //funkcija za ustvarjanje avtorizacijski header
    UserService.prototype.createAuthorizationHeader = function (headers, pass, username) {
        headers.append('Authorization', 'Basic' + btoa(username + ':' + pass));
        return headers;
    };
    UserService.prototype.mapUporabnik = function (response) {
        return this.toUporabnik(response.json());
    };
    //pretvorba json objekta v angular objekt
    UserService.prototype.toUporabnik = function (r) {
        var vlog = ({
            idVloga: r.vloga.idvloga,
            opis: r.vloga.opis
        });
        var uporabnik = ({
            iduporabnik: r.iduporabnik,
            email: r.email,
            geslo: r.geslo,
            vloga: r.vloga,
            zadnjaPrijava: r.zadnjaPrijava,
        });
        return uporabnik;
    };
    UserService.prototype.logout = function () {
        localStorage.setItem('email', '');
        localStorage.setItem('password', '');
        localStorage.setItem('iduporabnik', '');
        localStorage.setItem('vloga', 'guest');
        localStorage.removeItem('idZdravstvenegaDelavca');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
