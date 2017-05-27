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
var app_component_1 = require("../../app.component");
var PatronaznaSestraDashComponent = (function () {
    function PatronaznaSestraDashComponent(appcmp) {
        this.appcmp = appcmp;
        this.neki = localStorage.getItem['datumZadnjePrijave'];
    }
    PatronaznaSestraDashComponent.prototype.ngOnInit = function () {
        this.appcmp.change();
    };
    return PatronaznaSestraDashComponent;
}());
PatronaznaSestraDashComponent = __decorate([
    core_1.Component({
        selector: 'patronaznasestra-dash',
        template: "<p>Prijavljeni ste kot patrona\u017Ena sestra, datum zadnje prijave: {{neki}}</p>\n              "
    }),
    __metadata("design:paramtypes", [app_component_1.AppComponent])
], PatronaznaSestraDashComponent);
exports.PatronaznaSestraDashComponent = PatronaznaSestraDashComponent;
//# sourceMappingURL=patronaznasestradash.component.js.map