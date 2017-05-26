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
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var izpisDN_service_1 = require("../izpisDelovnihNalogov/izpisDN.service");
var PozabljenoGesloComponent = (function () {
    function PozabljenoGesloComponent(router, http, DNService) {
        this.router = router;
        this.http = http;
        this.DNService = DNService;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.mail = '';
        this.mail2 = '';
        this.model = ({ 'mail': this.mail, 'mail2': this.mail2 });
        this.submitted = false;
    }
    PozabljenoGesloComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.http.post(this.restUrl + "/uporabnik/pozabuGeslo/" + this.model.mail, { headers: headers }).subscribe(function (res) {
            _this.submitted = true;
        });
    };
    return PozabljenoGesloComponent;
}());
PozabljenoGesloComponent = __decorate([
    core_1.Component({
        selector: 'pozabljenoGeslo',
        templateUrl: './pozabljenoGeslo.component.html',
        styleUrls: ['./pozabljenoGeslo.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, izpisDN_service_1.izpisDNService])
], PozabljenoGesloComponent);
exports.PozabljenoGesloComponent = PozabljenoGesloComponent;
//# sourceMappingURL=pozabljenoGeslo.component.js.map
