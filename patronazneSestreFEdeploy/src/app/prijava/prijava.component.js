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
var user_service_1 = require("../user.service");
var PrijavaComponent = (function () {
    function PrijavaComponent(userService, router) {
        this.userService = userService;
        this.router = router;
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
        this.userService.login(this.model).subscribe(function (result) { return _this.person = result; });
        console.log(this.person);
        /*localStorage.setItem('vloga',this.person.vloga.idvloga.toLocaleString());
        localStorage.setItem('username',this.person.email.toLocaleString());
        localStorage.setItem('password',this.person.geslo.toLocaleString());*/
        this.router.navigate(['/dashboard']);
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