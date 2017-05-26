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
var izpisDN_service_1 = require("../izpisDelovnihNalogov/izpisDN.service");
var SeznamObiskovPacientComponent = (function () {
    function SeznamObiskovPacientComponent(router, http, DNService) {
        this.router = router;
        this.http = http;
        this.DNService = DNService;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.aliObstaja = false;
        this.pacienti = [{ 'ime': '', 'priimek': '', 'sifra': '', 'id': 0 }];
        this.izbraniPacient = this.pacienti[0];
        this.vecJihJe = false;
        this.tabelaDejanskiObiskov = [{ idObiska: undefined, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', podrobno: '' }];
    }
    SeznamObiskovPacientComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.http.get(this.restUrl + "/pacient/uporabnikId/" + localStorage['iduporabnik'], { headers: headers }).subscribe(function (res) {
            _this.res = res.json();
            var vmesna = JSON.stringify(_this.res);
            var dobiPacienta = JSON.parse(vmesna);
            localStorage.setItem('idPacienta', dobiPacienta.idpacient.toString());
            _this.pacienti[0].ime = dobiPacienta.ime;
            _this.pacienti[0].priimek = dobiPacienta.priimek;
            _this.pacienti[0].sifra = dobiPacienta.stevilkaZdravstvenegaZavarovanja;
            _this.pacienti[0].id = dobiPacienta.idpacient;
            var j = 1; //stevec za paciente
            for (var _i = 0, _a = dobiPacienta.pacients; _i < _a.length; _i++) {
                var pacient = _a[_i];
                var pacien = ({ idpacient: 0, ime: '', priimek: '' });
                pacien.id = pacient.idpacient;
                pacien.ime = pacient.ime;
                pacien.priimek = pacient.priimek;
                _this.pacienti[j] = pacien;
                j = j + 1;
            }
            if (_this.pacienti.length > 1) {
                _this.vecJihJe = true;
            }
        });
        //gremo dobit delovne naloge
        console.log(localStorage['idPacienta']);
        setTimeout(function () {
            _this.http.get(_this.restUrl + "/pacient/dn/" + localStorage['idPacienta'], { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (res) {
                _this.tabelaObiskovVsi = res;
                var i = 0; //stevec za obiske
                console.log(_this.tabelaObiskovVsi);
                for (var _i = 0, _a = _this.tabelaObiskovVsi; _i < _a.length; _i++) {
                    var dn = _a[_i];
                    for (var _b = 0, _c = dn.obisks; _b < _c.length; _b++) {
                        var ob = _c[_b];
                        if (ob.opravljen == 0) {
                            continue;
                        }
                        var obisk = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', podrobno: '' });
                        obisk.idObiska = ob.idobisk;
                        obisk.podrobno = 'Podrobnosti';
                        obisk.vrstaObiska = dn.vrstaObiska.opis;
                        obisk.pacienti = dn.pacients[0].ime + ' ' + dn.pacients[0].priimek;
                        for (var _d = 0, _e = dn.zdravstveniDelavecs; _d < _e.length; _d++) {
                            var zdr = _e[_d];
                            if (zdr.okolis != null) {
                                obisk.patronaznaSestra = zdr.ime + ' ' + zdr.priimek + ' [' + zdr.sifra + "] " + obisk.patronaznaSestra;
                            }
                            else {
                                obisk.izdajatelj = zdr.ime + " " + zdr.priimek + " [" + zdr.sifra + "]";
                            }
                        }
                        obisk.predvideniDatumObiska = ob.datumObiska;
                        obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
                        _this.tabelaDejanskiObiskov[i] = obisk;
                        i = i + 1;
                    }
                }
            });
        }, 1500);
    };
    SeznamObiskovPacientComponent.prototype.Onsubmit = function () {
        var _this = this;
        console.log(this.izbraniPacient);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        var i = 0;
        setTimeout(function () {
            _this.http.get(_this.restUrl + "/pacient/dn/" + _this.izbraniPacient.id, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (res) {
                _this.tabelaObiskovVsi = res;
                var i = 0; //stevec za obiske
                console.log(_this.tabelaObiskovVsi);
                for (var _i = 0, _a = _this.tabelaObiskovVsi; _i < _a.length; _i++) {
                    var dn = _a[_i];
                    for (var _b = 0, _c = dn.obisks; _b < _c.length; _b++) {
                        var ob = _c[_b];
                        if (ob.opravljen == 0) {
                            continue;
                        }
                        var obisk = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '' });
                        obisk.idObiska = ob.idobisk;
                        obisk.vrstaObiska = dn.vrstaObiska.opis;
                        obisk.pacienti = dn.pacients[0].ime + ' ' + dn.pacients[0].priimek;
                        for (var _d = 0, _e = dn.zdravstveniDelavecs; _d < _e.length; _d++) {
                            var zdr = _e[_d];
                            if (zdr.okolis != null) {
                                obisk.patronaznaSestra = zdr.ime + ' ' + zdr.priimek + ' [' + zdr.sifra + "] " + obisk.patronaznaSestra;
                            }
                            else {
                                obisk.izdajatelj = zdr.ime + " " + zdr.priimek + " [" + zdr.sifra + "]";
                            }
                        }
                        obisk.predvideniDatumObiska = ob.datumObiska;
                        obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
                        _this.tabelaDejanskiObiskov[i] = obisk;
                        i = i + 1;
                    }
                }
            });
        }, 1500);
    };
    return SeznamObiskovPacientComponent;
}());
SeznamObiskovPacientComponent = __decorate([
    core_1.Component({
        selector: 'seznamObiskovPacient',
        templateUrl: './seznamObiskovPacient.component.html',
        styleUrls: ['./seznamObiskovPacient.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, izpisDN_service_1.izpisDNService])
], SeznamObiskovPacientComponent);
exports.SeznamObiskovPacientComponent = SeznamObiskovPacientComponent;
//# sourceMappingURL=seznamObiskovPacient.component.js.map
