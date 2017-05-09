export class ZdravstveniDelavec{
  constructor(
   public ime: String,
   public priimek :String,
   public sifra:String,
   public telefonskaStevilka:String,
   public uporabnik: UporabnikZd,
   public izvajalecZdravstvenihStoritev: IzvajalecZdravstvenihStoritev,
   public okolis?: Okolis,
  ){}
}

export class UporabnikZd{
    constructor(
       public email: String,
       public geslo: String,
       public vloga: Vloga,

    ){}
}
export class Vloga{
    constructor(
       public idvloga: number,
	   public opis?: String,
    ){}

}
export class IzvajalecZdravstvenihStoritev{
	constructor(
	   public idizvajalecZdravstvenihStoritev: number,
	   public posta?: Posta,
	   public ulica?: String,
	   public hisnaStevilka?: String,
	   public stevilkaIzvajalca?: String,
	   public naziv?: String,
	){}
}
export class Okolis{
	constructor(
	   public idokolis: number,
	   public opis?: String,
	   public posta?: Posta,
	){}
	
}
export class Posta{
	constructor(
	    public idposta: number,
	    public opis?: String,
	){}
}
