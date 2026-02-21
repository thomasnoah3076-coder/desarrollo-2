/*

console.log ("Duarte es gay");
var arreglouno = ["este","es","un","arreglo","global"];
var arreglodos = ["este","es","un","arreglo","local","que","es","el","mas","recomendable"];
console.log (arreglouno);
console.log (arreglodos); 

let map = {
    "nombre" : "Thomas",
    apellido : "Chaparro",
    edad : 18,
    skills : ["picha grande", "ser la monda"]
};

console.log("----------------------------");

console.log(map.nombre);
console.log(map["nombre"]);

console.log("----------------------------");

let a = 5;
let b = 8;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a % b);
a++;
console.log(a ** 2);

console.log("----------------------------");

console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 !=="1");
console.log(1 != "1");

console.log("----------------------------");

console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a >b);

console.log("----------------------------");

console.log(a<b || a>b);
console.log(a<b && !(a>b));

console.log("----------------------------");

if (a<b){
    console.log("Aprobación");
} else if (a === b) {
    console.log ("Son iguales.");
}else{
    consoñe.log ("continua");
}

console.log("----------------------------");

 let c = 9;
 let e = 7;
 let f = c**2;
 let g = e**2;

 if (f+g > 50) {
    console.log("Mayor a cincuenta")
 } else if (f+g <= 50){
    console.log("intente nuevemente")
 }

 console.log("----------------------------");
 
 for (let i = 0; i < 10; i ++){
    console.log(i)
 } 

 console.log("----------------------------");
 
  for (let i = 1; i < 101; i ++){
    console.log(i)
    if (i%3 == 0 && i%5 == 0){
       console.log("El numero"+i+"es: FizzBuzz")
    } else if (i%3 == 0){
          console.log("El numero"+i+"es: Fizz")
    } else if (i%5 == 0){
         console.log ("El numero"+i+"es: Buzz")      
    }
  }

  */

  let valores =  [10, 20, 30, 40, 50, 60, 70, 80, 90 ];
  for (let i = 0; i <valores.length ; i ++){
    console.log(valores[i]);
  }

  for (let i in valores){
    console.log(valores[i])
  }

  for (let i of valores){
    console.log(i)
  }

  valores.forEach (function(data,i) {
    console.log(data, i)
  })
    
  let res = valores.map (function(data){
    console.log(data);
    return data;
  })

  let palabras = ["hola","adios", "buenos dias"]
  let palabrasynombre = palabras.map (function (data){
    return data + "Thomas";
  })

  console.log (palabrasynombre);
  let filtrado = valores.filter (function(data){
    return data %3 ==0;
  })
  console.log(filtrado);

  let Nombres = ["Duarte", "Thomas", "Jesus", "Abdul"]
  Nombres.forEach(function(data){
    console.log (data);
  })

  let valoresalcuadrado = valores.map(function(data){
    return data ** 2; 
  })
   console.log(valoresalcuadrado)

  let valoresdivisible = valores.filter(function(data){
    return data % 2 == 0; 
  })
   console.log(valoresdivisible)
