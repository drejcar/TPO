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
var NadomescanjeComponent = (function () {
    function NadomescanjeComponent(router, http) {
        this.router = router;
        this.http = http;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.stevec = 1;
        this.aliJeVec = false;
        this.sestre = [{ 'idSestre': 0, 'ime': '', 'priimek': '', 'sifra': 0 }];
        this.sestra = ({ 'idSestre': 0, 'ime': '', 'priimek': '', 'sifra': 0 });
        this.nadSestra = ({ 'idSestre': 0, 'ime': '', 'priimek': '', 'sifra': 0 });
        this.model = ({ 'sestra': this.sestra, 'sestre': this.sestre });
        this.model2 = [{ 'nadomestnaSestra': this.sestra, 'sestre': this.sestre, 'od': '', 'do': '', 'error': false, 'sporocilo': '' }];
        this.sporocilo = "";
        this.error = false;
        this.submitted = false;
    }
    NadomescanjeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers3 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.http.get(this.restUrl + "/zdravstveniDelavec/" + localStorage['iduporabnik'], { headers: headers3 }).subscribe(function (res) {
            _this.res = res.json();
            var vmesna = JSON.stringify(_this.res);
            var dobiZd = JSON.parse(vmesna);
            localStorage.setItem('idIzv', dobiZd.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev);
            _this.http.get(_this.restUrl + "/zdravstveniDelavec/byIzv/" + localStorage['idIzv'], { headers: headers3 }).map(function (response) { return response.json(); }).subscribe(function (res) {
                _this.Allsestre = res;
                console.log(_this.Allsestre);
                var i = 0;
                for (var _i = 0, _a = _this.Allsestre; _i < _a.length; _i++) {
                    var ses = _a[_i];
                    if (ses.okolis != null) {
                        var nov = ({ 'idSestre': ses.idzdravstveniDelavec, 'ime': ses.ime, 'priimek': ses.priimek, 'sifra': ses.sifra });
                        _this.sestre[i] = nov;
                        i = i + 1;
                    }
                }
            });
        });
        this.model.sestre = this.sestre;
        this.model2[0].nadomestnaSestra = this.sestra;
        this.model2[0].sestre = this.sestre;
    };
    NadomescanjeComponent.prototype.dodajNadomescanje = function () {
        var nov = ({ 'nadomestnaSestra': this.sestra, 'sestre': this.sestre, 'od': '', 'do': '', 'error': false, 'sporocilo': '' });
        this.model2[this.stevec] = nov;
        this.stevec = this.stevec + 1;
        this.aliJeVec = true;
    };
    NadomescanjeComponent.prototype.odstraniNadomescanje = function () {
        this.stevec = this.stevec - 1;
        console.log(this.stevec);
        this.model2.splice(this.stevec, 1);
        if (this.stevec == 1) {
            this.aliJeVec = false;
        }
    };
    NadomescanjeComponent.prototype.onSubmit = function () {
        var _this = this;
        var vecKEna = 0;
        this.error = false;
        this.sporocilo = "";
        for (var _i = 0, _a = this.model2; _i < _a.length; _i++) {
            var izbrane = _a[_i];
            console.log(izbrane);
            for (var _b = 0, _c = this.model2; _b < _c.length; _b++) {
                var izbr = _c[_b];
                console.log(izbr);
                if (izbr.nadomestnaSestra.idSestre != izbrane.nadomestnaSestra.idSestre) {
                    var datum1 = izbr.od;
                    var datum2 = izbr.do;
                    var parts = datum1.split('-');
                    var datum1Izb = parts[0] + parts[1] + parts[2];
                    parts = datum2.split('-');
                    var datum2Izb = parts[0] + parts[1] + parts[2];
                    datum1 = izbrane.od;
                    datum2 = izbr.do;
                    parts = datum1.split('-');
                    var datum1Druge = parts[0] + parts[1] + parts[2];
                    parts = datum2.split('-');
                    var datum2Druge = parts[0] + parts[1] + parts[2];
                    console.log(datum1Izb + "-" + datum2Izb);
                    console.log(datum1Druge + "-" + datum2Druge);
                    if ((datum2Izb >= datum1Druge && datum1Druge >= datum1Izb) || (datum2Druge >= datum1Izb && datum2Druge <= datum2Izb)) {
                        this.error = true;
                        izbr.error = true;
                        izbrane.error = true;
                        izbr.sporocilo = "Prislo je do konflikta intervalov";
                        izbrane.sporocilo = "Prislo je do konflikta intervalov";
                        break;
                    }
                }
                else {
                    vecKEna = vecKEna + 1;
                }
                if (vecKEna >= 2) {
                    this.sporocilo = "izbrali ste vec istih sester";
                    this.error = true;
                    break;
                }
            }
            vecKEna = 0;
        }
        if (this.error == false) {
            var headers3 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
            for (var _d = 0, _e = this.model2; _d < _e.length; _d++) {
                var sestre = _e[_d];
                console.log(this.model.sestra.idSestre);
                console.log(sestre.nadomestnaSestra.idSestre);
                this.http.get(this.restUrl + "/obiski/nadomescanje/" + this.model.sestra.idSestre + "/" + sestre.nadomestnaSestra.idSestre + "?od=" + sestre.od + "&do=" + sestre.do, { headers: headers3 }).subscribe(function (res) {
                    _this.submitted = true;
                    _this.error = false;
                });
            }
        }
    };
    return NadomescanjeComponent;
}());
NadomescanjeComponent = __decorate([
    core_1.Component({
        selector: 'nadomescanje',
        templateUrl: './nadomescanje.component.html',
        styleUrls: ['./nadomescanje.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], NadomescanjeComponent);
exports.NadomescanjeComponent = NadomescanjeComponent;
//# sourceMappingURL=nadomescanje.component.js.map
