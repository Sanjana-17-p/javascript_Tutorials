  const marvel_heros  = ["Ironman", "thor", "spiderman"]
  const dc_heros = ["flash","superman","Batman"]

// marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//[ 'Ironman', 'thor', 'spiderman', [ 'flash', 'superman', 'Batman' ] ]


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


//  spread

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);


// console.log(Array.isArray("Captain America"));
// console.log(Array.from("Captain America"));  // change in array,//and you can pass object and stringconsole.log(Array.from("Captain America"));
// console.log(Array.from({name : "America"})); // intresting


let  score1 = 100
let  score2 = 200
let  score3 = 300
console.log(Array.of(score1,score2,score3));
