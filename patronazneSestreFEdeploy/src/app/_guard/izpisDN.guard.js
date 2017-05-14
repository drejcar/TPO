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
var user_service_1 = require("../prijava/user.service");
var IzpisDNGuard = (function () {
    function IzpisDNGuard(router, user) {
        this.router = router;
        this.user = user;
    }
    IzpisDNGuard.prototype.canActivate = function () {
        if ((localStorage.getItem('vloga') == 'Zdravnik') || (localStorage.getItem('vloga') == 'PatronaznaSestra') || (localStorage.getItem('vloga') == 'PatronaznaSluzba')) {
            return true;
        }
        else {
            this.router.navigate(['**']);
            return false;
        }
    };
    return IzpisDNGuard;
}());
IzpisDNGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], IzpisDNGuard);
exports.IzpisDNGuard = IzpisDNGuard;
//# sourceMappingURL=izpisDN.guard.js.map