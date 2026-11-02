const linebreak = () =>{
    console.log("---------------------------------------------");
}

const arr = [23,21,161,42,151,612,15,62,52];
arr.forEach((element,index) => {
    console.log(`${index} - ${element}`);
});
linebreak();

const newarr = arr.map(element => {
    return element/10;
});
newarr.forEach((element) => {
    console.log(element);
});
linebreak();

const oddarr = arr.filter(element => {
return element%2!=0;
});
oddarr.forEach((element) => {
    console.log(element);
});
linebreak();

const total = arr.reduce(function(previous,current){
previous += current;
return previous;
},0);
console.log(`total is ${total}`);
linebreak();

const some_result = arr.some(number => {
    return number % 2 != 0;
})
console.log(`Is any element in arr is odd ? ${some_result}`);
linebreak();

const result = arr.every(number => {
    return number % 2 != 0;
});
console.log(`Are all elements in arr are odd ? ${result}`);
linebreak();

const First_even = arr.find(element => {
    return element%2 == 0;
});
console.log(`First even element in arr: ${First_even}`);
linebreak();


const last_even = arr.findLast(element => {
    return element%2 == 0;
});
console.log(`Last even element in arr: ${last_even}`);
linebreak();

const First_even_index = arr.findIndex(element => {
    return element%2 == 0;
});
console.log(`First even element's index in arr: ${First_even_index}`);
linebreak();


const last_even_index = arr.findLastIndex(element => {
    return element%2 == 0;
});
console.log(`Last even element's index in arr: ${last_even_index}`);
linebreak();

const obj = {
name : "Zeinab",
age : 30,
};
console.log(obj);
linebreak();

const {name} = obj;
const {age} = obj;
console.log(`name is: ${name}`);
linebreak();
console.log(`age is: ${age}`);
linebreak();

function printDetails ({name,age}){
console.log(`Inside printDetails function`);
console.log(`name is: ${name}`);
console.log(`age is: ${age}`);
}
printDetails(obj);
linebreak();

let number_1 = 15;
let number_2 = 35;
console.log("--Before--");
console.log(`number_1 is: ${number_1}`);
console.log(`number_2 is: ${number_2}`);
[number_1,number_2]=[number_2,number_1];
console.log("--After--");
console.log(`number_1 is: ${number_1}`);
console.log(`number_2 is: ${number_2}`);
linebreak();


