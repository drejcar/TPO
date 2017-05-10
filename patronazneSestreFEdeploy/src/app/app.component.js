"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n\t  <header>\n\t\t<nav>\n\t\t\t<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Domov</a>\n\t\t\t<a routerLink=\"/registracijazd\" routerLinkActive=\"active\">regZd</a>\t\n\t\t\t<a routerLink=\"/spremembaGesla\" routerLinkActive=\"active\">sprGesla</a>\t\n\t\t</nav>\n\t\t\t\t\t\t\n\t\t<div id=\"navRight\">\n\t\t\t<a routerLink=\"/prijava\" routerLinkActive=\"active\">Prijava</a>\n\t\t\t/\n\t\t\t<a routerLink=\"/registracija\" routerLinkActive=\"active\">Registracija</a>\n\t\t\t/\n\t\t\t<a routerLink=\"/delovniNalog\" routerLinkActive=\"active\">DelovniNalog</a>\n\n\t\t</div>\n\t  </header>\n\t  \n\t  <router-outlet></router-outlet>\n\t  \n\t  <footer>@ 2017</footer>\n\n  ",
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map