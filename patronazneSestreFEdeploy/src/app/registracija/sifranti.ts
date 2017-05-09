export interface Spols{
	idspol: number;
 	opis: String;

}
export interface Okoliss{
	idokolis: number;
	opis: String;
	posta: Postas;

}
export interface Postas{
	idposta: number;
	opis: String;
}
export interface Razmerjas{
  idrazmerje:number;
  opis:String;
}
