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
var podrobnostiDNComponent = (function () {
    function podrobnostiDNComponent(router, http, DNService, route, location) {
        this.router = router;
        this.http = http;
        this.DNService = DNService;
        this.route = route;
        this.location = location;
        this.idDelovnegaNaloga = 0;
        this.izvNaziv = '';
        this.aliJePraviObisk = false;
        this.aliJeOdvzemKrvi = false;
        this.aliJeInjekcija = false;
        this.izvSifra = '';
        this.izvNaslov = '';
        this.izdSifra = '';
        this.izdIme = '';
        this.izdPriimek = '';
        this.sestraSifra = '';
        this.sestraOkolis = '';
        this.sestraIme = '';
        this.sestraPriimek = '';
        this.pacIme = '';
        this.pacPriimek = '';
        this.pacSZZ = '';
        this.pacNaslov = '';
        this.pacDatumRojstva = '';
        this.pacTelefon = '';
        this.pacPosta = '';
        this.pacIme2 = '';
        this.pacPriimek2 = '';
        this.pacSZZ2 = '';
        this.pacNaslov2 = '';
        this.pacDatumRojstva2 = '';
        this.pacTelefon2 = '';
        this.pacPosta2 = '';
        this.obiskiDatumi = [{ 'datumObiska': '', 'fiksniDatum': '', 'opravljen': '', 'dejanskiDatum': '' }];
        this.obiskVrstaStoritve = '';
        this.obiskBolezen = '';
        this.zdravila = [{ 'idZdravila': 0, 'tipZdravila': '' }];
        this.material = [{ 'tipMateriala': '', 'kolicina': 0 }];
    }
    podrobnostiDNComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.DNService.getDelovniNalog(Number(+params['id'])); }).subscribe(function (response) {
            _this.delovniNalog = response;
            _this.idDelovnegaNaloga = _this.delovniNalog.iddelovniNalog;
            //izvajalec zdravstvenih storitev
            _this.izvNaziv = _this.delovniNalog.izvajalecZdravstvenihStoritev.naziv;
            _this.izvSifra = _this.delovniNalog.izvajalecZdravstvenihStoritev.stevilkaIzvajalca;
            _this.izvNaslov = _this.delovniNalog.izvajalecZdravstvenihStoritev.ulica + " " + _this.delovniNalog.izvajalecZdravstvenihStoritev.hisnaStevilka;
            //izdajatelj
            for (var _i = 0, _a = _this.delovniNalog.zdravstveniDelavecs; _i < _a.length; _i++) {
                var i_1 = _a[_i];
                if (i_1.okolis == null) {
                    _this.izdSifra = i_1.sifra;
                    _this.izdIme = i_1.ime;
                    _this.izdPriimek = i_1.priimek;
                }
                else if (i_1.okolis != null) {
                    _this.sestraSifra = i_1.sifra;
                    _this.sestraOkolis = i_1.okolis.opis;
                    _this.sestraIme = i_1.ime;
                    _this.sestraPriimek = i_1.priimek;
                }
            }
            //pacient
            if (_this.delovniNalog.vrstaObiska.idvrstaObiska == 20 || _this.delovniNalog.vrstaObiska.idvrstaObiska == 30) {
                _this.aliJePraviObisk = true;
                //prvi pacient
                _this.pacIme = _this.delovniNalog.pacients[0].ime;
                _this.pacPriimek = _this.delovniNalog.pacients[0].priimek;
                _this.pacSZZ = _this.delovniNalog.pacients[0].stevilkaZdravstvenegaZavarovanja;
                _this.pacNaslov = _this.delovniNalog.pacients[0].ulica + " " + _this.delovniNalog.pacients[0].hisnaStevilka;
                _this.pacDatumRojstva = _this.delovniNalog.pacients[0].datumRojstva;
                _this.pacTelefon = _this.delovniNalog.pacients[0].telefonskaStevilka;
                _this.pacPosta = _this.delovniNalog.pacients[0].uporabnik.email;
                //drugi pacient
                _this.pacIme2 = _this.delovniNalog.pacients[1].ime;
                _this.pacPriimek2 = _this.delovniNalog.pacients[1].priimek;
                _this.pacSZZ2 = _this.delovniNalog.pacients[1].stevilkaZdravstvenegaZavarovanja;
                _this.pacDatumRojstva2 = _this.delovniNalog.pacients[1].datumRojstva;
                _this.pacTelefon2 = _this.delovniNalog.pacients[1].telefonskaStevilka;
                _this.pacNaslov2 = _this.delovniNalog.pacients[1].posta.idposta + " " + _this.delovniNalog.pacients[1].posta.opis;
                _this.pacPosta2 = _this.delovniNalog.pacients[1].uporabnik.email;
            }
            else {
                _this.aliJePraviObisk = false;
                _this.pacIme = _this.delovniNalog.pacients[0].ime;
                _this.pacPriimek = _this.delovniNalog.pacients[0].priimek;
                _this.pacSZZ = _this.delovniNalog.pacients[0].stevilkaZdravstvenegaZavarovanja;
                _this.pacNaslov = _this.delovniNalog.pacients[0].ulica + " " + _this.delovniNalog.pacients[0].hisnaStevilka;
                _this.pacDatumRojstva = _this.delovniNalog.pacients[0].datumRojstva;
                _this.pacTelefon = _this.delovniNalog.pacients[0].telefonskaStevilka;
                _this.pacPosta = _this.delovniNalog.pacients[0].uporabnik.email;
            }
            //obiski
            var j = 0;
            for (var _b = 0, _c = _this.delovniNalog.obisks; _b < _c.length; _b++) {
                var i_2 = _c[_b];
                var novObisk = ({ 'datumObiska': '', 'fiksniDatum': '', 'opravljen': '', 'dejanskiDatum': '' });
                novObisk.datumObiska = i_2.datumObiska;
                novObisk.dejanskiDatum = i_2.dejanskiDatumObiska;
                if (i_2.opravljen == 0) {
                    novObisk.opravljen = 'Neopravljen';
                }
                else {
                    novObisk.opravljen = 'Opravljen';
                }
                if (i_2.fixenDatum == 1) {
                    novObisk.fiksniDatum = 'Ne';
                }
                else {
                    novObisk.fiksniDatum = 'Da';
                }
                _this.obiskiDatumi[j] = novObisk;
                j = j + 1;
            }
            //bubble sort za sortiranje datume obiskov
            for (var i = 0; i < _this.obiskiDatumi.length - 1; i++) {
                for (var x = 0; x < _this.obiskiDatumi.length - 1; x++) {
                    var parts = _this.obiskiDatumi[x].datumObiska.split('-');
                    var prvi = parts[0] + parts[1] + parts[2];
                    parts = _this.obiskiDatumi[x + 1].datumObiska.split('-');
                    var drugi = parts[0] + parts[1] + parts[2];
                    if (Number(prvi) > Number(drugi)) {
                        var theGreater = _this.obiskiDatumi[x];
                        _this.obiskiDatumi[x] = _this.obiskiDatumi[x + 1];
                        _this.obiskiDatumi[x + 1] = theGreater;
                    }
                }
            }
            _this.obiskVrstaStoritve = _this.delovniNalog.vrstaObiska.opis;
            //material če je prava vrsta obiska
            if (_this.delovniNalog.vrstaObiska.idvrstaObiska == 60) {
                j = 0;
                _this.aliJeOdvzemKrvi = true;
                for (var _d = 0, _e = _this.delovniNalog.materials; _d < _e.length; _d++) {
                    var i_3 = _e[_d];
                    var novMaterial = ({ 'tipMateriala': '', 'kolicina': 0 });
                    novMaterial.tipMateriala = i_3.opis;
                    novMaterial.kolicina = _this.delovniNalog.steviloEpruvet;
                    _this.material[j] = novMaterial;
                    j = j + 1;
                }
            }
            else if (_this.delovniNalog.vrstaObiska.idvrstaObiska == 50) {
                j = 0;
                _this.aliJeInjekcija = true;
                _this.obiskBolezen = _this.delovniNalog.bolezen.opis;
                for (var _f = 0, _g = _this.delovniNalog.zdravilos; _f < _g.length; _f++) {
                    var i_4 = _g[_f];
                    var novZdravilo = ({ 'idZdravila': 0, 'tipZdravila': '' });
                    novZdravilo.idZdravila = i_4.idzdravilo;
                    novZdravilo.tipZdravila = i_4.opis;
                    _this.zdravila[j] = novZdravilo;
                    j = j + 1;
                }
            }
        }, function (err) { console.log(err); });
    };
    return podrobnostiDNComponent;
}());
podrobnostiDNComponent = __decorate([
    core_1.Component({
        selector: 'podrobnosti',
        templateUrl: './podrobnostiDN.component.html',
        styleUrls: ['./podrobnostiDN.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, izpisDN_service_1.izpisDNService, router_1.ActivatedRoute, common_1.Location])
], podrobnostiDNComponent);
exports.podrobnostiDNComponent = podrobnostiDNComponent;
//# sourceMappingURL=podrobnostiDN.component.js.map