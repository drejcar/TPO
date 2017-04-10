/**
 * Created by Andrej on 9.4.2017.
 */
export class Uporabnik{
  constructor(
    public ime: String,
    public priimek :String,
    public mail:String,
    public pwd:String,
    public stKartice:String,
    public okolis: String,
    public datumRojstva: String,
    public spol: String
  ){}
}
