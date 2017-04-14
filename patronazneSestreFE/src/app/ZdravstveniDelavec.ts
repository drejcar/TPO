export class ZdravstveniDelavec{
  constructor(
    public ime: String,
    public priimek :String,
    public sifraZd:String,
    public tel:String,
    public uporabnik: UporabnikZd
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
