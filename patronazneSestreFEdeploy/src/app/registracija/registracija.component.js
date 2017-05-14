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
var uporabnik_1 = require("../uporabnik");
var router_1 = require("@angular/router");
var uporabnik_service_1 = require("./uporabnik.service");
var kontakt_1 = require("./kontakt");
var RegistracijaFormComponent = (function () {
    function RegistracijaFormComponent(router, uporabnikService) {
        this.router = router;
        this.uporabnikService = uporabnikService;
        this.isLoading = true;
        this.dodaj = false;
        this.spoli = [''];
        this.ime = '';
        this.priimek = '';
        this.mail = '';
        this.pwd = '';
        this.datumRojstva = '';
        this.stKartice = '';
        this.ulica = '';
        this.hisnaStevilka = '';
        this.postneStevilke = [''];
        this.test = '';
        this.tel = '';
        this.okolisi = [{ idokolis: 1, opis: '', idposta: 1000 }];
        this.kime = '';
        this.kpriimek = '';
        this.ktel = '';
        this.kulica = '';
        this.khisnaStevilka = '';
        this.kpostnestevilke = [''];
        this.krazmerja = [{ idsorodstvenoRazmerje: 1, opis: '' }];
        this.kontakt = new kontakt_1.Kontakt(this.kime, this.kpriimek, this.ktel, this.kulica, this.khisnaStevilka, this.kpostnestevilke[0], this.krazmerja[0]);
        this.model = new uporabnik_1.Uporabnik(this.ime, this.priimek, this.mail, this.pwd, this.stKartice, this.tel, this.ulica, this.hisnaStevilka, this.postneStevilke[0], this.okolisi[0], this.datumRojstva, this.spoli[0], this.test);
        this.submitted = false;
    }
    RegistracijaFormComponent.prototype.gotoRegistracija = function () {
        this.router.navigate(['/registracija']);
    };
    RegistracijaFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //kreiranje novega modela
        this.model.okolis = this.okolisi[0];
        this.kontakt.krazmerje = this.krazmerja[0];
        this.uporabnikService.save(this.model, this.dodaj, this.kontakt).subscribe(function (r) { console.log('success'); });
        //tukaj bo navigacija na page kjer bo povedal ali je registracija uspešna
    };
    RegistracijaFormComponent.prototype.novUporabnik = function () {
        this.model = new uporabnik_1.Uporabnik(this.ime, this.priimek, this.mail, this.pwd, this.stKartice, this.tel, this.ulica, this.hisnaStevilka, this.postneStevilke[0], this.okolisi[0], this.datumRojstva, this.spoli[0], this.test);
    };
    Object.defineProperty(RegistracijaFormComponent.prototype, "diagnostic", {
        //ne potrebujes
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    //funkcija ob initializaciji
    RegistracijaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        //rest klic za spole
        this.uporabnikService.getSpol().subscribe(function (data) {
            _this.spoln = data;
            var i = 0;
            for (var _i = 0, _a = _this.spoln; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.spoli[i] = entry[1];
                i = i + 1;
            }
        }, function (err) { console.log(err); });
        //rest klic za razmerja
        this.uporabnikService.getRazmerje().subscribe(function (data) {
            _this.razmerjas = data;
            var i = 0;
            for (var _i = 0, _a = _this.razmerjas; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.krazmerja[i] = entry;
                i = i + 1;
            }
        }, function (err) { console.log(err); });
        //rest klic za poste
        this.uporabnikService.getPoste().subscribe(function (data) {
            _this.poste = data;
            var i = 0;
            for (var _i = 0, _a = _this.poste; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.postneStevilke[i] = (entry[0].toString() + " " + entry[1].toString());
                _this.kpostnestevilke[i] = (entry[0].toString() + " " + entry[1].toString());
                i = i + 1;
            }
        }, function (err) { console.log(err); });
    };
    //funkcija ob spremembi poste poisce veljavne
    RegistracijaFormComponent.prototype.onChangePostnaStevilka = function (sprememba) {
        var _this = this;
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
    return RegistracijaFormComponent;
}());
RegistracijaFormComponent = __decorate([
    core_1.Component({
        selector: 'registracija',
        templateUrl: './registracija.component.html',
        styleUrls: ['./registracija.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, uporabnik_service_1.UporabnikService])
], RegistracijaFormComponent);
exports.RegistracijaFormComponent = RegistracijaFormComponent;
//# sourceMappingURL=registracija.component.js.map