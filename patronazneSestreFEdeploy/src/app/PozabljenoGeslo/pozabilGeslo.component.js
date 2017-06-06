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
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var common_1 = require("@angular/common");
var pozabilGesloComponent = (function () {
    function pozabilGesloComponent(router, http, route, location) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.location = location;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.pwd = '';
        this.pwd2 = '';
        this.mail = '';
        this.password = '';
        this.vloga = '';
        this.datumZadnjePrijave = '';
        this.iduporabnika = 0;
        this.idvloga = 0;
        this.model = ({ 'pwd': this.pwd, 'pwd2': this.pwd2 });
        this.submitted = false;
        this.fail = false;
    }
    pozabilGesloComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password')) });
        var baseUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1/uporabnik';
        var vlog = ({
            idvloga: this.idvloga,
            opis: this.vloga,
        });
        var upr = ({
            iduporabnik: this.iduporabnika,
            email: this.mail,
            geslo: this.model.pwd,
            vloga: vlog,
            zadnjaPrijava: this.datumZadnjePrijave,
        });
        console.log(upr);
        this.http.put("" + baseUrl, JSON.stringify(upr), { headers: headers }).subscribe(function (res) {
            _this.submitted = true;
        }, function (err) { _this.fail = true; });
    };
    pozabilGesloComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        setTimeout(function () {
            _this.route.params
                .switchMap(function (params) { return _this.http.get(_this.restUrl + "/uporabnik/getUporabnik/" + Number(+params['id']), { headers: headers }); }).map(function (response) { return response.json(); }).subscribe(function (res) {
                _this.res = res;
                var vmesna = JSON.stringify(_this.res);
                var dobiUporabnika = JSON.parse(vmesna);
                console.log(dobiUporabnika);
                _this.iduporabnika = dobiUporabnika.iduporabnik;
                _this.mail = dobiUporabnika.email;
                _this.password = dobiUporabnika.geslo;
                _this.datumZadnjePrijave = dobiUporabnika.zadnjaPrijava;
                _this.idvloga = dobiUporabnika.vloga.idvloga;
                _this.vloga = dobiUporabnika.vloga.opis;
            });
        }, 1000);
    };
    return pozabilGesloComponent;
}());
pozabilGesloComponent = __decorate([
    core_1.Component({
        selector: 'pozabilGeslo',
        templateUrl: './sprememba-gesla2.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, router_1.ActivatedRoute, common_1.Location])
], pozabilGesloComponent);
exports.pozabilGesloComponent = pozabilGesloComponent;
//# sourceMappingURL=pozabilGeslo.component.js.map
