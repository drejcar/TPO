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
var uporabnik_service_1 = require("./registracija/uporabnik.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var SpremembaGeslaComponent = (function () {
    function SpremembaGeslaComponent(router, uporabnikService, http) {
        this.router = router;
        this.uporabnikService = uporabnikService;
        this.http = http;
        this.pwd = '';
        this.pwd2 = '';
        this.model = ({ 'pwd': this.pwd, 'pwd2': this.pwd2 });
        this.submitted = false;
        this.fail = false;
    }
    SpremembaGeslaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.fail = false;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password')) });
        var baseUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1/uporabnik';
        var vlog = ({
            idvloga: Number(localStorage.getItem('idvloga')),
            opis: localStorage.getItem('vloga'),
        });
        var upr = ({
            iduporabnik: Number(localStorage.getItem('iduporabnik')),
            email: localStorage.getItem('email'),
            geslo: this.model.pwd,
            vloga: vlog,
            zadnjaPrijava: localStorage.getItem('datumZadnjePrijave'),
        });
        console.log(upr);
        this.http.put("" + baseUrl, JSON.stringify(upr), { headers: headers }).subscribe(function (res) {
            _this.submitted = true;
        }, function (err) { _this.fail = true; });
    };
    return SpremembaGeslaComponent;
}());
SpremembaGeslaComponent = __decorate([
    core_1.Component({
        selector: 'spremembaGesla',
        templateUrl: './sprememba-gesla.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, uporabnik_service_1.UporabnikService, http_1.Http])
], SpremembaGeslaComponent);
exports.SpremembaGeslaComponent = SpremembaGeslaComponent;
//# sourceMappingURL=spremembaGesla.component.js.map
