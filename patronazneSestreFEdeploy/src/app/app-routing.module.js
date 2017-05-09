"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var prijava_component_1 = require("./prijava/prijava.component");
var registracija_component_1 = require("./registracija/registracija.component");
var delovniNalog_component_1 = require("./delovniNalog/delovniNalog.component");
var not_found_component_1 = require("./not-found.component");
var pacient_guard_1 = require("./_guard/pacient.guard");
var zdravnik_guard_1 = require("./_guard/zdravnik.guard");
var patronaznasluzba_guard_1 = require("./_guard/patronaznasluzba.guard");
var patronaznasestra_guard_1 = require("./_guard/patronaznasestra.guard");
var administrator_guard_1 = require("./_guard/administrator.guard");
var sodelavecizs_guard_1 = require("./_guard/sodelavecizs.guard");
var registracija_zd_component_1 = require("./registracija_zd/registracija_zd.component");
var spremembaGesla_component_1 = require("./spremembaGesla.component");
var admindash_component_1 = require("./loggedindash/admindash/admindash.component");
var pacientdash_component_1 = require("./loggedindash/pacientdash/pacientdash.component");
var patronaznasestradash_component_1 = require("./loggedindash/patronaznasestradash/patronaznasestradash.component");
var patronaznasluzbadash_component_1 = require("./loggedindash/patronaznasluzbadash/patronaznasluzbadash.component");
var sodelavecizsdash_component_1 = require("./loggedindash/sodelavecizsdash/sodelavecizsdash.component");
var zdravnikdash_component_1 = require("./loggedindash/zdravnikdash/zdravnikdash.component");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'prijava', component: prijava_component_1.PrijavaComponent },
    { path: 'registracija', component: registracija_component_1.RegistracijaFormComponent },
    { path: 'delovniNalog', component: delovniNalog_component_1.DelovniNalogComponent /**,canActivate:[ZdravnikGuard,PatronaznaSluzbaGuard]*/ },
    { path: 'registracijazd', component: registracija_zd_component_1.Registracija_zdComponent },
    { path: 'spremembaGesla', component: spremembaGesla_component_1.SpremembaGeslaComponent },
    { path: 'administrator', component: admindash_component_1.AdminDashComponent, canActivate: [administrator_guard_1.AdministratorGuard] },
    { path: 'pacient', component: pacientdash_component_1.PacientDashComponent, canActivate: [pacient_guard_1.PacientGuard] },
    { path: 'patronazna_sestra', component: patronaznasestradash_component_1.PatronaznaSestraDashComponent, canActivate: [patronaznasestra_guard_1.PatronaznaSestraGuard] },
    { path: 'patronazna_sluzba', component: patronaznasluzbadash_component_1.PatronaznaSluzbaDashComponent, canActivate: [patronaznasluzba_guard_1.PatronaznaSluzbaGuard] },
    { path: 'sodelavecizs', component: sodelavecizsdash_component_1.SodelavecIzsDashComponent, canActivate: [sodelavecizs_guard_1.SodelavecIZSGuard] },
    { path: 'zdravnik', component: zdravnikdash_component_1.ZdravnikDashComponent, canActivate: [zdravnik_guard_1.ZdravnikGuard] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map