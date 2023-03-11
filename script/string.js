console.log("%c------Inicio exercicio 5: String------", "background: #ffffff; color: #ff0000");

let string = "String para exemplo"
let reverseString = ""

function inverter(){

for (let i = string.length -1; i >= 0 ; i--){
 
    reverseString +=string[i]
    
}
console.log("O inverso de '",string,"' é ", "'",reverseString,"'");

}

inverter()

console.log("%c------Fim exercicio 5: String------", "background: #ffffff; color: #ff0000");
