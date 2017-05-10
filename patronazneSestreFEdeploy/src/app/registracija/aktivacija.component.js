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
var uporabnik_service_1 = require("./uporabnik.service");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var AktivacijaComponent = (function () {
    function AktivacijaComponent(router, uporabnikService, route, location) {
        this.router = router;
        this.uporabnikService = uporabnikService;
        this.route = route;
        this.location = location;
        this.aliJeReg = false;
        this.aliNiReg = false;
    }
    AktivacijaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.uporabnikService.aktivirajRacun(Number(+params['id'])); }).subscribe(function (response) {
            _this.aliJeReg = true;
            setTimeout(function () {
                _this.router.navigate(['/prijava']);
            }, 2500);
        }, function (err) {
            _this.aliNiReg = true;
        });
    };
    return AktivacijaComponent;
}());
AktivacijaComponent = __decorate([
    core_1.Component({
        selector: 'aktivacija',
        templateUrl: './aktivacija.component.html',
        styleUrls: ['./registracija.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, uporabnik_service_1.UporabnikService, router_1.ActivatedRoute,
        common_1.Location])
], AktivacijaComponent);
exports.AktivacijaComponent = AktivacijaComponent;
//# sourceMappingURL=aktivacija.component.js.map