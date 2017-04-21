export interface Upr{
	iduporabnik: number;
	email?: String;
	geslo: String;
	vloga?: Vlog;
	zadnjaPrijava?: String;
}

export interface Vlog{
	idvloga?: number;
	opis?: String;
}