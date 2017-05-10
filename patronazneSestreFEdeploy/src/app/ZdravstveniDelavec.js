"use strict";
var ZdravstveniDelavec = (function () {
    function ZdravstveniDelavec(ime, priimek, sifraZd, tel, vloga, uporabnik, okolis, izvajalecZdravstvenihStoritev) {
        this.ime = ime;
        this.priimek = priimek;
        this.sifraZd = sifraZd;
        this.tel = tel;
        this.vloga = vloga;
        this.uporabnik = uporabnik;
        this.okolis = okolis;
        this.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
    }
    return ZdravstveniDelavec;
}());
exports.ZdravstveniDelavec = ZdravstveniDelavec;
var UporabnikZd = (function () {
    function UporabnikZd(email, geslo, vloga) {
        this.email = email;
        this.geslo = geslo;
        this.vloga = vloga;
    }
    return UporabnikZd;
}());
exports.UporabnikZd = UporabnikZd;
var Vloga = (function () {
    function Vloga(idvloga) {
        this.idvloga = idvloga;
    }
    return Vloga;
}());
exports.Vloga = Vloga;
var IzvajalecZdravstvenihStoritev = (function () {
    function IzvajalecZdravstvenihStoritev(id) {
        this.id = id;
    }
    return IzvajalecZdravstvenihStoritev;
}());
exports.IzvajalecZdravstvenihStoritev = IzvajalecZdravstvenihStoritev;
var Okolis = (function () {
    function Okolis(id) {
        this.id = id;
    }
    return Okolis;
}());
exports.Okolis = Okolis;
//# sourceMappingURL=ZdravstveniDelavec.js.map