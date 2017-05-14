"use strict";
var Uporabnik = (function () {
    function Uporabnik(ime, priimek, mail, pwd, stKartice, tel, ulica, hisnaStevilka, postnaStevilka, okolis, datumRojstva, spol, test) {
        this.ime = ime;
        this.priimek = priimek;
        this.mail = mail;
        this.pwd = pwd;
        this.stKartice = stKartice;
        this.tel = tel;
        this.ulica = ulica;
        this.hisnaStevilka = hisnaStevilka;
        this.postnaStevilka = postnaStevilka;
        this.okolis = okolis;
        this.datumRojstva = datumRojstva;
        this.spol = spol;
        this.test = test;
    }
    return Uporabnik;
}());
exports.Uporabnik = Uporabnik;
var Okolis = (function () {
    function Okolis(idokolis, opis, posta) {
    }
    return Okolis;
}());
exports.Okolis = Okolis;
var Posta = (function () {
    function Posta(idposta, opis) {
    }
    return Posta;
}());
exports.Posta = Posta;
//# sourceMappingURL=uporabnik.js.map