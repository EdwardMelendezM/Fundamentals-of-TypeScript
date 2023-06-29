// Index Signatures


interface TransactionObj{
  readonly [index:string]:number
  Pizza: number,
  Books :number,
  Job :number
}

// interface TransactionObj{
//   Pizza :number,
//   Books :number,
//   Job :number
// }

const todayTransactions :TransactionObj ={
  Pizza:-10,
  Books:-5,
  Job:50
}

console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);

let props:string = 'Pizza'
console.log(todayTransactions[props])


const todayNet = (transactions: TransactionObj):number=>{

  let total = 0;
  for (const transaction in transactions){
    total += transactions[transaction]
  }


  return total
}

const todaysNewTransaction :TransactionObj={
  Books:0,
  Job:5,
  Pizza:6,
  Pedro:8,
}

// keyof and keyof typeof

interface Student{
  name:string,
  GPA:number,
  classes?:number[]
}

const student:Student = {
  name:'Doung',
  GPA:3.5,
  classes:[100,200]
}

for ( const key in student ){
  console.log(`${key} : ${student[key as keyof Student]}`)
}


Object.keys(student).map(key=>{
  console.log(student[key as keyof typeof student])
})

const logStudentKye = (student:Student,key:keyof Student):void=>{
  console.log(`Student ${key} : ${student[key]}`)
}

type Streams = 'salary' | 'bonus' | 'sidehustle' ;

type Incomes = Record<Streams,number | string>

const monthlyIncomes:Incomes = {
  salary:500,
  bonus:100,
  sidehustle:250
}

for (const revenue in monthlyIncomes){
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
