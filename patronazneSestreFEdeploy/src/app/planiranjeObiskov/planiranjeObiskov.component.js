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
var common_1 = require("@angular/common");
var PlaniranjeObiskovComponent = (function () {
    function PlaniranjeObiskovComponent(router, http, DNService, datePipe) {
        this.router = router;
        this.http = http;
        this.DNService = DNService;
        this.datePipe = datePipe;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.izbraniDatum = '';
        this.aliJeVecji = false;
        this.tabelaDejanskiObiskovFixenDat = [{ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: undefined, porocilo: '' }];
        this.tabelaObiskov = [{ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: 0, porocilo: '' }];
        this.tabelaObiskovFix = [{ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: 0, porocilo: '' }];
        this.tabelaDejanskiObiskov = [{ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: 0, porocilo: '' }];
    }
    PlaniranjeObiskovComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers3 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.http.get(this.restUrl + "/zdravstveniDelavec/" + localStorage['iduporabnik'], { headers: headers3 }).subscribe(function (res) {
            _this.res = res.json();
            var vmesna = JSON.stringify(_this.res);
            var dobiZd = JSON.parse(vmesna);
            localStorage.setItem('idZdravstvenegaDelavca', dobiZd.idzdravstveniDelavec.toString());
            localStorage.setItem('idIzv', dobiZd.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev);
        });
        setTimeout(function () {
            _this.DNService.getDelovneNaloge(Number(localStorage.getItem('idZdravstvenegaDelavca')), 0).subscribe(function (res) {
                _this.tabelaObiskovVsi = res;
                var i = 0; //stevec za obiske
                var d = 0; //stevec za paciente
                var j = 0; //stevec za vrste obiskov
                var m = 0; //stevec za zdravstvene delavce
                _this.tabelaDelovnihNalogov = _this.tabelaObiskovVsi;
                var date = new Date();
                var datum = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);
                var newDate = new Date(datum);
                _this.izbraniDatum = _this.datePipe.transform(newDate, 'yyyy-MM-dd');
                var datum = _this.izbraniDatum;
                for (var _i = 0, _a = _this.tabelaObiskovVsi; _i < _a.length; _i++) {
                    var dn = _a[_i];
                    for (var _b = 0, _c = dn.obisks; _b < _c.length; _b++) {
                        var ob = _c[_b];
                        if (ob.nadomestnaSestra != null) {
                            if (ob.nadomestnaSestra.idzdravstveniDelavec != localStorage.getItem('idZdravstvenegaDelavca')) {
                                continue;
                            }
                        }
                        var obisk = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: 0, nadomescanje: '' });
                        obisk.idDelovniNalog = dn.iddelovniNalog;
                        obisk.idObiska = ob.idobisk;
                        obisk.vrstaObiska = dn.vrstaObiska.opis;
                        obisk.pacienti = dn.pacients[0].ime + ' ' + dn.pacients[0].priimek;
                        obisk.porocilo = '/vnosObisk/' + ob.idobisk + '/' + obisk.idDelovniNalog;
                        if (ob.opravljen == 0) {
                            obisk.opravljenost = 'Neopravljen';
                        }
                        else {
                            continue;
                        }
                        //datumi
                        obisk.predvideniDatumObiska = ob.datumObiska;
                        obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
                        //zapisovanje objekta v dejanski
                        console.log(ob.fixenDatum);
                        if (obisk.dejanskiDatumObiska == datum && ob.fixenDatum == 0) {
                            obisk.dodaj = 'Fiksni datum';
                            obisk.fiksniDatum = 'DA';
                            _this.tabelaDejanskiObiskovFixenDat[j] = obisk;
                            j = j + 1;
                        }
                        else if (ob.fixenDatum == 0 && obisk.dejanskiDatumObiska != datum) {
                            obisk.dodaj = 'Fiksni datum';
                            obisk.fiksniDatum = 'DA';
                            _this.tabelaDejanskiObiskov[i] = obisk;
                            i = i + 1;
                        }
                        else if (obisk.dejanskiDatumObiska == datum && ob.fixenDatum == 1) {
                            obisk.dodaj = 'Odstrani';
                            obisk.fiksniDatum = 'NE';
                            _this.tabelaDejanskiObiskovFixenDat[j] = obisk;
                            j = j + 1;
                        }
                        else {
                            obisk.dodaj = 'Dodaj';
                            obisk.fiksniDatum = 'NE';
                            _this.tabelaDejanskiObiskov[i] = obisk;
                            i = i + 1;
                        }
                    }
                    _this.tabelaDejanskiObiskov = _this.bubbleSort(_this.tabelaDejanskiObiskov);
                    console.log(_this.tabelaDelovnihNalogov);
                    console.log(_this.tabelaDejanskiObiskovFixenDat[0].idObiska);
                    if (_this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0) {
                        console.log("prslo je sm");
                        _this.tabelaObiskovVsi = _this.tabelaDejanskiObiskov.concat(_this.tabelaDejanskiObiskovFixenDat);
                        _this.aliJeVecji = true;
                    }
                    else {
                        _this.tabelaObiskovVsi = _this.tabelaDejanskiObiskov;
                        _this.aliJeVecji = false;
                    }
                }
            });
        }, 1000);
    };
    PlaniranjeObiskovComponent.prototype.bubbleSort = function (tabela) {
        for (var i = 0; i < tabela.length - 1; i++) {
            for (var x = 0; x < tabela.length - 1; x++) {
                var parts = tabela[x].predvideniDatumObiska.split('-');
                var prvi = parts[0] + parts[1] + parts[2];
                parts = tabela[x + 1].predvideniDatumObiska.split('-');
                var drugi = parts[0] + parts[1] + parts[2];
                if (Number(prvi) > Number(drugi)) {
                    var theGreater = tabela[x];
                    tabela[x] = tabela[x + 1];
                    tabela[x + 1] = theGreater;
                }
            }
        }
        return tabela;
    };
    PlaniranjeObiskovComponent.prototype.Onsubmit = function () {
        //zapisovanje objekta v dejanski
        var i = 0;
        var j = 0;
        console.log(this.izbraniDatum);
        this.tabelaDejanskiObiskov = [];
        this.tabelaDejanskiObiskovFixenDat = [];
        this.tabelaDejanskiObiskovFixenDat[0] = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: undefined });
        //var parts: any[] = this.izbraniDatum.split('-');
        var datum = this.izbraniDatum; /*parts[0]+parts[1]+parts[2];*/
        for (var _i = 0, _a = this.tabelaObiskovVsi; _i < _a.length; _i++) {
            var ob = _a[_i];
            if (ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'DA') {
                ob.dodaj = 'Fiksni datum';
                ob.fiksniDatum = 'DA';
                this.tabelaDejanskiObiskovFixenDat[j] = ob;
                j = j + 1;
            }
            else if (ob.fiksniDatum == 'DA' && ob.dejanskiDatumObiska != datum) {
                ob.dodaj = 'Fiksni datum';
                ob.fiksniDatum = 'DA';
                this.tabelaDejanskiObiskov[i] = ob;
                i = i + 1;
            }
            else if (ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'NE') {
                ob.dodaj = 'Odstrani';
                ob.fiksniDatum = 'NE';
                this.tabelaDejanskiObiskovFixenDat[j] = ob;
                j = j + 1;
            }
            else {
                ob.dodaj = 'Dodaj';
                ob.fiksniDatum = 'NE';
                this.tabelaDejanskiObiskov[i] = ob;
                i = i + 1;
            }
        }
        //preveri ce je manjsi ali vecji od 2
        if (this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0) {
            console.log("prslo je sm");
            this.aliJeVecji = true;
        }
        else {
            this.aliJeVecji = false;
        }
    };
    PlaniranjeObiskovComponent.prototype.dodajKDnevu = function (event) {
        console.log(event);
        var i = 0;
        var j = 0;
        this.tabelaDejanskiObiskovFixenDat = [];
        this.tabelaDejanskiObiskovFixenDat[0] = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: undefined });
        this.tabelaDejanskiObiskov = [];
        this.tabelaDejanskiObiskov[0] = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: 0 });
        var datum = this.izbraniDatum;
        console.log(this.izbraniDatum);
        console.log(this.tabelaDelovnihNalogov);
        for (var _i = 0, _a = this.tabelaObiskovVsi; _i < _a.length; _i++) {
            var obi = _a[_i];
            if (event == obi.idObiska) {
                obi.dejanskiDatumObiska = datum;
                var neki = false;
                for (var _b = 0, _c = this.tabelaDelovnihNalogov; _b < _c.length; _b++) {
                    var d = _c[_b];
                    for (var _d = 0, _e = d.obisks; _d < _e.length; _d++) {
                        var b = _e[_d];
                        if (b.idobisk == obi.idObiska) {
                            this.delovniNalog = d;
                            neki = true;
                            break;
                        }
                    }
                    if (neki == true) {
                        break;
                    }
                }
                this.DNService.updateDatum(obi, this.delovniNalog).subscribe(function (res) { console.log("uspeh"); }, function (err) { console.log("neuspeh"); });
                //TODO tuki pride rest klic za spremembo datuma znotraj baze;
                break;
            }
        }
        for (var _f = 0, _g = this.tabelaObiskovVsi; _f < _g.length; _f++) {
            var ob = _g[_f];
            if (ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'DA') {
                ob.dodaj = 'Fiksni datum';
                ob.fiksniDatum = 'DA';
                this.tabelaDejanskiObiskovFixenDat[j] = ob;
                j = j + 1;
            }
            else if (ob.fiksniDatum == 'DA' && ob.dejanskiDatumObiska != datum) {
                ob.dodaj = 'Fiksni datum';
                ob.fiksniDatum = 'DA';
                this.tabelaDejanskiObiskov[i] = ob;
                i = i + 1;
            }
            else if (ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'NE') {
                ob.dodaj = 'Odstrani';
                ob.fiksniDatum = 'NE';
                this.tabelaDejanskiObiskovFixenDat[j] = ob;
                j = j + 1;
            }
            else {
                ob.dodaj = 'Dodaj';
                ob.fiksniDatum = 'NE';
                this.tabelaDejanskiObiskov[i] = ob;
                i = i + 1;
            }
        }
        if (this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0) {
            this.aliJeVecji = true;
        }
        else {
            this.aliJeVecji = false;
        }
    };
    PlaniranjeObiskovComponent.prototype.odstraniIzDneva = function (event) {
        var i = 0;
        var j = 0;
        this.tabelaDejanskiObiskovFixenDat = [];
        this.tabelaDejanskiObiskovFixenDat[0] = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: undefined });
        this.tabelaDejanskiObiskov = [];
        this.tabelaDejanskiObiskov[0] = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '', dodaj: '', fiksniDatum: '', idDelovniNalog: 0 });
        var parts = this.izbraniDatum.split('-');
        var datum = parts[0] + '-' + parts[1] + '-' + (Number(parts[2]) + 1).toString();
        console.log(this.tabelaDelovnihNalogov);
        for (var _i = 0, _a = this.tabelaObiskovVsi; _i < _a.length; _i++) {
            var obi = _a[_i];
            if (event == obi.idObiska) {
                console.log(obi.dejanskiDatumObiska);
                console.log(datum);
                obi.dejanskiDatumObiska = datum;
                var neki = false;
                for (var _b = 0, _c = this.tabelaDelovnihNalogov; _b < _c.length; _b++) {
                    var d = _c[_b];
                    for (var _d = 0, _e = d.obisks; _d < _e.length; _d++) {
                        var b = _e[_d];
                        if (b.idobisk == obi.idObiska) {
                            this.delovniNalog = d;
                            neki = true;
                            break;
                        }
                    }
                    if (neki == true) {
                        break;
                    }
                }
                this.DNService.updateDatum(obi, this.delovniNalog).subscribe(function (res) { console.log("uspeh"); }, function (err) { console.log("neuspeh"); });
                //TODO tuki pride rest klic za spremembo datuma znotraj baze;
                break;
            }
        }
        datum = this.izbraniDatum;
        for (var _f = 0, _g = this.tabelaObiskovVsi; _f < _g.length; _f++) {
            var ob = _g[_f];
            if (ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'DA') {
                ob.dodaj = 'Fiksni datum';
                ob.fiksniDatum = 'DA';
                this.tabelaDejanskiObiskovFixenDat[j] = ob;
                j = j + 1;
            }
            else if (ob.fiksniDatum == 'DA' && ob.dejanskiDatumObiska != datum) {
                ob.dodaj = 'Fiksni datum';
                ob.fiksniDatum = 'DA';
                this.tabelaDejanskiObiskov[i] = ob;
                i = i + 1;
            }
            else if (ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'NE') {
                ob.dodaj = 'Odstrani';
                ob.fiksniDatum = 'NE';
                this.tabelaDejanskiObiskovFixenDat[j] = ob;
                j = j + 1;
            }
            else {
                ob.dodaj = 'Dodaj';
                ob.fiksniDatum = 'NE';
                this.tabelaDejanskiObiskov[i] = ob;
                i = i + 1;
            }
        }
        this.tabelaDejanskiObiskov = this.bubbleSort(this.tabelaDejanskiObiskov);
        if (this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0) {
            this.aliJeVecji = true;
        }
        else {
            this.aliJeVecji = false;
        }
    };
    return PlaniranjeObiskovComponent;
}());
PlaniranjeObiskovComponent = __decorate([
    core_1.Component({
        selector: 'planiranjeObiskov',
        templateUrl: './planiranjeObiskov.component.html',
        styleUrls: ['./planiranjeObiskov.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, izpisDN_service_1.izpisDNService, common_1.DatePipe])
], PlaniranjeObiskovComponent);
exports.PlaniranjeObiskovComponent = PlaniranjeObiskovComponent;
//# sourceMappingURL=planiranjeObiskov.component.js.map
