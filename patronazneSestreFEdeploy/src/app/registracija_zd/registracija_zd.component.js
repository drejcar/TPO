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
var Registracija_zdComponent = (function () {
    function Registracija_zdComponent(router) {
        this.router = router;
        this.ime = '';
        this.priimek = '';
        this.mail = '';
        this.pwd = '';
        this.sifraZd = '';
        this.tel = '';
        this.okolisi = ['Ljubljana', 'Maribor', 'Koper', 'Kranj', 'Novo Mesto'];
        //model2 = new UporabnikZd(this.mail,this.pwd,this.model3);
        //model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifraZd,this.tel);
        this.submitted = false;
    }
    Registracija_zdComponent.prototype.gotoRegistracija = function () {
        this.router.navigate(['/registracija_zd']);
    };
    Registracija_zdComponent.prototype.onSubmit = function (vlog, izvajalecZdravstvenihStoritev) {
    };
    return Registracija_zdComponent;
}());
Registracija_zdComponent = __decorate([
    core_1.Component({
        selector: 'registracija_zd',
        templateUrl: './registracija_zd.component.html',
        styleUrls: ['./registracija_zd.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Registracija_zdComponent);
exports.Registracija_zdComponent = Registracija_zdComponent;
//# sourceMappingURL=registracija_zd.component.js.map