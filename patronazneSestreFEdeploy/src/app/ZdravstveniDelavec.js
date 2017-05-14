"use strict";
var ZdravstveniDelavec = (function () {
    function ZdravstveniDelavec(ime, priimek, sifra, telefonskaStevilka, uporabnik, izvajalecZdravstvenihStoritev, okolis) {
        this.ime = ime;
        this.priimek = priimek;
        this.sifra = sifra;
        this.telefonskaStevilka = telefonskaStevilka;
        this.uporabnik = uporabnik;
        this.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
        this.okolis = okolis;
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
    function Vloga(idvloga, opis) {
        this.idvloga = idvloga;
        this.opis = opis;
    }
    return Vloga;
}());
exports.Vloga = Vloga;
var IzvajalecZdravstvenihStoritev = (function () {
    function IzvajalecZdravstvenihStoritev(idizvajalecZdravstvenihStoritev, posta, ulica, hisnaStevilka, stevilkaIzvajalca, naziv) {
        this.idizvajalecZdravstvenihStoritev = idizvajalecZdravstvenihStoritev;
        this.posta = posta;
        this.ulica = ulica;
        this.hisnaStevilka = hisnaStevilka;
        this.stevilkaIzvajalca = stevilkaIzvajalca;
        this.naziv = naziv;
    }
    return IzvajalecZdravstvenihStoritev;
}());
exports.IzvajalecZdravstvenihStoritev = IzvajalecZdravstvenihStoritev;
var Okolis = (function () {
    function Okolis(idokolis, opis, posta) {
        this.idokolis = idokolis;
        this.opis = opis;
        this.posta = posta;
    }
    return Okolis;
}());
exports.Okolis = Okolis;
var Posta = (function () {
    function Posta(idposta, opis) {
        this.idposta = idposta;
        this.opis = opis;
    }
    return Posta;
}());
exports.Posta = Posta;
//# sourceMappingURL=ZdravstveniDelavec.js.map