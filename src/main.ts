import './style.css'
import { setupCounter } from './counter'
import { age, description, name } from './bases/01types'
import { pokemons } from './bases/02Object'
import { newPikachu } from './bases/04Inyection'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h1>Hi, I am ${name} and I'm ${age}</h1>
    ${description}
    <div>
      ${pokemons[0].name}
      ${newPikachu.name}
    </div>

   
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
