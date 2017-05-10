export class delovniNalog {
	izvajalecZdravstvenihStoritev : IzvajalecZdravstvenihStoritev;
	zdravstveniDelavec : ZdravstveniDelavec;
	pacients :  Array<Pacient>;
	vrstaObiska : Storitev;
	bolezen : Bolezen;
	materials : Array<Material>;
	zdravilos : Array<Zdravilo>;		
}
export class dN{
	constructor(
	 idDelovnegaNaloga: number,
	 izdajatelj: String,
	 vrstaObiska: String,
	 patronaznaSestra: String,
	 pacienti: String,
	 datumIzdaje: String,
	 ){}
}
export class IzvajalecZdravstvenihStoritev {
	idizvajalecZdravstvenihStoritev : number;
	naziv: String;
}

export class ZdravstveniDelavec {
	constructor(
	ime: String,
	priimek: String,
	id : number,
	){}
	
}
	
export class Pacient {
	constructor(
	ime: String,
	priimek: String,
	id: number,
	){}
}

export class Material {
	idmaterial : number;
}

export class Zdravilo {
	idzdravilo : number;
}

export class Bolezen {
	idbolezen : number;
}

export class Storitev {
	idvrstaObiska : number;
}