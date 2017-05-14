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
var seznamObiskovComponent = (function () {
    function seznamObiskovComponent(router, http, DNService) {
        this.router = router;
        this.http = http;
        this.DNService = DNService;
        this.restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
        this.aliObstaja = false;
        this.obiski = [{ 'name': '', 'id': 0 }];
        this.pacienti = [{ 'ime': '', 'priimek': '', 'id': 0 }];
        this.sestre = [{ 'sifra': '', 'id': 0 }];
        this.izdajatelji = [{ 'sifra': '', 'id': 0 }];
        this.opravljenost = [{ 'opravljenost': '' }, { 'opravljenost': 'Opravljen' }, { 'opravljenost': 'Neopravljen' }];
        this.izbraniPredvideniDatumOd = '';
        this.izbraniPredvideniDatumDo = '';
        this.izbraniDejanskiDatumOd = '';
        this.izbraniDejanskiDatumDo = '';
        this.sekundarnaTabelaObiskovDejanski = [{ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '' }];
        this.izbranaOpravljenost = this.opravljenost[0];
        this.izbraniIzdajatelj = this.izdajatelji[0];
        this.izbraniObisk = this.obiski[0];
        this.izbraniPacient = this.pacienti[0];
        this.izbranaSestra = this.sestre[0];
        this.tabelaDejanskiObiskov = [{ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '' }];
        this.izvajalecZdravstvenihStoritev = 0;
    }
    seznamObiskovComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers3 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password')) });
        this.http.get(this.restUrl + "/zdravstveniDelavec/" + localStorage['iduporabnik'], { headers: headers3 }).subscribe(function (res) {
            _this.res = res.json();
            var vmesna = JSON.stringify(_this.res);
            var dobiZd = JSON.parse(vmesna);
            localStorage.setItem('idZdravstvenegaDelavca', dobiZd.idzdravstveniDelavec.toString());
            localStorage.setItem('idIzv', dobiZd.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev);
            if (localStorage['vloga'] == 'Zdravnik' || localStorage['vloga'] == 'PatronaznaSluzba') {
                _this.izdajatelji[0].sifra = dobiZd.sifra;
                _this.izdajatelji[0].id = dobiZd.idzdravstveniDelavec;
            }
            else if (localStorage['vloga'] == 'PatronaznaSestra') {
                _this.sestre[0].sifra = dobiZd.sifra;
                _this.sestre[0].id = dobiZd.idzdravstveniDelavec;
            }
        });
        setTimeout(function () {
            /*if(localStorage['vloga'] == 'Zdravnik'){
                this.DNService.getDelovneNaloge(Number(localStorage.getItem('idZdravstvenegaDelavca'))).subscribe(res => {this.tabelaObiskovVsi = res;
                    let i = 0; //stevec za obiske
                    let d = 0; //stevec za paciente
                    let j = 0; //stevec za vrste obiskov
                    let m = 0; //stevec za zdravstvene delavce

                    for(let dn of this.tabelaObiskovVsi){
                        for(let ob of dn.obisks){
                            let obisk = <any> ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:''});
                            this.aliObstaja = false;
                            obisk.idObiska = ob.idobisk;
                            obisk.vrstaObiska = dn.vrstaObiska.opis;
                            obisk.pacienti = dn.pacients[0].ime+' '+dn.pacients[0].priimek;
                            if(ob.opravljen == 0){
                                obisk.opravljenost = 'Neopravljen';
                            }else{
                                obisk.opravljenost = 'Opravljen';
                            }
                            //setanje patronaznih sester

                            for(let zdr of dn.zdravstveniDelavecs){
                                this.aliObstaja = false;
                                if(zdr.okolis != null){
                                    obisk.patronaznaSestra = zdr.sifra+" "+obisk.patronaznaSestra;

                                    //pregled Sester
                                    for(let ses of this.sestre){
                                        if(ses.id == zdr.idzdravstveniDelavec){
                                            this.aliObstaja = true;
                                            break;
                                        }
                                    }
                                    if(this.aliObstaja == false){
                                        let novaS = <any> ({sifra:'',id:0})
                                        novaS.sifra = zdr.sifra;
                                        novaS.id = zdr.idzdravstveniDelavec;
                                        this.sestre[m] = novaS
                                        m = m+1;
                                    }
                                }else{
                                    obisk.izdajatelj = zdr.sifra;
                                }
                            }

                            //datumi
                            obisk.predvideniDatumObiska = ob.datumObiska;
                            obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
                            //zapisovanje objekta v dejanski
                            this.tabelaDejanskiObiskov[i] = obisk;
                            i = i+1;
                        }
                        //dodaj v subseznam obiskov
                        for(let vrsta of this.obiski){
                            if(vrsta.id == dn.vrstaObiska.idvrstaObiska){
                                this.aliObstaja = true;
                                break;
                            }
                        }
                        if(this.aliObstaja == false){
                            let obisk = <any> ({'name':'','id':0});
                            obisk.name = dn.vrstaObiska.opis;
                            obisk.id = dn.vrstaObiska.idvrstaObiska;
                            this.obiski[j] = obisk;
                            j = j+1;
                        }
                        //dodaj v subseznam pacientov
                        this.aliObstaja = false;
                        for(let pacient of this.pacienti){
                            if(pacient.id == dn.pacients[0].idpacient){
                                this.aliObstaja = true;
                                break;
                            }
                        }
                        if(this.aliObstaja == false){
                            let pacien = <any>({idpacient:0,ime:'',priimek:''});
                            pacien.id = dn.pacients[0].idpacient;
                            pacien.ime = dn.pacients[0].ime;
                            pacien.priimek = dn.pacients[0].priimek;
                            this.pacienti[d] = pacien;
                            d = d+1;
                        }


                    }
                    this.tabelaDejanskiObiskov = this.bubbleSort(this.tabelaDejanskiObiskov);
                    this.tabelaObiskovVsi = this.tabelaDejanskiObiskov;
                });*/
            if (localStorage['vloga'] == 'PatronaznaSestra') {
                _this.DNService.getDelovneNaloge(Number(localStorage.getItem('idZdravstvenegaDelavca')), 0).subscribe(function (res) {
                    _this.tabelaObiskovVsi = res;
                    var i = 0; //stevec za obiske
                    var d = 0; //stevec za paciente
                    var j = 0; //stevec za vrste obiskov
                    var m = 0; //stevec za zdravstvene delavce
                    for (var _i = 0, _a = _this.tabelaObiskovVsi; _i < _a.length; _i++) {
                        var dn = _a[_i];
                        for (var _b = 0, _c = dn.obisks; _b < _c.length; _b++) {
                            var ob = _c[_b];
                            var obisk = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '' });
                            _this.aliObstaja = false;
                            obisk.idObiska = ob.idobisk;
                            obisk.vrstaObiska = dn.vrstaObiska.opis;
                            obisk.pacienti = dn.pacients[0].ime + ' ' + dn.pacients[0].priimek;
                            if (ob.opravljen == 0) {
                                obisk.opravljenost = 'Neopravljen';
                            }
                            else {
                                obisk.opravljenost = 'Opravljen';
                            }
                            //setanje patronaznih sester
                            for (var _d = 0, _e = dn.zdravstveniDelavecs; _d < _e.length; _d++) {
                                var zdr = _e[_d];
                                _this.aliObstaja = false;
                                if (zdr.okolis != null) {
                                    obisk.patronaznaSestra = zdr.sifra + " " + obisk.patronaznaSestra;
                                }
                                else {
                                    for (var _f = 0, _g = _this.izdajatelji; _f < _g.length; _f++) {
                                        var zdravnik = _g[_f];
                                        if (zdravnik.id == zdr.idzdravstveniDelavec) {
                                            _this.aliObstaja = true;
                                            break;
                                        }
                                    }
                                    if (_this.aliObstaja == false) {
                                        var noviZdr = ({ sifra: '', id: 0 });
                                        noviZdr.sifra = zdr.sifra;
                                        noviZdr.id = zdr.idzdravstveniDelavec;
                                        _this.izdajatelji[m] = noviZdr;
                                        m = m + 1;
                                    }
                                    obisk.izdajatelj = zdr.sifra;
                                }
                            }
                            //datumi
                            obisk.predvideniDatumObiska = ob.datumObiska;
                            obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
                            //zapisovanje objekta v dejanski
                            _this.tabelaDejanskiObiskov[i] = obisk;
                            i = i + 1;
                        }
                        _this.aliObstaja = false;
                        //dodaj v subseznam obiskov
                        for (var _h = 0, _j = _this.obiski; _h < _j.length; _h++) {
                            var vrsta = _j[_h];
                            if (vrsta.id == dn.vrstaObiska.idvrstaObiska) {
                                _this.aliObstaja = true;
                                break;
                            }
                        }
                        if (_this.aliObstaja == false) {
                            var obisk = ({ 'name': '', 'id': 0 });
                            obisk.name = dn.vrstaObiska.opis;
                            obisk.id = dn.vrstaObiska.idvrstaObiska;
                            _this.obiski[j] = obisk;
                            j = j + 1;
                        }
                        //dodaj v subseznam pacientov
                        _this.aliObstaja = false;
                        for (var _k = 0, _l = _this.pacienti; _k < _l.length; _k++) {
                            var pacient = _l[_k];
                            if (pacient.id == dn.pacients[0].idpacient) {
                                _this.aliObstaja = true;
                                break;
                            }
                        }
                        if (_this.aliObstaja == false) {
                            var pacien = ({ idpacient: 0, ime: '', priimek: '' });
                            pacien.id = dn.pacients[0].idpacient;
                            pacien.ime = dn.pacients[0].ime;
                            pacien.priimek = dn.pacients[0].priimek;
                            _this.pacienti[d] = pacien;
                            d = d + 1;
                        }
                    }
                    _this.tabelaDejanskiObiskov = _this.bubbleSort(_this.tabelaDejanskiObiskov);
                    _this.tabelaObiskovVsi = _this.tabelaDejanskiObiskov;
                    _this.Onsubmit();
                });
            }
            else if (localStorage['vloga'] == 'PatronaznaSluzba' || localStorage['vloga'] == 'Zdravnik') {
                _this.DNService.getDelovneNalogePrekIzv2(Number(localStorage.getItem('idIzv')), 0).subscribe(function (res) {
                    _this.tabelaObiskovVsi = res;
                    var i = 0; //stevec za obiske
                    var d = 0; //stevec za paciente
                    var j = 0; //stevec za vrste obiskov
                    var m = 0; //stevec za zdravstvene delavce
                    var n = 1;
                    for (var _i = 0, _a = _this.tabelaObiskovVsi; _i < _a.length; _i++) {
                        var dn = _a[_i];
                        for (var _b = 0, _c = dn.obisks; _b < _c.length; _b++) {
                            var ob = _c[_b];
                            var obisk = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '' });
                            _this.aliObstaja = false;
                            obisk.idObiska = ob.idobisk;
                            obisk.vrstaObiska = dn.vrstaObiska.opis;
                            obisk.pacienti = dn.pacients[0].ime + ' ' + dn.pacients[0].priimek;
                            if (ob.opravljen == 0) {
                                obisk.opravljenost = 'Neopravljen';
                            }
                            else {
                                obisk.opravljenost = 'Opravljen';
                            }
                            //setanje patronaznih sester
                            for (var _d = 0, _e = dn.zdravstveniDelavecs; _d < _e.length; _d++) {
                                var zdr = _e[_d];
                                _this.aliObstaja = false;
                                if (zdr.okolis != null) {
                                    obisk.patronaznaSestra = zdr.sifra + " " + obisk.patronaznaSestra;
                                    //pregled Sester
                                    for (var _f = 0, _g = _this.sestre; _f < _g.length; _f++) {
                                        var ses = _g[_f];
                                        if (ses.id == zdr.idzdravstveniDelavec) {
                                            _this.aliObstaja = true;
                                            break;
                                        }
                                    }
                                    if (_this.aliObstaja == false) {
                                        var novaS = ({ sifra: '', id: 0 });
                                        novaS.sifra = zdr.sifra;
                                        novaS.id = zdr.idzdravstveniDelavec;
                                        _this.sestre[m] = novaS;
                                        m = m + 1;
                                    }
                                }
                                else {
                                    _this.aliObstaja = false;
                                    for (var _h = 0, _j = _this.izdajatelji; _h < _j.length; _h++) {
                                        var zdravnik = _j[_h];
                                        if (zdravnik.id == zdr.idzdravstveniDelavec) {
                                            _this.aliObstaja = true;
                                            break;
                                        }
                                    }
                                    if (_this.aliObstaja == false) {
                                        var noviZdr = ({ sifra: '', id: 0 });
                                        noviZdr.sifra = zdr.sifra;
                                        noviZdr.id = zdr.idzdravstveniDelavec;
                                        _this.izdajatelji[n] = noviZdr;
                                        n = n + 1;
                                    }
                                    obisk.izdajatelj = zdr.sifra;
                                }
                            }
                            //datumi
                            obisk.predvideniDatumObiska = ob.datumObiska;
                            obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
                            //zapisovanje objekta v dejanski
                            _this.tabelaDejanskiObiskov[i] = obisk;
                            i = i + 1;
                        }
                        //dodaj v subseznam obiskov
                        _this.aliObstaja = false;
                        for (var _k = 0, _l = _this.obiski; _k < _l.length; _k++) {
                            var vrsta = _l[_k];
                            if (vrsta.id == dn.vrstaObiska.idvrstaObiska) {
                                _this.aliObstaja = true;
                                break;
                            }
                        }
                        if (_this.aliObstaja == false) {
                            var obisk = ({ 'name': '', 'id': 0 });
                            obisk.name = dn.vrstaObiska.opis;
                            obisk.id = dn.vrstaObiska.idvrstaObiska;
                            _this.obiski[j] = obisk;
                            j = j + 1;
                        }
                        //dodaj v subseznam pacientov
                        _this.aliObstaja = false;
                        for (var _m = 0, _o = _this.pacienti; _m < _o.length; _m++) {
                            var pacient = _o[_m];
                            if (pacient.id == dn.pacients[0].idpacient) {
                                _this.aliObstaja = true;
                                break;
                            }
                        }
                        if (_this.aliObstaja == false) {
                            var pacien = ({ idpacient: 0, ime: '', priimek: '' });
                            pacien.id = dn.pacients[0].idpacient;
                            pacien.ime = dn.pacients[0].ime;
                            pacien.priimek = dn.pacients[0].priimek;
                            _this.pacienti[d] = pacien;
                            d = d + 1;
                        }
                    }
                    _this.tabelaDejanskiObiskov = _this.bubbleSort(_this.tabelaDejanskiObiskov);
                    _this.tabelaObiskovVsi = _this.tabelaDejanskiObiskov;
                    _this.Onsubmit();
                });
            }
        }, 1000);
    };
    seznamObiskovComponent.prototype.bubbleSort = function (tabela) {
        for (var i = 0; i < tabela.length - 1; i++) {
            for (var x = 0; x < tabela.length - 1; x++) {
                var parts = tabela[x].predvideniDatumObiska.split('-');
                var prvi = parts[0] + parts[1] + parts[2];
                parts = tabela[x + 1].predvideniDatumObiska.split('-');
                var drugi = parts[0] + parts[1] + parts[2];
                if (Number(prvi) > Number(drugi)) {
                    var theGreater = tabela[x];
                    tabela[x] = tabela[x + 1];
                    tabela[x + 1] = theGreater;
                }
            }
        }
        return tabela;
    };
    seznamObiskovComponent.prototype.Onsubmit = function () {
        var i = 0;
        var predvideniOd = '';
        var predvideniDo = '';
        var dejanskiOd = '';
        var dejanskiDo = '';
        //datumi 7
        if (this.izbraniPredvideniDatumOd != '') {
            var parts = this.izbraniPredvideniDatumOd.split('-');
            predvideniOd = parts[0] + parts[1] + parts[2];
        }
        if (this.izbraniPredvideniDatumDo != '') {
            var parts = this.izbraniPredvideniDatumDo.split('-');
            predvideniDo = parts[0] + parts[1] + parts[2];
        }
        if (this.izbraniDejanskiDatumOd != '') {
            var parts = this.izbraniDejanskiDatumOd.split('-');
            dejanskiOd = parts[0] + parts[1] + parts[2];
        }
        if (this.izbraniDejanskiDatumDo != '') {
            var parts = this.izbraniDejanskiDatumDo.split('-');
            dejanskiDo = parts[0] + parts[1] + parts[2];
        }
        var obisk = ({ idObiska: 0, izdajatelj: '', vrstaObiska: '', patronaznaSestra: '', pacienti: '', predvideniDatumObiska: '', dejanskiDatumObiska: '', opravljenost: '' });
        this.tabelaDejanskiObiskov = [];
        for (var _i = 0, _a = this.tabelaObiskovVsi; _i < _a.length; _i++) {
            var ob = _a[_i];
            var test = true;
            var parts = ob.predvideniDatumObiska.split('-');
            var predD = parts[0] + parts[1] + parts[2];
            parts = ob.dejanskiDatumObiska.split('-');
            var dejanD = parts[0] + parts[1] + parts[2];
            var tabelaIfov = [false, false, false, false, false, false, false];
            if (ob.vrstaObiska == this.izbraniObisk.name || this.izbraniObisk.name == '' || this.izbraniObisk.name == undefined) {
                tabelaIfov[0] = true;
            }
            if (ob.izdajatelj == this.izbraniIzdajatelj.sifra || this.izbraniIzdajatelj.sifra == '' || this.izbraniIzdajatelj.sifra == undefined) {
                tabelaIfov[1] = true;
            }
            if (ob.pacienti.indexOf(this.izbraniPacient.ime + " " + this.izbraniPacient.priimek) >= 0 || this.izbraniPacient.ime == '' || this.izbraniPacient.ime == undefined) {
                tabelaIfov[2] = true;
            }
            if (ob.patronaznaSestra.indexOf(this.izbranaSestra.sifra) >= 0 || this.izbranaSestra.sifra == '' || this.izbranaSestra.sifra == undefined) {
                tabelaIfov[3] = true;
            }
            if (ob.opravljenost == this.izbranaOpravljenost.opravljenost || this.izbranaOpravljenost.opravljenost == '' || this.izbranaOpravljenost.opravljenost == undefined) {
                tabelaIfov[4] = true;
            }
            if ((Number(predD) >= Number(predvideniOd) && Number(predD) <= Number(predvideniDo)) || (predvideniDo == '' && Number(predD) >= Number(predvideniOd)) || (predvideniOd == '' && Number(predD) <= Number(predvideniDo)) || (predvideniDo == '' && predvideniOd == '')) {
                tabelaIfov[5] = true;
            }
            if ((Number(dejanD) >= Number(dejanskiOd) && Number(dejanD) <= Number(dejanskiDo)) || (dejanskiDo == '' && Number(dejanD) >= Number(dejanskiOd)) || (dejanskiOd == '' && Number(dejanD) <= Number(dejanskiDo)) || (dejanskiDo == '' && dejanskiOd == '')) {
                tabelaIfov[6] = true;
            }
            for (var _b = 0, tabelaIfov_1 = tabelaIfov; _b < tabelaIfov_1.length; _b++) {
                var d = tabelaIfov_1[_b];
                if (d == false) {
                    test = false;
                    break;
                }
            }
            if (test == true) {
                obisk = ob;
                this.tabelaDejanskiObiskov[i] = obisk;
                i = i + 1;
            }
        }
    };
    return seznamObiskovComponent;
}());
seznamObiskovComponent = __decorate([
    core_1.Component({
        selector: 'seznamObiskov',
        templateUrl: './seznamObiskov.component.html',
        styleUrls: ['./seznamObiskov.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, izpisDN_service_1.izpisDNService])
], seznamObiskovComponent);
exports.seznamObiskovComponent = seznamObiskovComponent;
//# sourceMappingURL=seznamObiskov.component.js.map
