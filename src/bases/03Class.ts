import axios from "axios";
import { Move, PokeAPIResponse } from "../interfaces/pokeapi-response.interface";

export class PokemonClass{

  constructor(public readonly id:number,
    public name:string){
    this.id = id;
    this.name = name;
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
    const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/ditto')

    return data.moves
  }
  
  
}
export const newPokemon = new PokemonClass(1,"pikachu");
newPokemon.getMove()