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
var uporabnik_service_1 = require("../RESTServices/uporabnik.service");
var RegistracijaFormComponent = (function () {
    function RegistracijaFormComponent(router, uporabnikService) {
        this.router = router;
        this.uporabnikService = uporabnikService;
        this.spoli = ['Moski', 'Zenski'];
        this.ime = '';
        this.priimek = '';
        this.mail = '';
        this.pwd = '';
        this.datumRojstva = '';
        this.stKartice = '';
        this.ulica = '';
        this.hisnaStevilka = '';
        this.postnaStevilka = '';
        this.test = '';
        this.tel = '';
        this.okolisi = ['Ljubljana', 'Maribor', 'Koper', 'Kranj', 'Novo Mesto'];
        this.model = new uporabnik_1.Uporabnik(this.ime, this.priimek, this.mail, this.pwd, this.stKartice, this.tel, this.ulica, this.hisnaStevilka, this.postnaStevilka, this.okolisi[0], this.datumRojstva, this.spoli[0], this.test);
        this.submitted = false;
    }
    RegistracijaFormComponent.prototype.gotoRegistracija = function () {
        this.router.navigate(['/registracija']);
    };
    RegistracijaFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.uporabnikService.save(this.model).subscribe(function (r) { console.log('success'); });
    };
    RegistracijaFormComponent.prototype.novUporabnik = function () {
        this.model = new uporabnik_1.Uporabnik(this.ime, this.priimek, this.mail, this.pwd, this.stKartice, this.tel, this.ulica, this.hisnaStevilka, this.postnaStevilka, this.okolisi[0], this.datumRojstva, this.spoli[0], this.test);
    };
    Object.defineProperty(RegistracijaFormComponent.prototype, "diagnostic", {
        //ne potrebujes
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
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