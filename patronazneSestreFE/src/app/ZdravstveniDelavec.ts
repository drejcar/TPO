export class ZdravstveniDelavec{
  constructor(
    public ime: String,
    public priimek :String,
    public sifraZd:String,
    public tel:String,
	public vloga: Vloga,
    public uporabnik: UporabnikZd,
	public okolis: Okolis,
	public izvajalecZdravstvenihStoritev: IzvajalecZdravstvenihStoritev
  ){}
}

export class UporabnikZd{
    constructor(
        public email: String,
        public geslo: String,
        public vloga: Vloga

    ){}
}
export class Vloga{
    constructor(
        public idvloga: number
    ){}

}
export class IzvajalecZdravstvenihStoritev{
	constructor(
		public id: number
		
	){}
}
export class Okolis{
	constructor(
		public id: number
	){}
	
}
