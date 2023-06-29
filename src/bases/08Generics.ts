const echo = <T>(arg:T):T =>arg

const isObj = <T> (arg:T):boolean=>{
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null )
}

const isTrue = <T>(arg:T): {arg:T,is:boolean}=>{
  if(Array.isArray(arg) && !arg.length ){
    return { arg , is:false }
  }

  if(isObj(arg) && !Object.keys(arg as keyof T).length ){
    return { arg, is:false }
  }

  return { arg, is:!!arg }
}


interface BoolCheck <T> {
  value : T,
  is:boolean
}

const object1: BoolCheck<number> = {
  value:10,
  is:false
}
const object2: BoolCheck<string> = {
  value: 'Hello',
  is: false
}