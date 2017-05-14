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
var app_component_1 = require("../app.component");
var user_service_1 = require("../prijava/user.service");
var OdjavaComponent = (function () {
    function OdjavaComponent(userService, router, appcmp) {
        this.userService = userService;
        this.router = router;
        this.appcmp = appcmp;
    }
    OdjavaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.logout();
        this.appcmp.change();
        setTimeout(function () {
            _this.router.navigate(['']);
        }, 2500);
    };
    return OdjavaComponent;
}());
OdjavaComponent = __decorate([
    core_1.Component({
        selector: 'odjava',
        template: "<div class='container'><h3>Uspe\u0161no ste se odjavili, preusmerjamo nazaj na glavno stran</h3></div>"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, app_component_1.AppComponent])
], OdjavaComponent);
exports.OdjavaComponent = OdjavaComponent;
//# sourceMappingURL=odjava.component.js.map