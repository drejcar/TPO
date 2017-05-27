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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var delovniNalog = (function () {
    function delovniNalog() {
    }
    return delovniNalog;
}());
var IzvajalecZdravstvenihStoritev = (function () {
    function IzvajalecZdravstvenihStoritev() {
    }
    return IzvajalecZdravstvenihStoritev;
}());
var ZdravstveniDelavec = (function () {
    function ZdravstveniDelavec() {
    }
    return ZdravstveniDelavec;
}());
var Pacient = (function () {
    function Pacient() {
    }
    return Pacient;
}());
var Material = (function () {
    function Material() {
    }
    return Material;
}());
var Zdravilo = (function () {
    function Zdravilo() {
    }
    return Zdravilo;
}());
var Bolezen = (function () {
    function Bolezen() {
    }
    return Bolezen;
}());
var Storitev = (function () {
    function Storitev() {
    }
    return Storitev;
}());
var DelovniNalogComponent = (function () {
    function DelovniNalogComponent(http, router) {
        this.http = http;
        this.router = router;
        this.post = "";
        this.post1 = "";
        this.pokaziBolezen = false;
        this.napaka = false;
        this.materiali = [];
        this.bolezni = [];
        this.sestre = [];
        this.zdravila = [];
        this.storitve = [{ 'name': 'Obisk nosečnice', 'id': 10 }, { 'name': 'Obisk otročnice', 'id': 20 }, { 'name': 'Obisk novorojenčka', 'id': 30 }, { 'name': 'Preventiva starostnika', 'id': 40 },
            { 'name': 'Aplikacija injekcije', 'id': 50 }, { 'name': 'Odvzem krvi', 'id': 60 }, { 'name': 'Kontrola zdravstvenega stanja', 'id': 70 }];
        this.izbranaStoritev = this.storitve[0];
        this.veljavnostNalogaOd = "";
        this.veljavnostNalogaDo = "";
        this.veljavnostNalogaVrsta = -1;
        this.veljavnostNalogaFiksniDatum = false;
        this.veljavnostNalogaInterval = 0;
        this.veljavnostNalogaSteviloObiskov = 1;
        this.stObiskov = 0;
        this.sifraUporabnika = "";
        this.urlParametri = "";
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.stevilkaIzvajalca = "rest ocitno ni uspel";
        this.nazivIzvajalca = "naziv izvajalca";
        this.stevilkaZdravstvenegaDelavca = "rest ocitno ni uspel";
        this.idIzvajalca = -1;
        this.idZdravnika = -1;
        this.idSestre = -1;
        this.stevilkaZdravstvenegaZavarovanja = "";
        this.priimek = "";
        this.ime = "";
        this.ulica = "";
        this.hisnaStevilka = "";
        this.postnaStevilka = "";
        this.kraj = "";
        this.telefonskaStevilka = "";
        this.email = "";
        this.idPacient = -1;
        this.idOkolisa = -1;
        this.stevilkaZdravstvenegaZavarovanja1 = "";
        this.priimek1 = "";
        this.ime1 = "";
        this.ulica1 = "";
        this.hisnaStevilka1 = "";
        this.postnaStevilka1 = "";
        this.kraj1 = "";
        this.telefonskaStevilka1 = "";
        this.email1 = "";
        this.idPacient1 = -1;
        this.zdravilos = [];
        this.materials = [];
        this.stEpruvet = 0;
        this.dateIsValid = 0;
    }
    DelovniNalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ce ni zdravnik lahko opravlja samo preventivne obiske
        if (localStorage['vloga'] != "Zdravnik") {
            this.storitve = [{ 'name': 'Obisk nosečnice', 'id': 10 }, { 'name': 'Obisk otročnice', 'id': 20 }, { 'name': 'Obisk novorojenčka', 'id': 30 }, { 'name': 'Preventiva starostnika', 'id': 40 }];
            this.izbranaStoritev = this.storitve[0];
        }
        var headers3 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:admin') });
        this.http.get(this.restUrl + "/zdravstveniDelavec/" + localStorage['iduporabnik'], { headers: headers3 }).subscribe(function (data1) {
            _this.data1 = data1.json();
            var drek1 = JSON.stringify(_this.data1);
            var test1 = JSON.parse(drek1);
            var lalala = test1.ime;
            _this.stevilkaZdravstvenegaDelavca = test1.sifra;
            _this.stevilkaIzvajalca = test1.izvajalecZdravstvenihStoritev.stevilkaIzvajalca;
            _this.nazivIzvajalca = test1.izvajalecZdravstvenihStoritev.naziv;
            _this.idIzvajalca = test1.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev;
            _this.idZdravnika = test1.idzdravstveniDelavec;
        });
        this.http.get(this.restUrl + "/sifranti/material", { headers: headers3 }).subscribe(function (data1) {
            _this.data1 = data1.json();
            var drek1 = JSON.stringify(_this.data1);
            var test1 = JSON.parse(drek1);
            _this.materiali = test1;
            _this.izbraniMaterial = _this.materiali[0];
        });
        this.http.get(this.restUrl + "/sifranti/bolezen", { headers: headers3 }).subscribe(function (data1) {
            _this.data1 = data1.json();
            var drek1 = JSON.stringify(_this.data1);
            var test1 = JSON.parse(drek1);
            _this.bolezni = test1;
            _this.izbranaBolezen = _this.bolezni[0];
        });
        this.http.get(this.restUrl + "/sifranti/zdravilo", { headers: headers3 }).subscribe(function (data1) {
            _this.data1 = data1.json();
            var drek1 = JSON.stringify(_this.data1);
            var test1 = JSON.parse(drek1);
            _this.zdravila = test1;
            _this.izbranoZdravilo = _this.zdravila[0];
        });
    };
    DelovniNalogComponent.prototype.pridobiSestre = function (okolisPacienta) {
        var _this = this;
        console.log("izbrano zdravilo: " + this.izbranoZdravilo.opis);
        console.log("Pridobivam sestro za okolis: " + okolisPacienta);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:admin') });
        this.http.get(this.restUrl + "/zdravstveniDelavec/byOkolis/" + okolisPacienta, { headers: headers }).subscribe(function (data3) {
            _this.data3 = data3.json();
            var drek = JSON.stringify(_this.data3);
            var test = JSON.parse(drek);
            _this.sestre = test;
            _this.izbranaSestra = _this.sestre[0];
            _this.idSestre = _this.izbranaSestra.idzdravstveniDelavec;
            console.log("sestra " + _this.izbranaSestra.ime + ", njen id:  " + _this.idSestre);
        }, function (err) { console.log(err); });
    };
    DelovniNalogComponent.prototype.pridobiPodatkePacienta = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:admin') });
        this.http.get(this.restUrl + "/pacient/zz/" + this.post, { headers: headers }).subscribe(function (data) {
            _this.data = data.json();
            var drek = JSON.stringify(_this.data);
            var test = JSON.parse(drek);
            _this.priimek = test.priimek;
            _this.ime = test.ime;
            _this.ulica = test.ulica;
            _this.hisnaStevilka = test.hisnaStevilka;
            _this.postnaStevilka = test.posta.idposta.toString();
            _this.kraj = test.posta.opis;
            _this.telefonskaStevilka = test.telefonskaStevilka;
            _this.email = test.uporabnik.email;
            _this.idPacient = test.idpacient;
            _this.idOkolisa = test.okolis.idokolis;
            _this.pridobiSestre(_this.idOkolisa);
            console.log("id okolisa: " + _this.idOkolisa);
        }, function (err) { console.log(err); });
    };
    DelovniNalogComponent.prototype.pridobiPodatkePacienta1 = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:admin') });
        this.http.get(this.restUrl + "/pacient/zz/" + this.post1, { headers: headers }).subscribe(function (data2) {
            _this.data2 = data2.json();
            var drek1 = JSON.stringify(_this.data2);
            var test1 = JSON.parse(drek1);
            _this.priimek1 = test1.priimek;
            _this.ime1 = test1.ime;
            _this.ulica1 = test1.ulica;
            _this.hisnaStevilka1 = test1.hisnaStevilka;
            _this.postnaStevilka1 = test1.posta.idposta.toString();
            _this.kraj1 = test1.posta.opis;
            _this.telefonskaStevilka1 = test1.telefonskaStevilka;
            _this.email1 = test1.uporabnik.email;
            _this.idPacient1 = test1.idpacient;
        }, function (err) { console.log(err); });
    };
    DelovniNalogComponent.prototype.dodajMaterial = function () {
        console.log("dodaj material");
        var material = new Material();
        material.idmaterial = this.izbraniMaterial.idmaterial;
        this.materials.push(material);
        console.log(this.materials);
        console.log("id ustvarjenega materiala: " + material.idmaterial);
    };
    DelovniNalogComponent.prototype.dodajZdravilo = function () {
        console.log("dodaj zdravilo");
        var zdravilo = new Zdravilo();
        console.log(this.izbranoZdravilo.idzdravilo);
        zdravilo.idzdravilo = this.izbranoZdravilo.idzdravilo;
        this.zdravilos.push(zdravilo);
        console.log(this.zdravilos);
    };
    DelovniNalogComponent.prototype.ponastaviDatum = function () {
        this.veljavnostNalogaOd = "";
        this.veljavnostNalogaDo = "";
        this.preveriDatum();
    };
    DelovniNalogComponent.prototype.preveriDatum = function () {
        console.log("preberi datum");
        var date = new Date();
        var mesec = (date.getMonth() + 1);
        var dan = date.getDate();
        var mesec1 = "";
        var dan1 = "";
        if (mesec < 10)
            mesec1 = '0' + mesec;
        if (dan < 10)
            dan1 = '0' + dan;
        var datum = date.getFullYear() + '-' + mesec1 + '-' + dan1;
        console.log("trenutni datum: " + datum);
        console.log("od datum: " + this.veljavnostNalogaOd);
        console.log("do datum: " + this.veljavnostNalogaDo);
        if (this.veljavnostNalogaOd < datum) {
            console.log("ne mors u preteklost bree");
            this.dateIsValid = 0;
        }
        else if (this.veljavnostNalogaVrsta == -1 || this.veljavnostNalogaOd == "") {
            this.dateIsValid = 0;
        }
        else if (this.veljavnostNalogaVrsta != 1) {
            this.dateIsValid = 1;
            if (this.veljavnostNalogaVrsta == 2 && this.veljavnostNalogaInterval < 1) {
                this.dateIsValid = 0;
            }
        }
        else {
            if (this.veljavnostNalogaOd < this.veljavnostNalogaDo)
                this.dateIsValid = 1;
            else
                this.dateIsValid = 0;
        }
        if (this.veljavnostNalogaSteviloObiskov < 1 || this.veljavnostNalogaSteviloObiskov > 10)
            this.dateIsValid = 0;
    };
    DelovniNalogComponent.prototype.posljiDelovniNalog = function () {
        var _this = this;
        var fiksniDatum = 1;
        console.log(this.veljavnostNalogaFiksniDatum);
        if (this.veljavnostNalogaFiksniDatum) {
            fiksniDatum = 0;
        }
        this.urlParametri = "?fixniDatum=" + fiksniDatum + "&stObiskov=" + this.veljavnostNalogaSteviloObiskov + "&obdobje=" + this.veljavnostNalogaVrsta + "&interval=" + this.veljavnostNalogaInterval + "&od=" + this.veljavnostNalogaOd + "&do=" + this.veljavnostNalogaDo;
        console.log(this.urlParametri);
        var headers1 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:admin') });
        var pacient = new Pacient();
        pacient.idpacient = this.idPacient;
        var pacient1 = new Pacient();
        pacient1.idpacient = this.idPacient1;
        var material = new Material();
        material.idmaterial = this.izbraniMaterial.idmaterial;
        var zdravilo = new Zdravilo();
        zdravilo.idzdravilo = this.izbranoZdravilo.id;
        var bolezen = new Bolezen();
        if (this.pokaziBolezen == true) {
            bolezen.idbolezen = this.izbranaBolezen.idbolezen;
        }
        else {
            bolezen = null;
        }
        var storitev = new Storitev();
        storitev.idvrstaObiska = this.izbranaStoritev.id;
        var izvajalecZdravstvenihStoritev = new IzvajalecZdravstvenihStoritev();
        izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev = this.idIzvajalca;
        var zdravstveniDelavec = new ZdravstveniDelavec();
        zdravstveniDelavec.idzdravstveniDelavec = this.idZdravnika;
        //fakin medicinska sestra fakin robi, popravljeno
        var sestra = new ZdravstveniDelavec();
        sestra.idzdravstveniDelavec = this.izbranaSestra.idzdravstveniDelavec;
        ;
        var dn = new delovniNalog();
        dn.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
        dn.zdravstveniDelavecs = [zdravstveniDelavec, sestra];
        //ne smeta biti 2 enaka objekta
        if (this.izbranaStoritev.id == 20 || this.izbranaStoritev.id == 30) {
            dn.pacients = [pacient, pacient1];
        }
        else {
            dn.pacients = [pacient];
        }
        console.log(this.zdravilos);
        dn.vrstaObiska = storitev;
        dn.bolezen = bolezen;
        dn.materials = this.materials;
        dn.steviloEpruvet = this.stEpruvet;
        dn.zdravilos = this.zdravilos;
        dn.obisks = [];
        var p4 = JSON.stringify(dn);
        console.log(p4);
        this.http.post(this.restUrl + "/delovniNalog" + this.urlParametri, JSON.stringify(dn), { headers: headers1 }).subscribe(function (res) {
            console.log(res);
            _this.napaka = false;
            _this.router.navigate(['/uspeh']);
        }, function (err) {
            console.log(err);
            _this.napaka = true;
        });
        this.preveriDatum();
        console.log("sestra " + this.izbranaSestra.ime + ", njen id:  " + this.idSestre);
    };
    DelovniNalogComponent.prototype.onChangeStoritev = function (storitev) {
        if (storitev.id == 50) {
            this.pokaziBolezen = true;
        }
        else {
            this.pokaziBolezen = false;
        }
    };
    return DelovniNalogComponent;
}());
DelovniNalogComponent = __decorate([
    core_1.Component({
        selector: 'delovniNalog',
        templateUrl: './delovniNalog.component.html',
        styleUrls: ['./delovniNalog.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], DelovniNalogComponent);
exports.DelovniNalogComponent = DelovniNalogComponent;
/*
            ******* URL PARAMETRI IZ BACKENDA *****
    @QueryParam("fixniDatum") int fixniDatum,	//0 - da | 1 - ne
                            @QueryParam("obdobje") int obdobje,			//0 - en obisk | 1 - vec obiskov
                            @QueryParam("od") Date od,					//prvi obisk
                            @QueryParam("do") Date doo,					//zakjucek obdobja obiskov
                            @QueryParam("interval") int interval,		//interval obiskov --> razmik med obiski
                            @QueryParam("stObiskov") int stObiskov)

*/
/*
            *****	HARDCODED STUFF BACKUP ******

    //zdravila = [{'name': 'injekcija', 'id': 1}, {'name': 'injekcija1', 'id': 2}];
    //materiali = [{'name': 'Epruveta rdeča', 'id': 1}, {'name': 'Epruveta modra', 'id': 2}, {'name': 'Epruveta rumena', 'id': 3}, {'name': 'Epruveta zelena', 'id': 4}];
    //bolezni = [{'name': 'Viroza', 'id': 1}, {'name': 'Angina', 'id': 2}, {'name': 'Pljučnica', 'id': 2}];

*/
//# sourceMappingURL=delovniNalog.component.js.map
