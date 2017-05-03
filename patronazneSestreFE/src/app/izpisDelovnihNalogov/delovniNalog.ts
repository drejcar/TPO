export class delovniNalog {
	izvajalecZdravstvenihStoritev : IzvajalecZdravstvenihStoritev;
	zdravstveniDelavec : ZdravstveniDelavec;
	pacients :  Array<Pacient>;
	vrstaObiska : Storitev;
	bolezen : Bolezen;
	materials : Array<Material>;
	zdravilos : Array<Zdravilo>;		
}

export class IzvajalecZdravstvenihStoritev {
	idizvajalecZdravstvenihStoritev : number;
}

export class ZdravstveniDelavec {
	idzdravstveniDelavec : number;
}
	
export class Pacient {
	idpacient : number;	
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