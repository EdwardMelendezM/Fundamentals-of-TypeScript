class PokemonBad{
  constructor(public readonly id:number,public name:string){

  }
  scream(){
    console.log(`${this.name} exclamo Perro loco!!!` );
  }
  speak(){
    console.log(`${this.name},${this.name}`);
  }
}
const MyDecorator=()=>{
  return(target:Function)=>{
    return PokemonBad
    
  }
}
@MyDecorator()
export class Pokemon{
  constructor(public readonly id:number,public name:string){

  }
  scream(){
    console.log(`${this.name} exclamo onichan!!!` );
  }
  speak(){
    console.log(`${this.name},${this.name}`);
  }
}
export const charmander = new Pokemon(4,'Charmander')
charmander.scream();
charmander.speak();