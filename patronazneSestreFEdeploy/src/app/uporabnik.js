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
//# sourceMappingURL=uporabnik.js.map