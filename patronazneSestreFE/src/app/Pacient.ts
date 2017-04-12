export class Pacient{
 constructor(
  	hisnaStevilka: number,
    ime: String,
    priimek: String,
    stevilkaZdravstvenegaZavarovanja: number,
    telefonskaStevilka: number,
    ulica: String,
    posta: Posta,
    spol: Spol,
    uporabnik: Uporabnikdrugi
    ){}
 }

 export class Posta {
  constructor(
 	idposta: number,
    opis: String
  ){}
 }

 export class Spol {
  constructor(
 	idspol: number,
 	opis: String
 	){}
 }

 export class Uporabnikdrugi {
 constructor(
 	email: String,
 	geslo: String,
 	vloga: Vloga
  ){}
 }

 export class Vloga {
  constructor(
 	idvloga: number
   ){}
 }