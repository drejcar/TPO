"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var prijava_component_1 = require("./prijava/prijava.component");
var registracija_component_1 = require("./registracija/registracija.component");
var delovniNalog_component_1 = require("./delovniNalog/delovniNalog.component");
var not_found_component_1 = require("./not-found.component");
var podrobnostiDN_component_1 = require("./podrobnostiDN/podrobnostiDN.component");
var preusmeri_component_1 = require("./delovniNalog/preusmeri.component");
var seznamObiskov_component_1 = require("./seznamObiskov/seznamObiskov.component");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var equal_validator_directive_1 = require("./equal-validator.directive");
var izpisDN_service_1 = require("./izpisDelovnihNalogov/izpisDN.service");
var uporabnik_service_1 = require("./registracija/uporabnik.service");
var zdravstveniDelavec_service_1 = require("./registracija_zd/zdravstveniDelavec.service");
var user_service_1 = require("./prijava/user.service");
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
var guest_guard_1 = require("./_guard/guest.guard");
var delovniNalog_guard_1 = require("./_guard/delovniNalog.guard");
var odjava_component_1 = require("./odjava/odjava.component");
var izpisDelovnihNalogov_component_1 = require("./izpisDelovnihNalogov/izpisDelovnihNalogov.component");
var izpisDN_guard_1 = require("./_guard/izpisDN.guard");
var planiranjeObiskov_component_1 = require("./planiranjeObiskov/planiranjeObiskov.component");
var pozabljenoGeslo_component_1 = require("./PozabljenoGeslo/pozabljenoGeslo.component");
var uporabniskiProfil_component_1 = require("./UporabniskiProfil/uporabniskiProfil.component");
var seznamObiskovPacient_component_1 = require("./SeznamObiskovPacient/seznamObiskovPacient.component");
var pozabilGeslo_component_1 = require("./PozabljenoGeslo/pozabilGeslo.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, prijava_component_1.PrijavaComponent, registracija_component_1.RegistracijaFormComponent,
            delovniNalog_component_1.DelovniNalogComponent, equal_validator_directive_1.EqualValidator, not_found_component_1.PageNotFoundComponent, registracija_zd_component_1.Registracija_zdComponent,
            spremembaGesla_component_1.SpremembaGeslaComponent, admindash_component_1.AdminDashComponent, pacientdash_component_1.PacientDashComponent,
            patronaznasestradash_component_1.PatronaznaSestraDashComponent, patronaznasluzbadash_component_1.PatronaznaSluzbaDashComponent, sodelavecizsdash_component_1.SodelavecIzsDashComponent,
            zdravnikdash_component_1.ZdravnikDashComponent, aktivacija_component_1.AktivacijaComponent, odjava_component_1.OdjavaComponent, izpisDelovnihNalogov_component_1.izpisDelovnihNalogovComponent, podrobnostiDN_component_1.podrobnostiDNComponent,
            preusmeri_component_1.preusmeriComponent, seznamObiskov_component_1.seznamObiskovComponent, planiranjeObiskov_component_1.PlaniranjeObiskovComponent, seznamObiskovPacient_component_1.SeznamObiskovPacientComponent, pozabljenoGeslo_component_1.PozabljenoGesloComponent,
            uporabniskiProfil_component_1.UporabniskiProfilComponent, pozabilGeslo_component_1.pozabilGesloComponent,
        ],
        providers: [user_service_1.UserService, pacient_guard_1.PacientGuard, zdravnik_guard_1.ZdravnikGuard, patronaznasluzba_guard_1.PatronaznaSluzbaGuard, guest_guard_1.GuestGuard,
            patronaznasestra_guard_1.PatronaznaSestraGuard, administrator_guard_1.AdministratorGuard, sodelavecizs_guard_1.SodelavecIZSGuard, uporabnik_service_1.UporabnikService, zdravstveniDelavec_service_1.zdravstveniDelavecService,
            delovniNalog_guard_1.DelovniNalogGuard, izpisDN_guard_1.IzpisDNGuard, izpisDN_service_1.izpisDNService, common_1.DatePipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map