// let person = {
//     Steave:150,
//     Jon: 160,
//     Alex: 220,
//     Sasha:330
// }
// console.log(person.Steave+person.Jon+person.Alex+person.Sasha)
// let sum = 0
// for (let key in person) {
//     sum+=person[key]
// }
// console.log(sum)


// const obj = [
//     ['name', 'Vlad'],
//     ['age', '18'],
//     ['job', 'driver']
// ]
// const obj1 = {
//     name: 'Vlad',
//     age: 18,
//     job: 'driver',
//     skills: job = {
//         driving: 'good', 
//         polite: svo = {
//             smile: true, 
//             funny:true
//         }
//     }
// }
// console.log(Object.fromEntries(obj))
// console.log(Object.entries(obj1))

// const map = new Map(obj)
// console.log(map)
// map.set('skills', ['html', 'css', 'js'])
// console.log(map)

let obj = [
    ['firstName', 'Vlad'],
    ['lastName', 'Pronin'],
    ['age', '18'],
    ['job', 'driver']
]
console.log(Object.fromEntries(obj));
obj = Object.fromEntries(obj);
console.log(obj.firstName);
console.log(obj.lastName);
obj.age = 20;
console.log(obj.age)
hisjob = ['smile', 'stand', 'talk', 'answer']
obj.joobj.job + hisjob
console.log(obj)