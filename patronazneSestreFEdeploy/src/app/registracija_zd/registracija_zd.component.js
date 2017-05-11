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
var ZdravstveniDelavec_1 = require("../ZdravstveniDelavec");
var ZdravstveniDelavec_2 = require("../ZdravstveniDelavec");
var zdravstveniDelavec_service_1 = require("./zdravstveniDelavec.service");
var Registracija_zdComponent = (function () {
    function Registracija_zdComponent(router, zdravstveniDelavecService) {
        this.router = router;
        this.zdravstveniDelavecService = zdravstveniDelavecService;
        this.ifpatronaz = false;
        this.novBool = false;
        this.post = [{ idposta: 1, opis: '' }];
        this.ime = '';
        this.priimek = '';
        this.email = '';
        this.geslo = '';
        this.sifra = '';
        this.telefonskaStevilka = '';
        this.vloge = [{ idvloga: 1, opis: '' }];
        this.okolisi = [{ idokolis: 1, opis: '', posta: this.post[0] }];
        this.izvajaleciZdravstvenihStoritev = [{ idizvajalecZdravstvenihStoritev: 1, posta: this.post[0], ulica: '', hisnaStevilka: '', stevilkaIzvajalca: '', naziv: '' }];
        this.pwd2 = '';
        this.model3 = new Object(this.pwd2);
        this.model2 = new ZdravstveniDelavec_2.UporabnikZd(this.email, this.geslo, this.vloge[0]);
        this.model = new ZdravstveniDelavec_1.ZdravstveniDelavec(this.ime, this.priimek, this.sifra, this.telefonskaStevilka, this.model2, this.izvajaleciZdravstvenihStoritev[0], this.okolisi[0]);
        this.submitted = false;
    }
    Registracija_zdComponent.prototype.gotoRegistracija = function () {
        this.router.navigate(['/registracija_zd']);
    };
    Registracija_zdComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.novBool = false;
        var devided2 = form.value.vloga.split(' ');
        var vlog = ({
            idvloga: Number(devided2[1]),
        });
        var devided = form.value.izvajalecZdravstvenihStoritev.split(' ');
        var izvr = ({
            idizvajalecZdravstvenihStoritev: Number(devided[1]),
        });
        var okol = ({
            idokolis: Number(this.okolisi[0].idokolis),
        });
        this.model2.vloga = vlog;
        this.model.okolis = okol;
        this.model.izvajalecZdravstvenihStoritev = izvr;
        this.model.uporabnik = this.model2;
        this.zdravstveniDelavecService.save(this.model, this.ifpatronaz).subscribe(function (r) { console.log('success'); _this.submitted = true; }, function (err) { _this.novBool = true; });
    };
    Registracija_zdComponent.prototype.novZdravstveniDelavec = function () {
        this.model = new ZdravstveniDelavec_1.ZdravstveniDelavec(this.ime, this.priimek, this.sifra, this.telefonskaStevilka, this.model2, this.izvajaleciZdravstvenihStoritev[0], this.okolisi[0]);
    };
    Registracija_zdComponent.prototype.novUporabnikZd = function () {
        this.model2 = new ZdravstveniDelavec_2.UporabnikZd(this.email, this.geslo, this.vloge[0]);
    };
    Registracija_zdComponent.prototype.ngOnInit = function () {
        var _this = this;
        //za pridobit vloge
        this.zdravstveniDelavecService.getVloge().subscribe(function (data) {
            _this.vlogas = data;
            var i = 0;
            for (var _i = 0, _a = _this.vlogas; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (Number(entry.idvloga) == 3 || Number(entry.idvloga) == 4 || Number(entry.idvloga) == 5 || Number(entry.idvloga) == 6) {
                    _this.vloge[i] = entry;
                    i = i + 1;
                }
            }
        }, function (err) { console.log(err); });
        //za pridobit izvajalce
        this.zdravstveniDelavecService.getIzvajalecZdravstvenihStoritev().subscribe(function (data) {
            _this.izvajalci = data;
            var i = 0;
            for (var _i = 0, _a = _this.izvajalci; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.izvajaleciZdravstvenihStoritev[i] = entry;
                i = i + 1;
            }
        }, function (err) { console.log(err); });
    };
    Registracija_zdComponent.prototype.onChangeVloga = function (sprememba) {
        var devide = sprememba.split(' ');
        if (devide[0] == 'PatronaznaSestra') {
            this.ifpatronaz = true;
        }
        else {
            this.ifpatronaz = false;
        }
    };
    Registracija_zdComponent.prototype.onChangePostnaStevilka = function (sprememba) {
        var _this = this;
        var devided = sprememba.split(' ');
        this.zdravstveniDelavecService.getOkolisByPosta(Number(devided[0])).subscribe(function (data) {
            _this.okoliss = data;
            var i = 0;
            for (var _i = 0, _a = _this.okoliss; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.okolisi[i] = entry;
                i = i + 1;
            }
        });
    };
    return Registracija_zdComponent;
}());
Registracija_zdComponent = __decorate([
    core_1.Component({
        selector: 'registracija_zd',
        templateUrl: './registracija_zd.component.html',
        styleUrls: ['./registracija_zd.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, zdravstveniDelavec_service_1.zdravstveniDelavecService])
], Registracija_zdComponent);
exports.Registracija_zdComponent = Registracija_zdComponent;
//# sourceMappingURL=registracija_zd.component.js.map