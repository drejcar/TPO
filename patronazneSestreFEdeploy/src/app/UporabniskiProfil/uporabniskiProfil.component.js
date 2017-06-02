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
var uporabnik_service_1 = require("../registracija/uporabnik.service");
var UporabniskiProfilComponent = (function () {
    function UporabniskiProfilComponent(http, router, uporabnikService) {
        this.http = http;
        this.router = router;
        this.uporabnikService = uporabnikService;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.dodaj = false;
        this.razmerjas = [{ 'idsorodstvenoRazmerje': 0, 'opis': '' }];
        this.stevec = 0;
        this.vec = false;
        this.dodajPac = false;
        this.subNiPravi = true;
        this.spoli = [{ 'idspol': 0, 'opis': '' }];
        this.izbranoRazmerje = ({ idsorodstvenoRazmerje: 0, opis: '' });
        this.okolisi = [{ 'idokolis': 1, 'opis': '', 'idposta': 1000 }];
        this.okolisis = [{ 'idokolis': 1, 'opis': '', 'idposta': 1000 }];
        this.izbrOkolis = ({ 'idokolis': 1, 'opis': '', 'idposta': 1000 });
        this.postSt = '';
        this.kime = '';
        this.kpriimek = '';
        this.ktel = '';
        this.kulica = '';
        this.khisnaStevilka = '';
        this.kpostneStevilke = [{}];
        this.devided = '';
        this.krazmerja = [{}];
        this.glavni = 0;
        this.kontakts = null;
        this.posta = ({ 'idposta': 0, 'opis': '' });
        this.kontakt = ({ 'kime': this.kime, 'kpriimek': this.kpriimek, 'ktel': this.ktel, 'kulica': this.kulica, 'khisnaStevilka': this.khisnaStevilka, 'kpostnaStevilka': this.kpostneStevilke[0], 'krazmerje': this.krazmerja[0] });
        this.spol = ({ 'idspol': 0, 'opis': '' });
        this.posta2 = ({ 'idposta': 0, 'opis': '' });
        this.okolis = ({ 'idokolis': 0, 'opis': '', 'posta': this.posta2, });
        this.vloga = ({ 'idvloga': 0, 'opis': '' });
        this.uporabnik = ({ 'iduporabnik': 0, 'aktivirajDo': '', 'zadnjaPrijava': '', 'email': '', 'geslo': '', 'vloga': this.vloga });
        this.model = [{ 'idpacient': 0, 'hisnaStevilka': '', 'ime': '', 'priimek': '', 'stevilkaZdravstvenegaZavarovanja': '', 'telefonskaStevilka': '', 'ulica': '', 'datumRojstva': '', 'kontakt': this.kontakts, 'posta': this.posta, 'sorodstvenoRazmerje': '', 'spol': this.spol, 'okolis': this.okolis, 'uporabnik': this.uporabnik }];
        this.postneStevilke = [{}];
        this.model2 = [{ 'idpacient': 0, 'hisnaStevilka': '', 'ime': '', 'priimek': '', 'stevilkaZdravstvenegaZavarovanja': '', 'telefonskaStevilka': '', 'ulica': '', 'datumRojstva': '', 'kontakt': this.kontakt, 'posta': this.posta, 'sorodstvenoRazmerje': '', 'spol': this.spol, 'okolis': '', 'uporabnik': this.uporabnik }];
        this.model3 = [{}]; /*= [{'idpacient':0,'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','kontakt':this.kontakt,'posta':this.posta,'sorodstvenoRazmerje':'','spol':this.spol,'okolis':this.okolis,'uporabnik':this.uporabnik}];*/
    }
    UporabniskiProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage['iduporabnik']);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.model[0] = ({ 'idpacient': 0, 'hisnaStevilka': '', 'ime': '', 'priimek': '', 'stevilkaZdravstvenegaZavarovanja': '', 'telefonskaStevilka': '', 'ulica': '', 'datumRojstva': '', 'kontakt': this.kontakts, 'posta': this.posta, 'sorodstvenoRazmerje': '', 'spol': this.spol, 'okolis': this.okolis, 'uporabnik': this.uporabnik });
        this.http.get(this.restUrl + "/pacient/uporabnikId/" + localStorage['iduporabnik'], { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (res) {
            _this.res = res;
            var vmesna = JSON.stringify(_this.res);
            var dobiUporabnika = JSON.parse(vmesna);
            console.log(dobiUporabnika);
            _this.model[0] = dobiUporabnika;
            _this.postSt = dobiUporabnika.posta.idposta.toString() + " " + dobiUporabnika.posta.opis.toString();
            _this.izbrOkolis = dobiUporabnika.okolis;
            _this.devided = dobiUporabnika.posta.idposta;
            console.log(dobiUporabnika.idpacient);
            _this.glavni = dobiUporabnika.idpacient;
            _this.uporabnikService.getRazmerje().subscribe(function (data) {
                _this.razmerjas = data;
                var i = 0;
                for (var _i = 0, _a = _this.razmerjas; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    _this.krazmerja[i] = entry;
                    i = i + 1;
                }
            }, function (err) { console.log(err); });
            _this.uporabnikService.getPoste().subscribe(function (data) {
                _this.poste = data;
                var i = 0;
                var j = 0;
                for (var _i = 0, _a = _this.poste; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    _this.postneStevilke[i] = (entry[0].toString() + " " + entry[1].toString());
                    _this.kpostneStevilke[j] = (entry[0].toString() + " " + entry[1].toString());
                    i = i + 1;
                    j = j + 1;
                }
            }, function (err) { console.log(err); });
            _this.uporabnikService.getSpol().subscribe(function (data) {
                _this.spoln = data;
                var i = 0;
                for (var _i = 0, _a = _this.spoln; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    _this.spoli[i] = ({ 'idspol': entry[0], 'opis': entry[1] });
                    console.log(_this.spoli[i]);
                    i = i + 1;
                }
            }, function (err) { console.log(err); });
            console.log(_this.devided);
            _this.uporabnikService.getOkolisByPosta(Number(_this.devided)).subscribe(function (data) {
                _this.okoliss = data;
                var i = 0;
                for (var _i = 0, _a = _this.okoliss; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    _this.okolisi[i] = entry;
                    i = i + 1;
                }
            });
            if (dobiUporabnika.kontakt != null) {
                _this.dodaj = true;
                _this.kontakt.kime = dobiUporabnika.kontakt.ime;
                _this.kontakt.kpriimek = dobiUporabnika.kontakt.priimek;
                _this.kontakt.ktel = dobiUporabnika.kontakt.telefonskaStevilka;
                _this.kontakt.khisnaStevilka = dobiUporabnika.kontakt.hisnaStevilka;
                _this.kontakt.kpostnaStevilka = dobiUporabnika.kontakt.posta.idposta + " " + dobiUporabnika.kontakt.posta.opis;
                _this.kontakt.kulica = dobiUporabnika.kontakt.ulica;
                console.log(dobiUporabnika.kontakt.sorodstvenoRazmerje.opis);
                _this.izbranoRazmerje = dobiUporabnika.kontakt.sorodstvenoRazmerje;
            }
            if (dobiUporabnika.pacients.length > 0) {
                var d = 0;
                console.log(dobiUporabnika.pacients);
                _this.vec = true;
                for (var _i = 0, _a = dobiUporabnika.pacients; _i < _a.length; _i++) {
                    var njegovi = _a[_i];
                    var nov = ({
                        idpacient: _this.glavni,
                    });
                    var tabela = [{ 'idokolis': 1, 'opis': '', 'idposta': 1000 }];
                    var novi = ({ 'idpacient': njegovi.idpacient, 'hisnaStevilka': njegovi.hisnaStevilka, 'ime': njegovi.ime, 'priimek': njegovi.priimek, 'stevilkaZdravstvenegaZavarovanja': njegovi.stevilkaZdravstvenegaZavarovanja, 'telefonskaStevilka': njegovi.telefonskaStevilka, 'ulica': njegovi.ulica, 'datumRojstva': njegovi.datumRojstva, 'posta': njegovi.posta, 'sorodstvenoRazmerje': njegovi.sorodstvenoRazmerje, 'spol': njegovi.spol, 'okolis': njegovi.okolis, 'uporabnik': njegovi.uporabnik, 'pacient': nov, 'oko': tabela });
                    tabela = _this.najdiOkolise(njegovi.posta.idposta);
                    console.log(novi.okolis.opis);
                    novi.oko = tabela;
                    _this.model2[d] = novi;
                    d = d + 1;
                }
            }
        });
    };
    UporabniskiProfilComponent.prototype.najdiOkolise = function (postnaSt) {
        var _this = this;
        var tabela = [{ 'idokolis': 0, 'opis': 'iscem okolise', 'idposta': 1000 }];
        setTimeout(function () {
            _this.uporabnikService.getOkolisByPosta(postnaSt).subscribe(function (data) {
                _this.okoliss = data;
                var i = 0;
                for (var _i = 0, _a = _this.okoliss; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    tabela[i] = entry;
                    i = i + 1;
                }
            });
        }, 500);
        return tabela;
    };
    UporabniskiProfilComponent.prototype.onChangePostnaStevilkaB = function (sprememba, ime) {
        var devided = sprememba.split(' ');
        for (var _i = 0, _a = this.model2; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.ime == ime) {
                b.oko = this.najdiOkolise(Number(devided[0]));
                break;
            }
        }
    };
    UporabniskiProfilComponent.prototype.onChangePostnaStevilka = function (sprememba, ime) {
        var _this = this;
        console.log(ime);
        var devided = sprememba.split(' ');
        this.uporabnikService.getOkolisByPosta(Number(devided[0])).subscribe(function (data) {
            _this.okoliss = data;
            var i = 0;
            for (var _i = 0, _a = _this.okoliss; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.okolisi[i] = entry;
                i = i + 1;
            }
        });
    };
    UporabniskiProfilComponent.prototype.onChangePostnaStevilka2 = function (sprememba, ime) {
        var devided = sprememba.split(' ');
        for (var _i = 0, _a = this.model3; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.ime == ime) {
                b.oko = this.najdiOkolise(Number(devided[0]));
                break;
            }
        }
    };
    UporabniskiProfilComponent.prototype.dodajPacienta = function () {
        console.log(this.spoli[0].opis);
        var nov = ({
            idpacient: this.glavni,
        });
        var tabela = [{ 'idokolis': 0, 'opis': 'ni izbrana posta', 'idposta': 1000 }];
        this.model3[this.stevec] = ({ 'hisnaStevilka': '', 'ime': '', 'priimek': '', 'stevilkaZdravstvenegaZavarovanja': '', 'telefonskaStevilka': '', 'ulica': '', 'datumRojstva': '', 'posta': this.posta, 'spol': this.spol, 'okolis': this.okolis, 'uporabnik': null, 'sorodstvenoRazmerje': '', 'pacient': nov, 'oko': tabela });
        this.stevec = this.stevec + 1;
        this.dodajPac = true;
    };
    UporabniskiProfilComponent.prototype.odstraniPacienta = function () {
        this.stevec = this.stevec - 1;
        this.model3.splice(this.stevec, 1);
        if (this.stevec == 0) {
            this.dodajPac = false;
        }
        console.log(this.model3.length);
    };
    UporabniskiProfilComponent.prototype.onSubmit = function () {
        var length = 0;
        if (this.dodajPac == true) {
            length = this.model3.length;
            for (var _i = 0, _a = this.model3; _i < _a.length; _i++) {
                var nk = _a[_i];
                if (nk.ime == undefined || nk.okolis == undefined) {
                    this.subNiPravi = false;
                    break;
                }
            }
        }
        else {
            this.subNiPravi = true;
        }
        this.model[0].posta = this.postSt;
        this.model[0].okolis = this.izbrOkolis;
        this.model[0].pacients = [];
        if (this.model2[0].ime != "") {
            for (var _b = 0, _c = this.model2; _b < _c.length; _b++) {
                var n = _c[_b];
                delete n.oko;
                var posta = n.posta;
                if (typeof n.posta != 'object') {
                    var devided1 = n.posta.split(' ');
                    posta = ({
                        idposta: Number(devided1[0]),
                        opis: devided1[1],
                    });
                    n.posta = posta;
                }
                if (typeof n.okolis != 'object') {
                    var devided2 = n.okolis.split(' ');
                    var okolis = ({
                        idokolis: Number(devided2[1]),
                        opis: devided2[0].toString(),
                        posta: posta
                    });
                    n.okolis = okolis;
                }
                this.model[0].pacients.push(n);
            }
        }
        console.log(this.model3[0]);
        if (this.dodajPac == true) {
            for (var _d = 0, _e = this.model3; _d < _e.length; _d++) {
                var nk = _e[_d];
                delete nk.oko;
                var devided1 = nk.posta.split(' ');
                var posta = ({
                    idposta: Number(devided1[0]),
                    opis: devided1[1],
                });
                var sp = 1;
                if (nk.spol == 'Moški') {
                    sp = 1;
                }
                else {
                    sp = 2;
                }
                var spol = ({
                    idspol: sp,
                    opis: nk.spol,
                });
                console.log(nk.okolis.opis);
                /*var devided2= nk.okolis.split(' ');


                let okolis = <Okolis>({
                    idokolis: Number(devided2[1]),
                    opis: devided2[0].toString(),
                    posta: posta
                });*/
                nk.posta = posta;
                nk.spol = spol;
                //nk.okolis = okolis;
                for (var _f = 0, _g = this.krazmerja; _f < _g.length; _f++) {
                    var raz = _g[_f];
                    if (nk.sorodstvenoRazmerje == raz.opis) {
                        console.log("NAJDU");
                        var nov = ({
                            idsorodstvenoRazmerje: raz.idsorodstvenoRazmerje,
                        });
                        nk.sorodstvenoRazmerje = nov;
                        break;
                    }
                }
                this.model[0].pacients.push(nk);
            }
        }
        console.log(this.dodaj);
        console.log(this.kontakt);
        this.kontakt.krazmerje = this.izbranoRazmerje;
        console.log(this.model[0]);
        this.uporabnikService.update(this.model[0], this.dodaj, this.kontakt).subscribe(function (r) { console.log('success'); }, function (err) { console.log(err); });
    };
    return UporabniskiProfilComponent;
}());
UporabniskiProfilComponent = __decorate([
    core_1.Component({
        selector: 'uporabniskiProfil',
        templateUrl: './uporabniskiProfil.component.html',
        styleUrls: ['./uporabniskiProfil.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, uporabnik_service_1.UporabnikService])
], UporabniskiProfilComponent);
exports.UporabniskiProfilComponent = UporabniskiProfilComponent;
//# sourceMappingURL=uporabniskiProfil.component.js.map
