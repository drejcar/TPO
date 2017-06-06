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
var common_1 = require("@angular/common");
var izpisDN_service_1 = require("../izpisDelovnihNalogov/izpisDN.service");
var VnosObiskComponent = (function () {
    function VnosObiskComponent(http, router, route, location, dnService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.location = location;
        this.dnService = dnService;
        this.idObiska = 0;
        this.aplikacijaInjekcije = false;
        this.kontrolaZdravstvenegaStanja = false;
        this.obiskNosecnice = false;
        this.obiskNovorojencka = false;
        this.obiskOtrocnice = false;
        this.odvzemKrvi = false;
        this.preventivaStarostnika = false;
        this.dis = false;
        this.spremeni = false;
        this.checkboxvalid = false;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.baseUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.porociloAplikacijaInjekcijeA = ({ 'akt20': '', 'akt10': '' });
        this.porociloPreventivaStarostnika = ({
            'akt10': '',
            'akt20': '',
            'akt30a': undefined,
            'akt30b': undefined,
            'akt40': undefined,
            'akt50': undefined,
            'akt60': undefined,
            'akt70': undefined,
            'akt80': '',
            'akt90': '',
            'akt100a': '',
            'akt100b': '',
            'akt110': '',
            'akt120a': '',
            'akt120b': '',
            'akt120c': '',
            'akt120d': '',
            'akt120e': '',
            'akt130': '',
            'akt140': '',
            'akt150a': '',
            'akt150b': '',
            'akt150c': '',
            'akt160': '',
            'akt170': ''
        });
        this.porociloOdvzemKrvi = ({
            'akt10modra': undefined,
            'akt10rdeca': undefined,
            'akt10rumena': undefined,
            'akt10zelena': undefined,
            'akt20': ''
        });
        this.porociloObiskOtrocnice = ({
            'akt10a': '',
            'akt10b': undefined,
            'akt10c': undefined,
            'akt10d': '',
            'akt20': '',
            'akt30': '',
            'akt40': '',
            'akt50': '',
            'akt60': '',
            'akt70': '',
            'akt80': '',
            'akt90': '',
            'akt100': '',
            'akt110': '',
            'akt120': '',
            'akt130': '',
            'akt140': '',
            'akt150': '',
            'akt160a': undefined,
            'akt160b': undefined,
            'akt170': undefined,
            'akt180': undefined,
            'akt190': undefined,
            'akt200': undefined,
            'akt210': '',
            'akt220': '',
            'akt230a': '',
            'akt230b': '',
            'akt240a': '',
            'akt240b': ''
        });
        this.stevec = 0;
        this.obiskn = ({
            'idobisk': 0,
        });
        this.neki = ({
            'niPosebnosti': false,
            'mikcija': false,
            'defekacija': false,
            'napenjanje': false,
            'kolike': false,
            'bruhanje': false,
        });
        this.porociloObiskNovorojencka = [{
                'akt10': '',
                'akt20': '',
                'akt30': '',
                'akt40': '',
                'akt50': '',
                'akt60': undefined,
                'akt70': undefined,
                'akt80': '',
                'akt80b': '',
                'akt90a': '',
                'akt90b': '',
                'akt100a': '',
                'akt100b': '',
                'akt110': '',
                'akt120': '',
                'akt130': '',
                'akt140': '',
                'ime': '',
                'priimek': '',
                'stevilkaZdravstvenegaZavarovanja': '',
                'obisk': this.obiskn,
                'check': this.neki,
            }];
        this.porociloObiskNosecnice = ({
            'akt10': '',
            'akt20': '',
            'akt30': '',
            'akt40': '',
            'akt50': '',
            'akt60': '',
            'akt70': '',
            'akt80': '',
            'akt90': '',
            'akt100': '',
            'akt110': '',
            'akt120': '',
            'akt130': '',
            'akt140': '',
            'akt150': '',
            'akt160': '',
            'akt170a': '',
            'akt170b': '',
            'akt180a': '',
            'akt180b': '',
            'akt190a': undefined,
            'akt190b': undefined,
            'akt200': '',
            'akt210': '',
            'akt220': undefined,
            'akt230': undefined,
            'akt240': undefined,
        });
        this.porociloKontrolaZdravstvenegaStanja = ({
            'akt10': '',
            'akt20a': undefined,
            'akt20b': undefined,
            'akt30': undefined,
            'akt40': undefined,
            'akt50': undefined,
            'akt60a': undefined,
            'akt60b': '',
            'akt70': undefined,
            'akt80a': '',
            'akt80b': '',
            'akt90': '',
            'akt100': '',
            'akt110': '',
        });
        this.vrstaObiska = 0;
        this.pacienta = ({ 'ime': '', 'priimek': '', 'stevilkaZdravstvenegaZavarovanja': '' });
        this.pacient = [{ 'pacient': this.pacienta }];
        this.idDn = 0;
        this.prviZeOpravljen = false;
        this.datumRojstva = '';
        this.porodnaTeža = 0;
        this.porodnaVisina = 0;
        this.submitted = false;
        this.idDelovniNalog = 0;
    }
    VnosObiskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.dnService.getDelovniNalog(Number(+params['id2'])); }).subscribe(function (res) {
            _this.dn = res;
            _this.vrstaObiska = _this.dn.vrstaObiska.idvrstaObiska;
            var stevec = 0;
            _this.idDelovniNalog = _this.dn.iddelovniNalog;
            if (_this.vrstaObiska == 20 || _this.vrstaObiska == 30) {
                console.log(_this.dn.pacients);
                for (var _i = 0, _a = _this.dn.pacients; _i < _a.length; _i++) {
                    var pacients = _a[_i];
                    console.log(pacients);
                    if (pacients.uporabnik == null) {
                        console.log(pacients);
                        var nov = ({ 'pacient': _this.pacienta });
                        _this.pacient[_this.stevec] = nov;
                        _this.pacient[_this.stevec].pacient.ime = pacients.ime;
                        _this.pacient[_this.stevec].pacient.priimek = pacients.priimek;
                        _this.pacient[_this.stevec].pacient.stevilkaZdravstvenegaZavarovanja = pacients.stevilkaZdravstvenegaZavarovanja;
                        _this.stevec = _this.stevec + 1;
                    }
                    else {
                        var nov = ({ 'pacient': '' });
                        _this.mt = nov;
                        _this.mt = pacients.ime + " " + pacients.priimek;
                    }
                }
            }
            else {
                _this.mt = _this.dn.pacients[0].ime + " " + _this.dn.pacients[0].priimek;
            }
            _this.idDn = _this.dn.iddelovniNalog;
            _this.route.params.switchMap(function (params) { return _this.dnService.getObisk(Number(+params['id'])); }).subscribe(function (res) {
                _this.obisk = res;
                _this.idObiska = _this.obisk.idobisk;
                var stvc = 0;
                for (var _i = 0, _a = _this.dn.obisks; _i < _a.length; _i++) {
                    var obiski = _a[_i];
                    if (obiski.opravljen == 1 && obiski.idobisk != _this.idObiska) {
                        _this.prviZeOpravljen = true;
                        break;
                    }
                }
                var date = new Date();
                console.log(date.getFullYear());
                var mesec = date.getMonth() + 1;
                var dni = date.getDate();
                var praviMesec = '';
                var praviDan = '';
                if (mesec < 10) {
                    praviMesec = '0' + mesec.toString();
                }
                if (dni < 10) {
                    praviDan = '0' + dni.toString();
                }
                if (mesec >= 10) {
                    praviMesec = mesec.toString();
                }
                if (dni >= 10) {
                    praviDan = dni.toString();
                }
                var datum = (date.getFullYear().toString()) + praviMesec + praviDan;
                _this.dis = false;
                var parts = _this.obisk.dejanskiDatumObiska.split('-');
                var prvi = parts[0] + parts[1] + parts[2];
                console.log(prvi);
                console.log(datum);
                console.log(_this.vrstaObiska);
                if (((Number(datum) - Number(prvi)) > 1) || localStorage.getItem('vloga') == 'Pacient') {
                    _this.dis = true;
                }
                if (localStorage.getItem('vloga') == 'PatronaznaSluzba' || localStorage.getItem('vloga') == 'Zdravnik' || localStorage.getItem('vloga') == 'Pacient') {
                    _this.dis = true;
                    _this.prviZeOpravljen = true;
                }
                if (_this.vrstaObiska == 10) {
                    if (_this.obisk.porociloObiskNosecnice == null) {
                        _this.obiskNosecnice = true;
                    }
                    else {
                        _this.obiskNosecnice = true;
                        _this.spremeni = true;
                        _this.porociloObiskNosecnice = _this.obisk.porociloObiskNosecnice;
                    }
                }
                else if (_this.vrstaObiska == 20) {
                    if (_this.obisk.porociloObiskOtrocnice == null) {
                        _this.obiskOtrocnice = true;
                        _this.obiskNovorojencka = true;
                        console.log(_this.pacient);
                        _this.stevec = 0;
                        for (var _b = 0, _c = _this.dn.obisks; _b < _c.length; _b++) {
                            var obiski = _c[_b];
                            if (obiski.opravljen == 1) {
                                _this.porociloObiskOtrocnice.akt10a = obiski.porociloObiskOtrocnice.akt10a;
                                _this.porociloObiskOtrocnice.akt10b = obiski.porociloObiskOtrocnice.akt10b;
                                _this.porociloObiskOtrocnice.akt10c = obiski.porociloObiskOtrocnice.akt10c;
                            }
                        }
                        for (var _d = 0, _e = _this.pacient; _d < _e.length; _d++) {
                            var steviloOtrok = _e[_d];
                            console.log(steviloOtrok);
                            var novi = ({ 'idobisk': _this.idObiska });
                            var nov = ({
                                'akt10': '',
                                'akt20': '',
                                'akt30': '',
                                'akt40': '',
                                'akt50': '',
                                'akt60': 0,
                                'akt70': 0,
                                'akt80': '',
                                'akt80b': '',
                                'akt90a': '',
                                'akt90b': '',
                                'akt100a': '',
                                'akt100b': '',
                                'akt110': '',
                                'akt120': '',
                                'akt130': '',
                                'akt140': '',
                                'ime': steviloOtrok.pacient.ime,
                                'priimek': steviloOtrok.pacient.priimek,
                                'stevilkaZdravstvenegaZavarovanja': steviloOtrok.pacient.stevilkaZdravstvenegaZavarovanja,
                                'obisk': novi,
                                'check': _this.neki,
                            });
                            _this.porociloObiskNovorojencka[_this.stevec] = nov;
                            _this.stevec = _this.stevec + 1;
                        }
                    }
                    else {
                        _this.obiskOtrocnice = true;
                        _this.obiskNovorojencka = true;
                        _this.spremeni = true;
                        _this.porociloObiskNovorojencka = _this.obisk.porociloObiskNovorojenckas;
                        console.log(_this.porociloObiskNovorojencka);
                        for (var _f = 0, _g = _this.porociloObiskNovorojencka; _f < _g.length; _f++) {
                            var n = _g[_f];
                            n.check = _this.neki;
                            if (n.akt100a == 'Ni posebnosti') {
                                n.check.niPosebnosti = true;
                            }
                            else {
                                var parts = n.akt100a.split(" ");
                                for (var _h = 0, parts_1 = parts; _h < parts_1.length; _h++) {
                                    var prt = parts_1[_h];
                                    if (prt == 'Mikcija') {
                                        n.check.mikcija = true;
                                    }
                                    if (prt == 'Defekacija') {
                                        n.check.defekacija = true;
                                    }
                                    if (prt == 'Napenjanje') {
                                        n.check.napenjanje = true;
                                    }
                                    if (prt == 'Kolike') {
                                        n.check.kolike = true;
                                    }
                                    if (prt == 'Bruhanje') {
                                        n.check.bruhanje = true;
                                    }
                                }
                            }
                        }
                        console.log(_this.porociloObiskNovorojencka);
                        _this.porociloObiskOtrocnice = _this.obisk.porociloObiskOtrocnice;
                    }
                }
                else if (_this.vrstaObiska == 30) {
                    if (_this.obisk.porociloObiskNovorojencka == null) {
                        _this.obiskOtrocnice = true;
                        _this.obiskNovorojencka = true;
                        _this.stevec = 0;
                        for (var _j = 0, _k = _this.dn.obisks; _j < _k.length; _j++) {
                            var obiski = _k[_j];
                            if (obiski.opravljen == 1) {
                                _this.porociloObiskOtrocnice.akt10a = obiski.porociloObiskOtrocnice.akt10a;
                                _this.porociloObiskOtrocnice.akt10b = obiski.porociloObiskOtrocnice.akt10b;
                                _this.porociloObiskOtrocnice.akt10c = obiski.porociloObiskOtrocnice.akt10c;
                            }
                        }
                        for (var _l = 0, _m = _this.pacient; _l < _m.length; _l++) {
                            var steviloOtrok = _m[_l];
                            var novi = ({ 'idobisk': _this.idObiska });
                            var nov = ({
                                'akt10': '',
                                'akt20': '',
                                'akt30': '',
                                'akt40': '',
                                'akt50': '',
                                'akt60': 0,
                                'akt70': 0,
                                'akt80': '',
                                'akt80b': '',
                                'akt90a': '',
                                'akt90b': '',
                                'akt100a': '',
                                'akt100b': '',
                                'akt110': '',
                                'akt120': '',
                                'akt130': '',
                                'akt140': '',
                                'ime': steviloOtrok.pacient.ime,
                                'priimek': steviloOtrok.pacient.priimek,
                                'stevilkaZdravstvenegaZavarovanja': steviloOtrok.pacient.stevilkaZdravstvenegaZavarovanja,
                                'obisk': novi,
                                'check': _this.neki,
                            });
                            _this.porociloObiskNovorojencka[_this.stevec] = nov;
                            _this.stevec = _this.stevec + 1;
                        }
                    }
                    else {
                        _this.obiskNovorojencka = true;
                        _this.obiskOtrocnice = true;
                        _this.spremeni = true;
                        _this.porociloObiskNovorojencka = _this.obisk.porociloObiskNovorojenckas;
                        //dodajamo k check
                        for (var _o = 0, _p = _this.porociloObiskNovorojencka; _o < _p.length; _o++) {
                            var n = _p[_o];
                            n.check = _this.neki;
                            if (n.akt100a == 'Ni posebnosti') {
                                n.check.niPosebnosti = true;
                            }
                            else {
                                var parts = n.akt100a.split(" ");
                                for (var _q = 0, parts_2 = parts; _q < parts_2.length; _q++) {
                                    var prt = parts_2[_q];
                                    if (prt == 'Mikcija') {
                                        n.check.mikcija = true;
                                    }
                                    if (prt == 'Defekacija') {
                                        n.check.defekacija = true;
                                    }
                                    if (prt == 'Napenjanje') {
                                        n.check.napenjanje = true;
                                    }
                                    if (prt == 'Kolike') {
                                        n.check.kolike = true;
                                    }
                                    if (prt == 'Bruhanje') {
                                        n.check.bruhanje = true;
                                    }
                                }
                            }
                        }
                        console.log(_this.porociloObiskNovorojencka);
                        _this.porociloObiskOtrocnice = _this.obisk.porociloObiskOtrocnice;
                    }
                }
                else if (_this.vrstaObiska == 40) {
                    if (_this.obisk.porociloPreventivaStarostnika == null) {
                        _this.preventivaStarostnika = true;
                    }
                    else {
                        _this.preventivaStarostnika = true;
                        _this.spremeni = true;
                        _this.porociloPreventivaStarostnika = _this.obisk.porociloPreventivaStarostnika;
                    }
                }
                else if (_this.vrstaObiska == 50) {
                    if (_this.obisk.porociloAplikacijaInjekcije == null) {
                        _this.aplikacijaInjekcije = true;
                    }
                    else {
                        _this.aplikacijaInjekcije = true;
                        _this.spremeni = true;
                        _this.porociloAplikacijaInjekcijeA = _this.obisk.porociloAplikacijaInjekcije;
                    }
                }
                else if (_this.vrstaObiska == 60) {
                    if (_this.obisk.porociloOdvzemKrvi == null) {
                        _this.odvzemKrvi = true;
                    }
                    else {
                        _this.odvzemKrvi = true;
                        _this.spremeni = true;
                        _this.porociloOdvzemKrvi = _this.obisk.porociloOdvzemKrvi;
                    }
                }
                else if (_this.vrstaObiska == 70) {
                    if (_this.obisk.porociloKontrolaZdravstvenegaStanja == null) {
                        _this.kontrolaZdravstvenegaStanja = true;
                    }
                    else {
                        _this.kontrolaZdravstvenegaStanja = true;
                        _this.spremeni = true;
                        _this.porociloKontrolaZdravstvenegaStanja = _this.obisk.porociloKontrolaZdravstvenegaStanja;
                    }
                }
            });
        });
    };
    VnosObiskComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.vrstaObiska == 10) {
            this.obisk.porociloObiskNosecnice = this.porociloObiskNosecnice;
        }
        else if (this.vrstaObiska == 20) {
            this.obisk.porociloObiskOtrocnice = this.porociloObiskOtrocnice;
            var absolutni = [{}];
            var novStevec = 0;
            for (var _i = 0, _a = this.porociloObiskNovorojencka; _i < _a.length; _i++) {
                var n = _a[_i];
                //noinspection TypeScriptUnresolvedFunction
                absolutni[novStevec] = Object.assign({}, n);
                delete absolutni[novStevec].check;
                if (n.check.niPosebnosti == false) {
                    if (n.check.mikcija == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Mikcija';
                    }
                    if (n.check.defekacija == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Defekacija';
                    }
                    if (n.check.napenjanje == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Napenjanje';
                    }
                    if (n.check.Kolike == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Kolike';
                    }
                    if (n.check.bruhanje == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Bruhanje';
                    }
                }
                else {
                    absolutni[novStevec].akt100a = 'Ni posebnosti';
                }
                novStevec = novStevec + 1;
            }
            this.obisk.porociloObiskNovorojenckas = absolutni;
        }
        else if (this.vrstaObiska == 30) {
            this.obisk.porociloObiskOtrocnice = this.porociloObiskOtrocnice;
            var absolutni = [{}];
            var novStevec = 0;
            for (var _b = 0, _c = this.porociloObiskNovorojencka; _b < _c.length; _b++) {
                var n = _c[_b];
                //noinspection TypeScriptUnresolvedFunction
                absolutni[novStevec] = Object.assign({}, n);
                delete absolutni[novStevec].check;
                if (n.check.niPosebnosti == false) {
                    if (n.check.mikcija == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Mikcija';
                    }
                    if (n.check.defekacija == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Defekacija';
                    }
                    if (n.check.napenjanje == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Napenjanje';
                    }
                    if (n.check.Kolike == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Kolike';
                    }
                    if (n.check.bruhanje == true) {
                        absolutni[novStevec].akt100a = absolutni[novStevec].akt100a + ' ' + 'Bruhanje';
                    }
                }
                else {
                    absolutni[novStevec].akt100a = 'Ni posebnosti';
                }
                novStevec = novStevec + 1;
            }
            this.obisk.porociloObiskNovorojenckas = absolutni;
        }
        else if (this.vrstaObiska == 40) {
            this.obisk.porociloPreventivaStarostnika = this.porociloPreventivaStarostnika;
        }
        else if (this.vrstaObiska == 50) {
            this.obisk.porociloAplikacijaInjekcije = this.porociloAplikacijaInjekcijeA;
        }
        else if (this.vrstaObiska == 60) {
            this.obisk.porociloOdvzemKrvi = this.porociloOdvzemKrvi;
        }
        else if (this.vrstaObiska == 70) {
            this.obisk.porociloKontrolaZdravstvenegaStanja = this.porociloKontrolaZdravstvenegaStanja;
        }
        this.obisk.opravljen = 1;
        var date = new Date();
        console.log(date.getFullYear());
        var mesec = date.getMonth() + 1;
        var dni = date.getDate();
        var praviMesec = '';
        var praviDan = '';
        if (mesec < 10) {
            praviMesec = '0' + mesec.toString();
        }
        if (dni < 10) {
            praviDan = '0' + dni.toString();
        }
        if (mesec >= 10) {
            praviMesec = mesec.toString();
        }
        if (dni >= 10) {
            praviDan = dni.toString();
        }
        var datum = (date.getFullYear().toString()) + "-" + praviMesec + "-" + praviDan;
        this.obisk.dejanskiDatumObiska = datum;
        var novi = ({
            iddelovniNalog: this.idDn,
        });
        this.obisk.delovniNalog = novi;
        console.log(this.obisk);
        this.dnService.posodobiObisk(this.obisk).subscribe(function (res) { _this.submitted = true; });
    };
    VnosObiskComponent.prototype.sprememba = function () {
        var _this = this;
        console.log(this.porociloObiskNovorojencka);
        var nova = ({ 'idobisk': this.idObiska });
        if (this.vrstaObiska == 10) {
            this.http.put(this.baseUrl + "/obiski/porociloobisknosecnice", JSON.stringify(this.porociloObiskNosecnice), { headers: this.headers }).subscribe(function (res) { _this.submitted = true; });
        }
        else if (this.vrstaObiska == 20) {
            this.http.put(this.baseUrl + "/obiski/porociloobiskotrocnice", JSON.stringify(this.porociloObiskOtrocnice), { headers: this.headers }).subscribe(function (res) { console.log("success"); });
            var nov = ({
                idobisk: this.idObiska,
            });
            console.log(this.porociloObiskNovorojencka);
            var absolutni = ({});
            for (var _i = 0, _a = this.porociloObiskNovorojencka; _i < _a.length; _i++) {
                var n = _a[_i];
                n.obisk = nov;
                //noinspection TypeScriptUnresolvedFunction
                absolutni = Object.assign({}, n);
                //for zanka
                delete absolutni.check;
                absolutni.akt100a = '';
                console.log("hello!");
                if (n.check.niPosebnosti == false) {
                    if (n.check.mikcija == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Mikcija';
                    }
                    if (n.check.defekacija == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Defekacija';
                    }
                    if (n.check.napenjanje == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Napenjanje';
                    }
                    if (n.check.Kolike == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Kolike';
                    }
                    if (n.check.bruhanje == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Bruhanje';
                    }
                }
                else {
                    absolutni.akt100a = 'Ni posebnosti';
                }
                console.log("absolutni je:" + absolutni.akt100a);
                this.http.put(this.baseUrl + "/obiski/porociloobisknovorojencka", JSON.stringify(absolutni), { headers: this.headers }).subscribe(function (res) { console.log("success"); });
            }
            this.submitted = true;
        }
        else if (this.vrstaObiska == 30) {
            console.log(this.porociloObiskNovorojencka);
            this.http.put(this.baseUrl + "/obiski/porociloobiskotrocnice", JSON.stringify(this.porociloObiskOtrocnice), { headers: this.headers }).subscribe(function (res) { console.log("success"); });
            var nov = ({
                idobisk: this.idObiska,
            });
            var absolutni = ({});
            for (var _b = 0, _c = this.porociloObiskNovorojencka; _b < _c.length; _b++) {
                var n = _c[_b];
                n.obisk = nov;
                //noinspection TypeScriptUnresolvedFunction
                absolutni = Object.assign({}, n);
                delete absolutni.check;
                absolutni.akt100a = '';
                if (n.check.niPosebnosti == false) {
                    if (n.check.mikcija == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Mikcija';
                    }
                    if (n.check.defekacija == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Defekacija';
                    }
                    if (n.check.napenjanje == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Napenjanje';
                    }
                    if (n.check.Kolike == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Kolike';
                    }
                    if (n.check.bruhanje == true) {
                        absolutni.akt100a = absolutni.akt100a + ' ' + 'Bruhanje';
                    }
                }
                else {
                    absolutni.akt100a = 'Ni posebnosti';
                }
                console.log(absolutni.akt100a);
                this.http.put(this.baseUrl + "/obiski/porociloobisknovorojencka", JSON.stringify(absolutni), { headers: this.headers }).subscribe(function (res) { console.log("success"); });
            }
            this.submitted = true;
        }
        else if (this.vrstaObiska == 40) {
            this.http.put(this.baseUrl + "/obiski/porocilopreventivastarostnika", JSON.stringify(this.porociloPreventivaStarostnika), { headers: this.headers }).subscribe(function (res) { _this.submitted = true; });
        }
        else if (this.vrstaObiska == 50) {
            this.http.put(this.baseUrl + "/obiski/porociloaplikacijainjekcije", JSON.stringify(this.porociloAplikacijaInjekcijeA), { headers: this.headers }).subscribe(function (res) { _this.submitted = true; });
        }
        else if (this.vrstaObiska == 60) {
            this.http.put(this.baseUrl + "/obiski/porociloodvzemkrvi", JSON.stringify(this.porociloOdvzemKrvi), { headers: this.headers }).subscribe(function (res) { _this.submitted = true; });
        }
        else if (this.vrstaObiska == 70) {
            this.http.put(this.baseUrl + "/obiski/porocilozdrstanja", JSON.stringify(this.porociloKontrolaZdravstvenegaStanja), { headers: this.headers }).subscribe(function (res) { _this.submitted = true; });
        }
    };
    VnosObiskComponent.prototype.spremen = function (ime) {
        for (var _i = 0, _a = this.porociloObiskNovorojencka; _i < _a.length; _i++) {
            var n = _a[_i];
            if (ime == n.ime) {
                n.check.niPosebnosti = true;
                n.check.mikcija = false;
                n.check.defekacija = false;
                n.check.napenjanje = false;
                n.check.kolike = false;
                n.check.bruhanje = false;
                break;
            }
        }
    };
    return VnosObiskComponent;
}());
VnosObiskComponent = __decorate([
    core_1.Component({
        selector: 'vnosObisk',
        templateUrl: './vnosObisk.component.html',
        styleUrls: ['./vnosObisk.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, router_1.ActivatedRoute, common_1.Location, izpisDN_service_1.izpisDNService])
], VnosObiskComponent);
exports.VnosObiskComponent = VnosObiskComponent;
//# sourceMappingURL=vnosObisk.component.js.map
