
import { HttpAdapter, PokeApiAdapter, pokeApiFetch } from "../api/pokeApi.adapter";
import { Move} from "../interfaces/pokeapi-response.interface";

export class PokemonClass{

  constructor(public readonly id:number,
    public name:string,private readonly http:HttpAdapter){
  }
  get imageUrl():string{
    return `https://pokemon.com/${this.id}.jpg`
  }
  public speak():string{
    this.scream()
    return `El pokemon ${this.name} dice, onichan!!!`
  }
  private scream():string{
    return `El pokeemon screamoo!`
  }

}
const pokeApiAxiosAdapter = new PokeApiAdapter();
const pokeApiFetchAdapter = new pokeApiFetch();
export const newPikachu = new PokemonClass(1,"pikachu",pokeApiAxiosAdapter);
export const newPokemon = new PokemonClass(1,"pikachu",pokeApiFetchAdapter);
