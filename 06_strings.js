// first way to declare string....


const name = "Vidha"
const pass_out_year = 2020

console.log(`Hello my name is ${name} and my passout year was ${pass_out_year}`); //string interpolation

// second way to declare string....
 const game_name =  new String('counterstrike')
 console.log (game_name[0])
 console.log(game_name.__proto__)

 //console.log(game_name.trimEnd(2))

 //console.log(game_name.toUpperCase())
 //console.log(game_name.indexOf('s'))
 //console.log(game_name.length());
 console.log(game_name.charAt(4));


 const tocheck = new String('gta-vta')

//const var1 = tocheck.substring(0,7)
 //console.log(var1)

const var2 = tocheck.slice(-8,4)
console.log(var2); // l


// trim

const new_stringone ="     vidha    "
console.log(new_stringone)
console.log(new_stringone.trim())

console.log(new_stringone.replace('v','20'))