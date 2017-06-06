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
var izpisDN_service_1 = require("./izpisDN.service");
var izpisDelovnihNalogovComponent = (function () {
    function izpisDelovnihNalogovComponent(router, http, DNService) {
        this.router = router;
        this.http = http;
        this.DNService = DNService;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.aliObstaja = false;
        this.aliJeLockanMS = false;
        this.aliJeLockanZD = false;
        this.izdajatelji = [{ 'ime': '', 'sifra': '', 'id': 0 }];
        this.obiski = [{ 'name': '', 'id': 0 }];
        this.pacienti = [{ 'ime': '', 'priimek': '', 'id': 0 }];
        this.sestre = [{ 'ime': '', 'sifra': '', 'id': 0 }];
        this.izbraniIzdajatelj = this.izdajatelji[0];
        this.izbraniObisk = this.obiski[0];
        this.izbraniPacient = this.pacienti[0];
        this.izbranaSestra = this.sestre[0];
        this.izbraniDatumIzdajeOd = '';
        this.izbraniDatumIzdajeDo = '';
        //delovniNalogi: dN[] = [];
        this.delovniNalogi = [{ idDelovnegaNaloga: '', izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', datumIzdaje: '' }];
    }
    //podrobniOpis = [{''}]
    izpisDelovnihNalogovComponent.prototype.ngOnInit = function () {
        //poiscemo zdravstvenega delavca
        var _this = this;
        var headers3 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        //rest klic za iskanje zdravstvenih delavcev
        this.http.get(this.restUrl + "/zdravstveniDelavec/" + localStorage['iduporabnik'], { headers: headers3 }).subscribe(function (res) {
            _this.res = res.json();
            var vmesna = JSON.stringify(_this.res);
            var dobiZd = JSON.parse(vmesna);
            localStorage.setItem('idZdravstvenegaDelavca', dobiZd.idzdravstveniDelavec.toString());
            localStorage.setItem('idIzv', dobiZd.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev);
            //preverimo kdo želi videti svoje delovne naloge
            if (localStorage['vloga'] == 'Zdravnik' || localStorage['vloga'] == 'PatronaznaSluzba') {
                _this.izdajatelji[0].ime = dobiZd.ime + ' ' + dobiZd.priimek;
                _this.izdajatelji[0].sifra = dobiZd.sifra;
                _this.izdajatelji[0].id = dobiZd.idzdravstveniDelavec;
            }
            else if (localStorage['vloga'] == 'PatronaznaSestra') {
                _this.sestre[0].ime = dobiZd.ime + ' ' + dobiZd.priimek;
                _this.sestre[0].sifra = dobiZd.sifra;
                _this.sestre[0].id = dobiZd.idzdravstveniDelavec;
            }
        });
        setTimeout(function () {
            //TODO rest klic za pridobivanje delovnega naloga
            if (localStorage['vloga'] == 'PatronaznaSluzba') {
                _this.DNService.getDelovneNalogePrekIzv(Number(localStorage.getItem('idIzv'))).subscribe(function (res) {
                    _this.delovniNalogiVsi = res;
                    var i = 0; //stevec za delovneNaloge
                    var d = 0; //stevec za paciente
                    var j = 0; //stevec za vrste obiskov
                    var m = 0; //stevec za zdravstvene delavce
                    var n = 1; //stevec za zdravstvene delavce izd
                    //setanje izpisa delovnih nalogov ob initializaciji
                    for (var _i = 0, _a = _this.delovniNalogiVsi; _i < _a.length; _i++) {
                        var dn = _a[_i];
                        var delovniN = ({ idDelovnegaNaloga: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', datumIzdaje: '' });
                        _this.aliObstaja = false;
                        delovniN.idDelovnegaNaloga = dn.iddelovniNalog;
                        delovniN.vrstaObiska = dn.vrstaObiska.opis;
                        //dodaj v subseznam obiskov
                        for (var _b = 0, _c = _this.obiski; _b < _c.length; _b++) {
                            var vrsta = _c[_b];
                            if (vrsta.id == dn.vrstaObiska.idvrstaObiska) {
                                _this.aliObstaja = true;
                                break;
                            }
                        }
                        if (_this.aliObstaja == false) {
                            var obisk = ({ 'name': '', 'id': 0 });
                            obisk.name = dn.vrstaObiska.opis;
                            obisk.id = dn.vrstaObiska.idvrstaObiska;
                            _this.obiski[j] = obisk;
                            j = j + 1;
                        }
                        //TODO izpis vseh pacientov for loop
                        //dodaj v subseznam pacientov
                        for (var _d = 0, _e = dn.pacients; _d < _e.length; _d++) {
                            var pac = _e[_d];
                            _this.aliObstaja = false;
                            delovniN.pacienti = pac.ime + ' ' + pac.priimek + ' ' + delovniN.pacienti;
                            for (var _f = 0, _g = _this.pacienti; _f < _g.length; _f++) {
                                var pacient = _g[_f];
                                if (pacient.id == pac.idpacient) {
                                    _this.aliObstaja = true;
                                    break;
                                }
                            }
                            if (_this.aliObstaja == false) {
                                var pacien = ({ idpacient: 0, ime: '', priimek: '' });
                                pacien.id = pac.idpacient;
                                pacien.ime = pac.ime;
                                pacien.priimek = pac.priimek;
                                _this.pacienti[d] = pacien;
                                d = d + 1;
                            }
                        }
                        //setanje patronaznih sester
                        for (var _h = 0, _j = dn.zdravstveniDelavecs; _h < _j.length; _h++) {
                            var zdr = _j[_h];
                            _this.aliObstaja = false;
                            if (zdr.okolis != null) {
                                delovniN.patronaznaSestra = zdr.ime + " " + zdr.priimek + " [" + zdr.sifra + "] " + delovniN.patronaznaSestra;
                                //pregled Sester
                                for (var _k = 0, _l = _this.sestre; _k < _l.length; _k++) {
                                    var ses = _l[_k];
                                    if (ses.id == zdr.idzdravstveniDelavec) {
                                        _this.aliObstaja = true;
                                        break;
                                    }
                                }
                                if (_this.aliObstaja == false) {
                                    var novaS = ({ ime: '', sifra: '', id: 0 });
                                    novaS.ime = zdr.ime + ' ' + zdr.priimek;
                                    novaS.sifra = zdr.sifra;
                                    novaS.id = zdr.idzdravstveniDelavec;
                                    _this.sestre[m] = novaS;
                                    m = m + 1;
                                }
                            }
                            else {
                                _this.aliObstaja = false;
                                for (var _m = 0, _o = _this.izdajatelji; _m < _o.length; _m++) {
                                    var zd = _o[_m];
                                    if (zd.id == zdr.idzdravstveniDelavec) {
                                        _this.aliObstaja = true;
                                        break;
                                    }
                                }
                                if (_this.aliObstaja == false) {
                                    var novZd = ({ ime: '', sifra: '', id: 0 });
                                    novZd.ime = zdr.ime + ' ' + zdr.priimek;
                                    novZd.sifra = zdr.sifra;
                                    novZd.id = zdr.idzdravstveniDelavec;
                                    _this.izdajatelji[n] = novZd;
                                    n = n + 1;
                                }
                                delovniN.izdajatelj = zdr.ime + " " + zdr.priimek + " [" + zdr.sifra + "]";
                            }
                        }
                        delovniN.datumIzdaje = dn.datumIzdaje;
                        _this.delovniNalogi[i] = delovniN;
                        //stevec ++
                        i = i + 1;
                    }
                    _this.delovniNalogiVsi = _this.delovniNalogi;
                    _this.Onsubmit();
                });
            }
            else if (localStorage['vloga'] == 'Zdravnik' || localStorage['vloga'] == 'PatronaznaSestra') {
                _this.DNService.getDelovneNaloge(Number(localStorage.getItem('idZdravstvenegaDelavca')), 0).subscribe(function (res) {
                    _this.delovniNalogiVsi = res;
                    var i = 0; //stevec za delovneNaloge
                    var d = 0; //stevec za paciente
                    var j = 0; //stevec za vrste obiskov
                    var m = 0; //stevec za zdravstvene delavce
                    var n = 0;
                    if (localStorage['vloga'] == 'Zdravnik') {
                        _this.aliJeLockanZD = true;
                        n = 1;
                    }
                    else {
                        _this.aliJeLockanMS = true;
                        m = 1;
                    }
                    //setanje izpisa delovnih nalogov ob initializaciji
                    for (var _i = 0, _a = _this.delovniNalogiVsi; _i < _a.length; _i++) {
                        var dn = _a[_i];
                        var delovniN = ({ idDelovnegaNaloga: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', datumIzdaje: '' });
                        _this.aliObstaja = false;
                        delovniN.idDelovnegaNaloga = dn.iddelovniNalog;
                        delovniN.vrstaObiska = dn.vrstaObiska.opis;
                        //dodaj v subseznam obiskov
                        for (var _b = 0, _c = _this.obiski; _b < _c.length; _b++) {
                            var vrsta = _c[_b];
                            if (vrsta.id == dn.vrstaObiska.idvrstaObiska) {
                                _this.aliObstaja = true;
                                break;
                            }
                        }
                        if (_this.aliObstaja == false) {
                            var obisk = ({ 'name': '', 'id': '' });
                            obisk.name = dn.vrstaObiska.opis;
                            obisk.id = dn.vrstaObiska.idvrstaObiska;
                            _this.obiski[j] = obisk;
                            j = j + 1;
                        }
                        //TODO izpis vseh pacientov for loop
                        //dodaj v subseznam pacientov
                        for (var _d = 0, _e = dn.pacients; _d < _e.length; _d++) {
                            var pac = _e[_d];
                            _this.aliObstaja = false;
                            delovniN.pacienti = pac.ime + ' ' + pac.priimek + ' ' + delovniN.pacienti;
                            for (var _f = 0, _g = _this.pacienti; _f < _g.length; _f++) {
                                var pacient = _g[_f];
                                if (pacient.id == pac.idpacient) {
                                    _this.aliObstaja = true;
                                    break;
                                }
                            }
                            if (_this.aliObstaja == false) {
                                var pacien = ({ idpacient: 0, ime: '', priimek: '' });
                                pacien.id = pac.idpacient;
                                pacien.ime = pac.ime;
                                pacien.priimek = pac.priimek;
                                _this.pacienti[d] = pacien;
                                d = d + 1;
                            }
                        }
                        //setanje patronaznih sester
                        for (var _h = 0, _j = dn.zdravstveniDelavecs; _h < _j.length; _h++) {
                            var zdr = _j[_h];
                            _this.aliObstaja = false;
                            if (zdr.okolis != null) {
                                delovniN.patronaznaSestra = zdr.ime + ' ' + zdr.priimek + ' [' + zdr.sifra + "] " + delovniN.patronaznaSestra;
                                //pregled Sester
                                for (var _k = 0, _l = _this.sestre; _k < _l.length; _k++) {
                                    var ses = _l[_k];
                                    if (ses.id == zdr.idzdravstveniDelavec) {
                                        _this.aliObstaja = true;
                                        break;
                                    }
                                }
                                if (_this.aliObstaja == false) {
                                    var novaS = ({ ime: '', sifra: '', id: 0 });
                                    novaS.ime = zdr.ime + ' ' + zdr.priimek;
                                    novaS.sifra = zdr.sifra;
                                    novaS.id = zdr.idzdravstveniDelavec;
                                    _this.sestre[m] = novaS;
                                    m = m + 1;
                                }
                            }
                            else {
                                _this.aliObstaja = false;
                                for (var _m = 0, _o = _this.izdajatelji; _m < _o.length; _m++) {
                                    var zd = _o[_m];
                                    if (zd.id == zdr.idzdravstveniDelavec) {
                                        _this.aliObstaja = true;
                                    }
                                }
                                if (_this.aliObstaja == false) {
                                    var noviZdr = ({ ime: '', sifra: '', id: 0 });
                                    noviZdr.ime = zdr.ime + ' ' + zdr.priimek;
                                    noviZdr.sifra = zdr.sifra;
                                    noviZdr.id = zdr.idzdravstveniDelavec;
                                    _this.izdajatelji[n] = noviZdr;
                                    n = n + 1;
                                }
                                delovniN.izdajatelj = zdr.ime + ' ' + zdr.priimek + ' [' + zdr.sifra + ']';
                            }
                        }
                        delovniN.datumIzdaje = dn.datumIzdaje;
                        _this.delovniNalogi[i] = delovniN;
                        //stevec ++
                        i = i + 1;
                    }
                    _this.delovniNalogiVsi = _this.delovniNalogi;
                });
            }
        }, 2000);
    };
    izpisDelovnihNalogovComponent.prototype.Onsubmit = function () {
        var i = 0;
        var od = '';
        var datDo = '';
        if (this.izbraniDatumIzdajeOd != '') {
            var parts = this.izbraniDatumIzdajeOd.split('-');
            od = parts[0] + parts[1] + parts[2];
        }
        if (this.izbraniDatumIzdajeDo != '') {
            var parts = this.izbraniDatumIzdajeDo.split('-');
            datDo = parts[0] + parts[1] + parts[2];
        }
        var delovniN = ({ idDelovnegaNaloga: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', datumIzdaje: '' });
        this.delovniNalogi = [];
        for (var _i = 0, _a = this.delovniNalogiVsi; _i < _a.length; _i++) {
            var delovni = _a[_i];
            var test = true;
            var parts = delovni.datumIzdaje.split('-');
            var dtmizdaje = parts[0] + parts[1] + parts[2];
            var tabelaIfov = [false, false, false, false, false];
            if (delovni.vrstaObiska == this.izbraniObisk.name || this.izbraniObisk.name == '' || this.izbraniObisk.name == undefined) {
                tabelaIfov[0] = true;
            }
            if (delovni.izdajatelj.indexOf(this.izbraniIzdajatelj.sifra) >= 0 || this.izbraniIzdajatelj.sifra == '' || this.izbraniIzdajatelj.sifra == undefined) {
                tabelaIfov[1] = true;
            }
            if (delovni.pacienti.indexOf(this.izbraniPacient.ime + " " + this.izbraniPacient.priimek) >= 0 || this.izbraniPacient.ime == '' || this.izbraniPacient.ime == undefined) {
                tabelaIfov[2] = true;
            }
            if (delovni.patronaznaSestra.indexOf(this.izbranaSestra.sifra) >= 0 || this.izbranaSestra.sifra == '' || this.izbranaSestra.sifra == undefined) {
                tabelaIfov[3] = true;
            }
            if ((Number(dtmizdaje) >= Number(od) && Number(dtmizdaje) <= Number(datDo)) || (datDo == '' && Number(dtmizdaje) >= Number(od)) || (od == '' && Number(dtmizdaje) <= Number(datDo)) || (datDo == '' && od == '')) {
                tabelaIfov[4] = true;
            }
            for (var _b = 0, tabelaIfov_1 = tabelaIfov; _b < tabelaIfov_1.length; _b++) {
                var d = tabelaIfov_1[_b];
                if (d == false) {
                    test = false;
                    break;
                }
            }
            if (test == true) {
                delovniN = delovni;
                this.delovniNalogi[i] = delovniN;
                i = i + 1;
            }
        }
    };
    izpisDelovnihNalogovComponent.prototype.OnSub = function (vrednost) {
        this.router.navigate(['/podrobnosti/${vrednost}']);
    };
    return izpisDelovnihNalogovComponent;
}());
izpisDelovnihNalogovComponent = __decorate([
    core_1.Component({
        selector: 'delovniNalogi',
        templateUrl: './izpisDelovnihNalogov.component.html',
        styleUrls: ['./izpisDelovnihNalogov.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, izpisDN_service_1.izpisDNService])
], izpisDelovnihNalogovComponent);
exports.izpisDelovnihNalogovComponent = izpisDelovnihNalogovComponent;
//# sourceMappingURL=izpisDelovnihNalogov.component.js.map
