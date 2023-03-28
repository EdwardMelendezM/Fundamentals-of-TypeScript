export interface Pokemon{
  id:number;
  name:string;
  age?:number
}
export const pokemons:Array<Pokemon> = [{
  id: 1,
  name: "Bulbasaur",
  age:10
}]
