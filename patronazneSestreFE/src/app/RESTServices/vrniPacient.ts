export interface Pacient{
 
  	hisnaStevilka: number;
    ime: String;
    priimek: String;
    stevilkaZdravstvenegaZavarovanja: number;
    telefonskaStevilka: String;
    ulica: String;
    posta: Posta;
    spol: Spol;
    uporabnik: Uporabnikdrugi;
 
 }

 export interface Posta {
 
 	idposta: number;
    opis: String;
 
 }

 export interface Spol {
 
 	idspol: number;
 	opis: String;
 
 }

 export interface Uporabnikdrugi {
 
 	email: String;
 	geslo: String;
 	vloga: Vloga;
  
 }

 export interface Vloga {
  
 	idvloga: number;
  
 }