// obj = {
//     name: 'Rohith',
//     age: 22,
//     salary: 70000,
//     address: {
//         Hno: '10-3-66/3',
//         city: 'vidynagar'
//     },
//     'full name': function(){
//         return this.name + " " + "songala"
//     }
// }

// console.log(obj['full name']())

// // new object created
// function obj_constructor(fname, lname, age, salary){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.salary = salary;
// }

// var obj = new obj_constructor('Rohith', 'Songala', 22, 40000);
// console.log(obj.lname)
function demo(i){
    locations = ['vijayawada', 'hyderabad', 'karimanagar', 'warangal']
    return locations[i];
}

console.log(demo(0))