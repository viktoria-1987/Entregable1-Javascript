//Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parOimpar(numero){
    if (numero % 2 === 0){
        console.log(`${numero} es un numero par`);
    } else {
    console.log(`${numero} es un numero impar`);
		}
}

parOimpar(4);

//Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function  mayorOmenor(num1, num2){
    if (num1 < num2){
        console.log(`${num1} es menor que ${num2}`);
    }else if (num1 > num2){
        console.log(`${num1} es mayor que ${num2}`);
    } else{
        console.log(`${num1} y ${num2} son iguales`);
    }
}

//Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo (numero){
    if (numero % 5 === 0){
        console.log(`${numero} es multiplo de 5`)
    }else{
        console.log(`${numero} no es multiplo de 5`);
    }
}

multiplo(5);
multiplo(2);

//Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function creciente (n){
    for(let i = 0; i <=n; i++) {
        console.log(i);
    }
}
creciente(15);

//Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabra (palabra, numero){
    for(let i = 0; i < numero; i++){
        console.log(palabra);
    }
}

palabra("Hola", 5);

//Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function arreglo (array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]); //Imprime todos los componentes del array.
    }
    
}

arreglo([5, 2, 8, 9]);

//Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function exceptuado (valores){
    for(let i = 0; i < valores.length; i++ ){
        if(i === 5){
            continue;
        }
        console.log(valores[i]);
    }
}

exceptuado([1, 5, 3, 6, 8, 9, 7, 8]);

//Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicacion (arrayNumeros, numero){
    for(let i = 0; i < arrayNumeros.length; i++){
        console.log(arrayNumeros[i] * numero);
    }
}

multiplicacion([4, 2, 5, 6], 5);

