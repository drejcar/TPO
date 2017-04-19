export class Kontakt{
  constructor(
    public kime: String,
    public kpriimek: String,
    public ktel:String,
    public kulica:String,
    public khisnaStevilka:String,
    public kpostnaStevilka: String,
    public krazmerje: sorodstvenoRazmerje
  ){}
}

export class sorodstvenoRazmerje{
	constructor(
	idsorodstvenoRazmerje: number,
	opis: String
	){}
}
