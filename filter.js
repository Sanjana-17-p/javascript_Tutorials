//  Normal Execution through forEach()
const coding = ["js", "ruby", "java", "python", "cpp"]
const values= coding.forEach((item)=>{
    // console.log(item);
    return item
})
// console.log(values)     // at last it show undefined , so here we use filter


// filter( )
const my_Num = [1,2,3,4,5,6,7,8,9,10]

//  let new_Num = my_Num.filter((num)=>{
//     //  num>4
//     return num>4
// })

// console.log(new_Num);  ===>[]
// console.log(new_Num)   ====>[ 5, 6, 7, 8, 9, 10 ]

// --------------------------------------------------------------------


//  using foreach
const newNum = []
my_Num.forEach((num)=>{
    if (num>4){
        newNum.push(num)
    }
})
// console.log(newNum); //[ 5, 6, 7, 8, 9, 10 ]


// -------------------------------------practice -----------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbooks = books.filter((bk)=>bk.genre==="History")
//   console.log(userbooks);
userbooks =books.filter((bk)=>{
     return bk.publish>=1995 && bk.genre==="History"   // always remember that when you open scope ypu have to "return"
})
  console.log(userbooks);
  