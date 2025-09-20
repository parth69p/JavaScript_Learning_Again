// Imidiately Invoked function Expressions (IIFE)

(function chai(){
    console.log(`Db Connected`);
})(); // need of semi colon

 ((name)=>{
    console.log(`Db Connected two ${name}`)
 })("Parth") 

//  ***********************here are my learnin******************8

//1. IIFE is invoing function imedietely after creating function/ wrtiting expression
//2. funtion need to be written in '()' parantheses and one more paranthees after that () for imidiate execution.

// this technique we will use in mostly data base cases that invokin function.

// Interview question also
// 3. Two  IIFE can only be executed if first one is ended with ';' (semicolon)
