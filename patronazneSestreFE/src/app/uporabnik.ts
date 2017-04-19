export class Uporabnik{
  constructor(
    public ime: String,
    public priimek: String,
    public mail:String,
    public pwd:String,
    public stKartice:String,
    public tel:String,
    public ulica:String,
    public hisnaStevilka:String,
    public postnaStevilka:String,
    public okolis: Okolis,
    public datumRojstva: String,
    public spol: String,
    public test:String
  ){}
}

export class Okolis{
	constructor(
		idokolis: number,
		opis: String,
		posta: Posta,
	){}
	
}

export class Posta{
	constructor(
		idposta: number,
		opis: String,
	){}
}