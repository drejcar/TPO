"use strict";
var Pacient = (function () {
    function Pacient(hisnaStevilka, ime, priimek, stevilkaZdravstvenegaZavarovanja, telefonskaStevilka, ulica, posta, spol, uporabnik, okolis, datumRojstva, kontakt) {
    }
    return Pacient;
}());
exports.Pacient = Pacient;
var Posta = (function () {
    function Posta(idposta, opis) {
    }
    return Posta;
}());
exports.Posta = Posta;
var Spol = (function () {
    function Spol(idspol, opis) {
    }
    return Spol;
}());
exports.Spol = Spol;
var Uporabnikdrugi = (function () {
    function Uporabnikdrugi(email, geslo, vloga) {
    }
    return Uporabnikdrugi;
}());
exports.Uporabnikdrugi = Uporabnikdrugi;
var Vloga = (function () {
    function Vloga(idvloga) {
    }
    return Vloga;
}());
exports.Vloga = Vloga;
var Okolis = (function () {
    function Okolis(idokolis, opis, posta) {
    }
    return Okolis;
}());
exports.Okolis = Okolis;
var Kontakts = (function () {
    function Kontakts(ime, priimek, telefonskaStevilka, ulica, hisnaStevilka, posta, sorodstvenoRazmerje) {
        this.ime = ime;
        this.priimek = priimek;
        this.telefonskaStevilka = telefonskaStevilka;
        this.ulica = ulica;
        this.hisnaStevilka = hisnaStevilka;
        this.posta = posta;
        this.sorodstvenoRazmerje = sorodstvenoRazmerje;
    }
    return Kontakts;
}());
exports.Kontakts = Kontakts;
var sorodstvenoRazmerje = (function () {
    function sorodstvenoRazmerje(idsorodstvenoRazmerje, opis) {
    }
    return sorodstvenoRazmerje;
}());
exports.sorodstvenoRazmerje = sorodstvenoRazmerje;
//# sourceMappingURL=Pacient.js.map