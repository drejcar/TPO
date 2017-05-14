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
var prijava_1 = require("./prijava");
var user_service_1 = require("./user.service");
var PrijavaComponent = (function () {
    function PrijavaComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.aliJeNapaka = false;
        this.aliSeLahkoLogina = true;
        this.textValue = "default";
        this.steviloMinut = 5;
        this.mail = '';
        this.pwd = '';
        this.model = new prijava_1.Prijava(this.mail, this.pwd);
    }
    PrijavaComponent.prototype.gotoPrijava = function () {
        this.router.navigate(['/prijava']);
    };
    PrijavaComponent.prototype.gotoRegistracija = function () {
        this.router.navigate(['/registracija']);
    };
    PrijavaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.aliJeNapaka = false;
        setTimeout(function () {
            _this.userService.login(_this.model).subscribe(function (data) {
                _this.person = data;
                localStorage.setItem('email', _this.person.email.toString());
                localStorage.setItem('password', _this.person.geslo.toString());
                localStorage.setItem('vloga', _this.person.vloga.opis.toString());
                localStorage.setItem('datumZadnjePrijave', _this.person.zadnjaPrijava.toString());
                localStorage.setItem('iduporabnik', _this.person.iduporabnik.toString());
                localStorage.setItem('idvloga', _this.person.vloga.idvloga.toString());
                _this.router.navigate(['/' + _this.person.vloga.opis]);
            }, function (err) {
                _this.aliJeNapaka = true;
                if (localStorage.getItem('attempts') === null) {
                    localStorage.setItem('attempts', '1');
                }
                else {
                    var trenutn = localStorage.getItem('attempts');
                    var stevilo = Number(trenutn) + 1;
                    localStorage.setItem('attempts', stevilo.toString());
                    if (stevilo >= 3) {
                        _this.aliSeLahkoLogina = false;
                        var d = new Date();
                        var hours = d.getHours();
                        var minutes = d.getMinutes();
                        if (Number(minutes) < 10) {
                            var noveminutes = '0' + minutes.toString();
                            minutes = Number(noveminutes);
                        }
                        var cajt = hours.toString() + minutes.toString();
                        localStorage.setItem('neSme', cajt.toString());
                        localStorage.removeItem('attempts');
                    }
                }
            });
        }, 500);
        /*localStorage.setItem('vloga',this.person.vloga.idvloga.toLocaleString());
        localStorage.setItem('username',this.person.email.toLocaleString());
        localStorage.setItem('password',this.person.geslo.toLocaleString());*/
    };
    //vse tukaj je za lockanje uporabnika
    PrijavaComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('neSme') != null) {
            var d = new Date();
            var hours = d.getHours();
            var minutes = d.getMinutes();
            var cas = localStorage.getItem('neSme');
            if (Number(minutes) < 10) {
                var noveminutes = '0' + minutes.toString();
                minutes = Number(noveminutes);
            }
            var trenutniCas = hours.toString() + minutes.toString();
            if (Number(trenutniCas) - Number(cas) >= 5) {
                localStorage.removeItem('neSme');
                this.aliSeLahkoLogina = true;
            }
            else {
                this.steviloMinut = 5 - (Number(trenutniCas) - Number(cas));
                this.aliSeLahkoLogina = false;
            }
        }
    };
    return PrijavaComponent;
}());
PrijavaComponent = __decorate([
    core_1.Component({
        selector: 'prijava',
        templateUrl: './prijava.component.html',
        styleUrls: ['./prijava.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], PrijavaComponent);
exports.PrijavaComponent = PrijavaComponent;
//# sourceMappingURL=prijava.component.js.map