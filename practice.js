//Functions in Javascript

//Function Statement aka Function Declaration

a();

function a(){
    console.log("A called");   //This wasy of declaring a function is called a Functional Statement.
}






//function expression

var b=function (){
    console.log("B called");  // This is a Function expression.

}
b();
/*The main difference between Function Statement and Function Expresion is: Obviously the way of declaring the functions comes into play
But the main difference could be seen in the Hoisting Phase when, So a() being a function returns 'A Called" but the b() being a variable
 unlike all other variables are initialized with Undefined and thus throws an error that b() is not a function (when called before the
declaration of the function) */






// Anonymous Functions- Function with no name assigned to it

 var c= function () {                                        
    console.log("Anonymous Function Called");    // Anonymous Functions.
}
// Anonymous Functions are not possible in Function Statements as it could not go in without a Name, They are basically used in a Function 
//Expressions as in the Previous examples.






 // Named Function Expression
 var d= function xyz(){
    console.log("D is called");      // This is a named Function Expression. Function Expression with a name attached to it , It is like a function 
                          //Expression but with a named function to it.
 }
 d();
 //xyz();// gives us error because we will not get xyz() as a function in the global sccope.

 var d= function xyz(){
    console.log(xyz);      // This is a named Function Expression. Function Expression with a name attached to it , It is like a function 
                          //Expression but with a named function to it.
 }
 d();

 // this is how we can have the xyz with us it somewhat reacts like a variable.





 //Parameters and Arguements

 // Pretty same concept as in other languages Parameters are those which are passed into a function declaration and Arguements are those 
 //which are  send in a Function, Parameters are local to the scope of the  function they are used in.

 // Okay we can pass in Functions inside a Function too as Arguements.

 var e= function abc(param1){
         console.log(param1);
 }
 e(
    function (){
        console.log("Function inside function");
    }
    
 );



 /*First class Functions/irst Class Citizens in Javscript : The ability of functions to make them work as a variable , values,  passing a function to a function as a Parameter , 
 returning function from a function is called First Class Functions.*/

  function abcd (param1)
 {
    return function()
    {
            console.log("Abcd is called");
    }
 }

 console.log(abcd());



   let abcdef;
 //Arrow Functions (ES6): 
  abcdef = () =>{
       console.log("Just Abcdef Arrow functions");
 }

 abcdef();






