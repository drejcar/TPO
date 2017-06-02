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
var odjava_component_1 = require("./odjava/odjava.component");
var izpisDelovnihNalogov_component_1 = require("./izpisDelovnihNalogov/izpisDelovnihNalogov.component");
var podrobnostiDN_component_1 = require("./podrobnostiDN/podrobnostiDN.component");
var seznamObiskov_component_1 = require("./seznamObiskov/seznamObiskov.component");
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
var aktivacija_component_1 = require("./registracija/aktivacija.component");
var delovniNalog_guard_1 = require("./_guard/delovniNalog.guard");
var izpisDN_guard_1 = require("./_guard/izpisDN.guard");
var preusmeri_component_1 = require("./delovniNalog/preusmeri.component");
var planiranjeObiskov_component_1 = require("./planiranjeObiskov/planiranjeObiskov.component");
var seznamObiskovPacient_component_1 = require("./SeznamObiskovPacient/seznamObiskovPacient.component");
var uporabniskiProfil_component_1 = require("./UporabniskiProfil/uporabniskiProfil.component");
var pozabljenoGeslo_component_1 = require("./PozabljenoGeslo/pozabljenoGeslo.component");
var pozabilGeslo_component_1 = require("./PozabljenoGeslo/pozabilGeslo.component");
var nadomescanje_component_1 = require("./nadomescanje/nadomescanje.component");
var routes = [
    { path: 'dashboard', /* redirectTo:'/'+localStorage.getItem('vloga'),pathMatch:'full',*/ component: dashboard_component_1.DashboardComponent },
    { path: 'prijava', component: prijava_component_1.PrijavaComponent /*, canActivate: [GuestGuard] */ },
    { path: 'odjava', component: odjava_component_1.OdjavaComponent },
    { path: 'registracija', component: registracija_component_1.RegistracijaFormComponent /*, canActivate: [GuestGuard] */ },
    { path: 'delovniNalog', component: delovniNalog_component_1.DelovniNalogComponent, canActivate: [delovniNalog_guard_1.DelovniNalogGuard] },
    { path: 'registracijazd', component: registracija_zd_component_1.Registracija_zdComponent, canActivate: [administrator_guard_1.AdministratorGuard] },
    { path: 'spremembaGesla', component: spremembaGesla_component_1.SpremembaGeslaComponent,
    },
    { path: 'Administrator', component: admindash_component_1.AdminDashComponent, canActivate: [administrator_guard_1.AdministratorGuard] },
    { path: 'Pacient', component: pacientdash_component_1.PacientDashComponent, canActivate: [pacient_guard_1.PacientGuard] },
    { path: 'PatronaznaSestra', component: patronaznasestradash_component_1.PatronaznaSestraDashComponent, canActivate: [patronaznasestra_guard_1.PatronaznaSestraGuard] },
    { path: 'PatronaznaSluzba', component: patronaznasluzbadash_component_1.PatronaznaSluzbaDashComponent, canActivate: [patronaznasluzba_guard_1.PatronaznaSluzbaGuard] },
    { path: 'SodelavecIZS', component: sodelavecizsdash_component_1.SodelavecIzsDashComponent, canActivate: [sodelavecizs_guard_1.SodelavecIZSGuard] },
    { path: 'Zdravnik', component: zdravnikdash_component_1.ZdravnikDashComponent, canActivate: [zdravnik_guard_1.ZdravnikGuard] },
    { path: 'aktivacija/:id', component: aktivacija_component_1.AktivacijaComponent },
    { path: 'delovniNalogi', component: izpisDelovnihNalogov_component_1.izpisDelovnihNalogovComponent, canActivate: [izpisDN_guard_1.IzpisDNGuard] },
    { path: 'podrobnosti/:id', component: podrobnostiDN_component_1.podrobnostiDNComponent /*, canActivate: [IzpisDNGuard]*/ },
    { path: 'uspeh', component: preusmeri_component_1.preusmeriComponent, canActivate: [delovniNalog_guard_1.DelovniNalogGuard] },
    { path: 'seznamObiskov', component: seznamObiskov_component_1.seznamObiskovComponent, canActivate: [izpisDN_guard_1.IzpisDNGuard] },
    { path: 'planiranjeObiskov', component: planiranjeObiskov_component_1.PlaniranjeObiskovComponent, canActivate: [patronaznasestra_guard_1.PatronaznaSestraGuard] },
    { path: 'seznamObiskovPacient', component: seznamObiskovPacient_component_1.SeznamObiskovPacientComponent, canActivate: [pacient_guard_1.PacientGuard] },
    { path: 'uporabniskiProfil', component: uporabniskiProfil_component_1.UporabniskiProfilComponent, canActivate: [pacient_guard_1.PacientGuard] },
    { path: 'PozabljenoGeslo', component: pozabljenoGeslo_component_1.PozabljenoGesloComponent },
    { path: 'pozabilGeslo/:id', component: pozabilGeslo_component_1.pozabilGesloComponent },
    { path: 'nadomescanje', component: nadomescanje_component_1.NadomescanjeComponent, canActivate: [patronaznasluzba_guard_1.PatronaznaSluzbaGuard] },
    //{ path: '', redirectTo: '/prijava', pathMatch: 'full' },
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