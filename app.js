//alert("hello world")


// console.log("hello world!");

// Concatination
//spread operator
// Modules
// promises  
// Object Methods (keys,values,freez,entries) 
// Default parameters 
// Rest parameter   
// Enhanced object literals     
// Ternary Operator 

//var data = ["haris", "faizan", "noman"];
//data.splice(1, 2, "kashan");
//console.log(data)




//concatination in javascript

// const username = 20;
// const age = 20;

// console.log(username + age)



// const arr = [1, 2, 3, "abc", true];

// const [a , b , , ] = arr









// splice existing array use krta hai or hum is k parameter mai jitne value chahe add kr skte hai 
// arr.splice(2 , 2 , "updated")
// console.log(arr);


//SPREAD OPERATOR IN JAVASCRIPT 

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const newArr = [7 , 8 , ...arr1 , ...arr2]
// console.log(newArr);





//VARIABLE KO DECLARE OR REASSIGN 

// var city = "karachi" // initialze || declare
// var city = "lahore"; // redeclared
// city = "larkana" // reassign



// console.log(city);
// let city = "karachi"



// OBJECT IN JAVASCRIPT

// const obj = {
//     username: "abd",
//     age: 21,
//     hobbies: ["Swimming", "eating", "sleeping"],
//     greetUser: function () {
//         console.log(`hello ${this.username}`);

//     },
//     isLoggedIn: true
// }

// const newObj = {
//     updateUsername: "usman",
//     ...obj
// }
// console.log(newObj);


// console.log(obj.age);
// const { username, age } = obj
// console.log(age);





// // obj.age = 20
// // delete obj.age
// obj.greetUser()

// console.log(obj.hobbies[2]);









// function sum(num1 , num2) {
//     return num1 + num2
// }


// const sum = (num1 , num2)=>{
//     return num1 + num2
// }

// const total = sum(20 , 30);
// console.log(total);


//IIFE  immediately invoked function expression

// (function hello(){
//     console.log("hello world")
// })()







// const greetUser = username => `hello ${username}`




// const users = [
//     {
//         name: "John",
//         age: 25,
//         city: "New York"
//     },
//     {
//         name: "Sarah",
//         age: 30,
//         city: "London"
//     },
//     {
//         name: "Mike",
//         age: 22,
//         city: "San Francisco"
//     }
// ];

// console.log(users);

// const div = document.querySelector("#div")
//
//users.map((item , index )=>{
//    console.log(item , index);
//    div.innerHTML += `
//    <h1>${item.name}</h1>
//    <p>${item.city}</p>
//    <p>${item.age}</p>
//    <hr/>
//    `
//})


// CLOSURE IN JAVASCRIPT


// function outerFunc (){
//     var outerVar = "outer var"
//     console.log("outer func called");

//     function innerFun(){
//         console.log(outerVar)
//     }

//     return innerFun
// }


// const func = outerFunc()
// func()



// lexical scoping

// function outerFunc(){
//     let outervar = "outer"
//     function innerFun1(){
//         let inner1 = "inner 1"
//     }
//     function innerFun2(){
//         console.log(inner1);

//     }
// }













// Enhanced object literals


// let username = "abdullah"
// let age = 20

// let obj = {
//     username,age
// }

// console.log(obj);


// default parameter

// function hello(username = "abdullah"){
//     console.log(`hello ${username}`)
// }
// hello("usman")



// rest operator

// const users = (...users)=>{
//     console.log(users);
// }

// users("abdullah" , "usman" , "ammar" , "Affan")



// Object Methods (keys,values,freez,entries)

// const user = {
//     username: "Abdullah",
//     age: 21,
//     city: "karachi"
// }


// Object.freeze(user)

// user.username = "Abc"
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));









// const bankBalance = 200000;

// if (bankBalance > 2000000) {
//     console.log("alto ajayegi");
// } else if (bankBalance > 1000000) {
//     console.log("mehran ajayegi");

// } else {
//     console.log("70");
// }

// bankBalance > 2000000 ? console.log("alto ajayegi") :
// bankBalance > 1000000 ?  console.log("mehran ajayegi"):
// console.log("70")

// bankBalance > 2000000 ? console.log("alto ajayegi") : console.log("mehran")





//export let username = "abdullah"

//const sum =  (num1 , num2) => {
//   return num1 + num2
//}

//export default sum


//CLOSURE IN JAVASCRIPT 
const returnFunc = () => {
    let data = "10";
    const a = () => {
        data = "1"
        console.log(data)
        const b = () => {
         data = "2"
            console.log(data)
            const c = () => {
             data = "3"
          console.log(data)

            }
            c()
            
        }
        b()
        
    }
    a()
    
}
returnFunc()


let username  = "haris";
function init(){
    
    console.log(username)

}
init()


// WE HAVE 2 WAY FOR EXECUTE PROMISE .THEN .CATCH & ASYNC AWAIT


function carBudget (budget){
 return  new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        if(budget > 100000){
        //    console.log("you can buy a car")
             resolve('you can buy a car')
         
         }else{
    //         console.log("you can not buy a car")
             reject("you can not buy a car")
         }
 
    },1000)
    })

}

//carBudget(2000)
//.then((res)=>{
//    console.log(res)
//})
//.catch((err)=>{
//    console.log(err)
//})

//async function hello() {
//
//    try {
//        const response = await carBudget(2000)
//        console.log(response)    
//    } catch (error) {
//         console.log(error)
//    }   
//}
//hello()





// console.log("hello world 1")
// console.log("hello world 2")
// console.log("hello world 3")
// setTimeout(() => {
//     console.log("hello world 4")
// }, 0);
// console.log("hello world 5")




// set timeout
// set interval
// promise
// then catch
// async await
// fetch
// axios





// fulfilled
// pending
// rejected


// const age = 12

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (age > 18) {
//             resolve("welcome to gym")

//         } else {
//             reject("nikal yaha sa")

//         }
//     }, 1000);
// })


// promise1
// .then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// })















"https://jsonplaceholder.typicode.com/users"
"https://the-trivia-api.com/v2/questions"








function carBudget(budget) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (budget > 300000) {
                resolve("ajayegi car")
            } else {
                reject("nahi ayegi")
            }
        }, 1000);
    })
}


// carBudget(2000000)
//     


// async function hello (){
//     try {
//         const response = await carBudget(200000)
//         console.log(response);
//     } catch (error) {
//         console.error(error);
        
//     }
    
// } 
// hello()

// console.error("hello")
// console.warn("warning");

// json 

// {
//     "name": "abc"
// }




var counter = 0; 

  function Nextbtn(){

    counter =  counter+1
    const showData = document.querySelector('#div');
    fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
     //   .then((res)=>{console.log (res)})
          .then(  (res) =>
           res.map((item)=>{
           showData.innerHTML = `
           <h3 class="text-danger  fs-1">QUESTION</h3>
          <p class="fs-1">${`${counter}) Q : ` + res[counter-1].title}</p>
           <button class="btn btn-success px-5" onclick="Nextbtn()"><b>NEXT</b</button>`
               })
        )
        
   }
   Nextbtn()
