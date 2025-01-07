/*Block scope variable 
    let, const
*/

function app(){
    if (true){
        var i = "Hello"
        let j = "World"
    }
    console.log(i + " I ")
    console.log(j + " J ")
}

app() // => " Hello I" 

/* Arrow functions
    map, filter, reduce
*/

var result = [1,2,3,4].map(function(n) {
    return n + 1;
})

console.log (result) // [2,3,4,5]


var names = [ "Mg Mg", "Kyaw Kyaw", "Aye Aye"]
var filtered_names = names.filter(function(x){
    return x == "Kyaw Kyaw";
})

var reduced_result = [1,2,3,4].reduce((a,b) => a + b)
console.log (reduced_result) // ["Kyaw Kyaw"]

/* 
    Default Parameter Value and Rest Parameters
*/

function sum (a,b = 5){
    return a + b
}

console.log (sum(10)) // 15

function add(a, b, ...c) {
    return c;
    }
console.log(add( 1, 2, 3, 4, 5 ))