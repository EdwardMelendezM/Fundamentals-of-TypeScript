
import { PokeApiAdapter } from "../api/pokeApi.adapter";
import { Move} from "../interfaces/pokeapi-response.interface";

export class PokemonClass{

  constructor(public readonly id:number,
    public name:string,private readonly http: PokeApiAdapter){
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
  async getMove():Promise<Array<Move>>{
    const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
    return data;
  }
  
}
const pokeApi = new PokeApiAdapter();
export const newPikachu = new PokemonClass(1,"pikachu",pokeApi);
export const newPokemon = new PokemonClass(1,"pikachu",pokeApi);
