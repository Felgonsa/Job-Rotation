

// penfor (2,n)
// termo = ultimo + penultimo
// penultimo = ultimo
// ultimo = termo
// count += 1ultimo=1

function fibonacci() {
    console.log("%c------Inicio exercicio 2: Fibonacci------", "background: #ffffff; color: #ff0000");
    
    number = 500 //numero que deseja saber
    n1 = 1
    n2 = 1 
    termo = n1+n2
    if(termo < number){
    
    fibonacciCreator()
    }

    if(number != termo){
        console.log("o numero", number, "não faz parte da sequencia de Fibonacci ");
    }else if(number = termo){
        console.log("o numero", number, "faz parte da sequencia de Fibonacci ");
    }

    console.log("%c------Fim exercicio 2: Fibonacci------", "background: #ffffff; color: #ff0000");


}

function fibonacciCreator(){
    for(;;){
        if(termo >= number) break
        
        n1 = n2
        n2 = termo 
        termo = n1+n2
        console.log(termo);
        
    }
    
}

fibonacci()