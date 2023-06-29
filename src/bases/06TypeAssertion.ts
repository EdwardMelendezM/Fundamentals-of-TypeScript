type One = string;
type Two = string | number;
type Three = 'Hello'


//Convert to more or less specific
let a:One = 'Hello';
let b = a as Two; // Less specific type
let c = a as Three; // More specific

let d = <One>'Word';
let e = <string | number>'Word'; 

let addOrConcat = (
  a:number,
  b:number,
  c:'add' | 'concat'
  ):number | string =>{
  if(c==='add') return a+b
  return ''+a+b
}


let myVal: string = addOrConcat(2,2,'concat') as string

let nextVal:number = addOrConcat(2,2,'concat') as number


// In the document

const img = document.querySelector('#img') as HTMLImageElement

const myImg = document.querySelector('img')!

const nextImg = <HTMLImageElement> document.getElementById('#img')


// nextImg.src
// img.src
// myImg.src


// const year = document.getElementById('yeaer')
// const thisYear = new Date().getFullYear()

// year.setAttribute("datetime", thisYear)
// year.textContent

let year :HTMLElement | null
year = document.getElementById('year')

let thisYear:string
thisYear = new Date().getFullYear().toString()
if(year){
  year.setAttribute('datetime',thisYear)
  year.textContent=thisYear
}


