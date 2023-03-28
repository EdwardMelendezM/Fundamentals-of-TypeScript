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
  async getMove(){
    return 10
  }
}
export const newPokemon = new PokemonClass(1,"pikachu");