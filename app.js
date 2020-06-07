/* let  fecha;
fecha = new Date ();
document.getElementById('fecha').innerHTML = fecha; */


//Hacemos una función para hacer las operaciones
function textoFecha(fecha){
  var numDiaSem = fecha.getDay(); //getDay() devuelve el dia de la semana.(0-6).
//Creamos un Array para los nombres de los días    
  var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  var diaLetras = diasSemana[fecha.getDay()];   //El día de la semana en letras. getDay() devuelve el dia de la semana.(0-6).
//Otro Array para los nombres de los meses    
  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var mesLetras = meses[fecha.getMonth()];  //El mes en letras
  var diaMes = (fecha.getDate());   //getDate() devuelve el dia(1-31).
  var anho = fecha.getFullYear();  //getFullYear() devuelve el año(4 dígitos).
  var hora = fecha.getHours();    //getHours() devuelve la hora(0-23).
  var min = fecha.getMinutes();   //getMinutes() devuelve los minutos(0-59).
  if ((min >= 0) && (min < 10)) {    //Algoritmo para añadir un cero cuando el min tiene 1 cifra.
    min = "0" + min;
  }
  var devolver = "Hoy es un gran día " + diaLetras+ ", " + diaMes + " de " + mesLetras + " de " + anho + " y son las " + hora + ":" + min + " horas.";
  return devolver;
}
var fecha = new Date();  //Declaramos el objeto fecha actual
/* document.write(textoFecha(fecha));  //Imprimir llamando a la función textoFecha() */
document.getElementById('fecha').innerHTML = textoFecha(fecha);
 
 
 document.getElementById('para_escribir_y_que_se_vea_en_el_sitio_uso_id').innerHTML = "Aca esta el ejemplo de como puedo escribir y que salga visible en el sitio. Y si quiero que se vea en la consola solamente utilizó la siguiente linea de codigo.... console.log('Estoy escribiendo en la consola vease la linea 15 de este archivo.js'); . Tuve que poner comillas dobles al principio y al final para que se pueda ver y simples en el console.log, porque sino no me lo tomaba"
// IMPORTANTE NO SE USAN MUCHO LOS prompt, ni los alert, solo para errores, y los confirm pero son todas funciones que te podes utilizar y saltan a una pantalla emergente de tu propia pagina

// let nombre = prompt('Cual es tu nombre?');

// el prompt te crea un interfaz dependiendo el navegador, es decir, un cuadro que sale de la pantalla con la descripcion puesta tanto doble comilla como simple podes ponerlo, y ademas lo va almacenar en la categoria edad en este caso el de arriba en la de nombre

// let edad = prompt('Cual es tu edad?');

// con esto llamo a el id app y te aparece el mensaje plasmado en el sitio web, IMPORTANTE siempre poner comillas iguales tanto en el archivo js y en el index.

// document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`; ESTO SALE EN EL SITIO

// es muy util enviar testo a la consola de los navegadores 
console.log("Enviando a la consola");
console.log(2 + 2);
console.log(true);
console.log('ID: ' + 20);
// EL Console.LOG('Y LO QUE FUESE EN CADENA DE CARACTERES') SI LO ESCRIBO EN LA CONSOLA VA TIRAR UN UNDEFINED,ya que no retorna un valor, prompt sale la pantalla esa y retorna el valor que yo le coloque

// IMPORTANTE CUANDO YO MANDO UNA var = 'hola mundo' y despues la llamo con SVGComponentTransferFunctionElement.log(hola);sin las comillas las variables se llaman sin comillas IMPORTANTE
// OTRA COSA MUY IMPORTANTE---- ES usar console.time y console.timeEnd te permite saber cuanto tiempor se tardo en hacer algo para mejorar el tiempo en la pagina web ----IMPORTANTE
// Para crear variables las que estan son var, let y const var es la anterior pero sirve igualment

// la variable se pueden inicializar o no ej. sirven para los carritos de compra y van siempre letras y despues los numeros sino tira error
// Una forma

// var carritos;
// console.log(carritos);

var carrito = 'libro';
console.log(carrito);

// la manera de escribir con let es igual a var

let nombrePrimero = 'Rodolfo';

//  o

let nombre_primero = 'Juan';

 console.log(nombrePrimero);
 console.log(nombre_primero);
// IMPORTANTE
 /* despues se puede hacer 
 let nombre; asi se asigna el nombre de la misma
aca le estoy dando valor
nombre = 'Juan';
y aca la llamo 
console.log(nombre); */

/* Var no se puede re escribir la variable
 esto es asi 
 let producto = 'libro';
 producto = 'libro1';
 Asi esta Bien
 en var si se puede re escribir la variable
esto es asi 
var producto = 'libro';
var producto = 'libro1'; */

// las variables const deben tener un valor de inicializacion siempre no se pueden marcarlas e inicializarlas mas adelante con let si se puede. Ademas no se puede cambiar una const. GENERALMENTE SE UTILIZA PARA CUANDO EL VALOR NO VA CAMBIAR NUNCA ----BUENA MANERA DE SABER QUE ESE VALOR NO VA A CAMBIAR Y TENERLA DISTINGIDA
let apellido, mensaje;
 apellido = 'Toranzo';
// let apellido = 'Tuerca';
  mensaje = "Y entonces dije 'buen curso!'"; //o se puede hacer de esta manera mensaje = ' Y entoces dije \'buen curso!!\''; y te va a respetar las comillas sencillas
console.log(mensaje);

// Concatenar em javascript
 mensaje = 'JAVA' + 'SCRIPT';

//  UNIENDO VARIABLES EN UNA SOLA
let aprendiendo = 'Aprendiendo', tecnologia = 'JavaScript';
// esta es la forma vieja de hacerlo la qwue yo aprendi en MUMUKI
console.log(aprendiendo + ' '+ tecnologia);

// FORMA NUEVA

console.log(`${nombrePrimero} ${apellido}`);
// son las dos formas de concatenar variables ----IMKPORTANTE------

let segundo_nombre;
segundo_nombre = 'Jorgito';
// esto de length se usa para saber cuanto caracteres tiene la contraseña en los sitios y te tiran error si es menos de lo que ellos quieren
console.log(segundo_nombre.length);

// se puede hacer con css lo de convertir una cadena de texto en mayuscula
console.log(tecnologia.toUpperCase()); //aqui esta devolviendo en mayuscula el contenido de tecnologia
console.log(segundo_nombre.toLowerCase ());

mensaje = 'Aprendiendo JavaScript, CSS, HTML, para ser Frontend';
// este metodo te sirve para saber en que ubicacion esta en la cadena de caracteres siempre empieza del 0, y si no lo encuentra no pone null sino -1------IMPORTANTE-----
console.log(mensaje.indexOf('JavaScript'));
// Esto lo que hace estomar de la variable mensaje toma desde donde la inicias es decir 0 hasta donde termina 10 es decir va devolver aprendiend
console.log(mensaje.substring(0,10));
// lo que hace es dividirlo en prorciones indicando cuales son. Es una forma de separar la cadena de strings
console.log(mensaje.split(' '));
// lo que va hacer replace es remplazar la palabra que en el primer valor le digo que quiero que remplace
console.log(mensaje.replace('CSS','PHP'));
// este es igual que indexOf pero en vez de regresarte un numero en la consola te va regresar un booleano
console.log(mensaje.includes('CSS'));

let tecnologias = "JavaScript" + ' ';
// lo que va hacer esta funcion es repetir 10 veces lo que dice la variable let con un espacio
console.log(tecnologias.repeat(10));

// NumeRos JavaScript

// le pongo const porque no espero que cambien estas variables
 const numero1 = 30;
 const numero2 = 20;
 const numero3 = 20.20,
    numero4 = .1020,
    numero5 = -3;
 console.log(numero5);
 console.log(numero4);

//  voy a crear una variable con let de resultado porque el numero va ir cambiando dependiendo la suma resta o div o multiplicacion que haga por eso let
let resultado;
// suma
resultado = numero1 + numero2;
// resta
resultado = numero1 - numero2;
// multiplicacion
resultado = numero1 * 2;
// division
resultado = numero1 / numero2;
// el modulo con el % te va regresar el residuo de lo que es el numero entero es decir 10
resultado = numero1 % numero2;
// Pi
resultado = Math.PI;
// Redondeo si en vez de round le pones floor redondea hacia abajo y si le pones ceit redondea hacia arriba
resultado = Math.round(2.4);
console.log(resultado);
// raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
// absoluto
resultado = Math.abs(numero5);
console.log(resultado);
// potencia
resultado = Math.pow(8,3);
console.log(resultado);
// minimo
resultado = Math.min (3,5,38,8,9,7);
console.log(resultado);
// maximo
resultado = Math.max(2132,21,.2245,2125.125,154,5498891.2,154);
console.log(resultado);
// aleatorio
resultado = Math.random ();
console.log(resultado);
 
// hace igual que en matematica javascript
resultado = (10 + 20 * 2) -5;
console.log(resultado);

let puntaje;
 puntaje = 15;
 console.log(puntaje);
//  este le agrega un punto mas al diez pero hay que escribirlo nuevamente porque como esta despues de puntaje lo imprime despues 
  puntaje ++;
  console.log(puntaje);
//   y si lo pones al reves lo imprime de toque
++ puntaje;
console.log(puntaje);
puntaje -=5;
console.log(puntaje);
puntaje +=8;
console.log(puntaje);


// otra manera de darle valor a una variable puede ser cadena de Texto,numero,booleano,null(tipo objeto), undefined(es un valor) o symbol (son simbolos,son utiles)tambien la de abajo
let valor1;
valor1 = { nombre: 'Juan'};
console.log(valor1);

let valor;
// una manera para saber que dato es la variable se usa la consola con lo siguente...
valor ='Pablo';
// con este typeof mas la variable dice que tipo de dato es 
// este es otro tipo de valor de la variante
valor = Symbol('simbolo');
console.log(typeof valor);

// un arreglo son datos agrupados que pertenecen a un grupo, por ej
valor =[1,2,3,4];
console.log(typeof valor);

// objeto es mas flexible que un arreglo y para crear un objeto son las llaves {}
valor = {
  nombre: 'Pedro',
  profesion: 'Tecladista'
}
console.log(typeof valor);

// fecha tmbn es un objeto
valor = new Date();
console.log(typeof valor);

// Operadores de comparacion

const numero10 = 20;
const numero11 = 50;
const numero12 = '20';
// va a decir que es un booleano
console.log(typeof( numero10 > numero11));

console.log(numero10 > numero11);
console.log(numero11 > numero10);

// Comparacion de igualdad
// hay el == que no es tan extricto porque no son iguales iguales y el de ===tienen que ser iguales si o si. VEamos...
console.log( 20=='20'); //tira true
console.log( 20 === '20'); //este es mas extricto y va arrevisar todo el valor y el tipo de dato

// comparacion diferentes
console.log(2 != 3);

// comparar cadena de texto
console.log('hola' == ' hola');//va arrojar false porque hay un espacio

// comparacion de letras
// Javascrip evalua que las letras minusculas tienen mas peso que las mayusculas es decir, veamos....
console.log('a'>'A');//esto arroja verdadero
console.log('z'>'A');//true
console.log('A'>'a');//false

// comparacion null y underfined
//  console.log(null == underfined);
 //va tirar true porque va ver que ninguno tiene valores pero si lo hacemos con el mas extricto === va tirar false
const numero20 = '50',
      numero21 = 10,
      numero22 = "tres";

console.log(1+2);
console.log('java '+ "script");

// Para convertir un string en numero solo hay que agregarle la palabra Numbre
console.log( Number(numero20) + numero21);
// para hacer lo mismo tmbn esta parseInt
console.log( parseInt(numero20) + numero21);
// -----IMPORTANTE---si yo quiero convertir una palabra como en LA variable numero22 que dice tresen letras, a numero no se puede y te va a regresar NaN esto significa que no es un numero

// ES IMPORTANTE PORQUE SI QUIEREN COMPRAR CINCO VOLETOS PARA UN RECITAL CON UN FORMULARIO DE HTML ESE CINCO LO VA A LEER COMO STRINGS Y vas a necesitar o parseInt() o Number() para cambiarlo

// Otra prueba
let dato;
 dato = Number("20");//regresa number
console.log(dato);
dato = Number('20.2151545'); //regresa number de este flotante
console.log(dato);
dato = Number(true); //regresa el numero 1
console.log(dato);
dato = Number(false); //regresa el numero 0
console.log(dato);
dato =parseFloat('100.23514'); //esto es para que lo ponga todo el numero
console.log(dato);
dato = parseInt(125.32654165); //si requieres el numero entero solo va tomar el 125
console.log(dato);

// toFixed solo funciona en numeros
dato = 321654654546566.165456166516;
console.log(dato.toFixed(3)); //el tres indica cuantos decimales quiero que tenga lo combierte en STRING ----IMPORTANTE-----
// si tengo un string y lo quiero usar como numero para despues volverlo a poner como string. tengo que hacer lo siguiente
dato = '32132165161.315164665616';
console.log(parseFloat(dato).toFixed(4));

// otra clase

const apodo = 'mono';
console.log(apodo.length); //te dice cuantas letras tiene la palabra

let codigo_postal ;

codigo_postal = 105020;
console.log(codigo_postal.length);
//  podes convertir numeros y booleanos en string para que los pueda contar ---IMPORTANTE---si lo convierto a string el number es decir el codigo postal le puedo pasar el lenght
codigo_postal = String(codigo_postal);
console.log(codigo_postal.length);
// CON STRING A CONVIERTO EL NUMERO EN STRING Y ME PERMITE PODER SUMAR QUE SON DOS COSAS SI COMPRARIAN DOS COSAS O MAS ME SIRVE PARA SABER CUANTAS COSAS COMPRARON------ SIRVE------

// UNDERFINED significa que no es un metodo que se pueda aplicar para cualquier cosa ----IMPORTANTE----

// otra clase numero 21
// CREANDO UN TEMPLATE DE HTML 
// es decir que se vea en la pagina
const comida1 = 'Pizza';
const precio1 = 30,
comida2 = 'Hamburguesa',
precio2 = 40;
console.log(comida1);
console.log(precio1);
console.log(comida2);
console.log(precio2);
let variable_modificable_para_que_se_vea_html;
// foma vieja de usar los TEMPLANTE LITERAL
variable_modificable_para_que_se_vea_html = '<ul>' +
       '<li>Orden: ' + comida1 + '</li>' +
       '<li>Precio: ' + '$' + precio1 + '</li>' +
       '<li>Siguente platillo: ' +comida2 + '</li>' +
       '<li>Precio: ' + '$' + precio2 + '</li>' + 
       '<li>Sumatoria: ' +'$' + (precio1 + precio2) +'</li>' +
       '</ul>';
 console.log(variable_modificable_para_que_se_vea_html); //con esto veo como aparece en la consola para chequearlo que este bien
  //  AHORA VAMOS A VERLO EN EL DOM para que se pueda visualizar en el sitio web, de la sgt manera con el <div>id=app ESTO ESTA EN EL RENGLON 12 de HTML que creamos en el html...
       document.getElementById('app').innerHTML = variable_modificable_para_que_se_vea_html; // Esto significa leeme el id que se llama app mostramelo en html lo que es igual a la variable que cree html

// forma nueva de usar los TEMPLANTE LITERAL  mucho mas prolija y clara CUALQUIER FUCTION PUEDE ESTAR EN EL TEMPLANTE LITERAL

const comida3 = 'Empanadas';
const precio3 = 175,
comida4 = 'Asado con papa y ensalada',
precio4 = 360;

let nuevaManeraDeUsarLosTemplatesEnHtml;

nuevaManeraDeUsarLosTemplatesEnHtml = `
        <ul>
            <li>Orden: ${comida3} </li>
            <li>Precio: $ ${precio3} </li>
            <li> Otra Orden: ${comida4} </li>
            <li>Precio: $ ${precio4} </li>
            <li>Total: $ ${total(precio3,precio4)} </li>
        </ul>
`;
console.log(nuevaManeraDeUsarLosTemplatesEnHtml);

function total(precio3,precio4){
  return precio3 + precio4;
}
// para llamarlo y que aparezcan los dos en la pantalla tengo que poner otro <div> con cualquier nombre en el id y wuala
document.getElementById('app2').innerHTML = nuevaManeraDeUsarLosTemplatesEnHtml;

// otra clase numero 22 arreglos
// los arreglos siempre se van a ver entre corchetes([12,32,35,21,21,15,12,23])

// crear arreglo
const arreglo = [1,2,56,12,3,4];
console.log(arreglo);

// arreglo de strings(método alternativo)

const meses = new Array('Enero','Febrero','Marzo','Abril');
console.log(meses);

console.log(meses.length);

// esta funcion es para saber si es un arreglo o no 
console.log(Array.isArray(meses));

// si quiero acceder a un lugar especifico del arreglo hago lo siguiente. Con esto me busca que esta en la posicion 0 y me lo imprime en la consola
console.log(meses[0]);

// para arreglar un elemento mas en el arreglo hago lo siguiente
meses[4] = 'Mayo';
console.log(meses);

// otra manera de insertar un elemento al arreglo de esta manera siempre lo inserta al final sin necesidad de saber cuantos elementos hay es
meses.push('esta es una manera de insertar mas rapida y sin saber cuantos elementos tiene');
console.log(meses);
//otra manera de agregar un elemento a el arreglo y que sea adelante es
meses.unshift('Mes 0');
console.log(meses);

// Encontrar un elemento en un arreglo
// por ejemplo quiero saber donde esta abril
console.log(meses.indexOf('Abril')); // me va tirar su ubicacion

// para eliminar un elemento en el arreglo y que sea el ultimo es 
meses.pop();
console.log(meses);
// para eliminar un elemento en el arreglo y que sea el primero
meses.shift();
console.log(meses);
// para eliminar un elemento en el arreglo y que sea alguno del medio, esta funcion toma dos parametros el primero es la posicion que queres quitar y el segundo cuantos desde ahi queres quitar generalmente siempre se quita de uno por vez
meses.splice(2,1);
console.log(meses);

// para revertir el orden en el que estan se utiliza la siguiente forma
meses.reverse();
console.log(meses);

// para concatenar dos arreglos
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));

// para ordenar un arreglo con letras de la a A la Z
let frutas = ['Manzana','Banana','Kiwui', 'Anana', 'zandia','Zapallo'];
console.log(frutas);
frutas.sort();
console.log(frutas);

// ordenar numeros 
let arreglo3 = [1,5,3.21,3.65,3.52,45.5,45.6,100,40,90,78];
// tengo que poner esta funcion si o si adentro del sort
arreglo3.sort(function(x,y){
  return x-y;
})
console.log(arreglo3);
// que lo ordene de mayor a menor
arreglo3.sort(function(a,b){
  return b-a;
})
console.log(arreglo3);

// para agregar un elemento en la costantante
arreglo1[0] = 4;
console.log(arreglo1);
//  o tmbn podes hacer la de push
 arreglo1.push(5);
 console.log(arreglo1);

//  clase nueva numero 26

// creando un objeto siempre van con llaves ({})distinto a los arreglos que van con corchetes([]).  Puede ser una variable const o una variable let en eso es igual que los arreglos pueden ser let o const

const persona ={
    nombre:'Miguel',
    apellido:'Martinez',
    profesion: 'Diseñador grafico',
    email: 'correo@correo.com',
    edad: 45, 
    musica: ['Pop','Cumbia','Tini banda'], //se puede colocar adentro del objeto un arreglo
    // creo un objeto adentro de un objeto
    hogar: {
        ciudad: 'Buenos Aires,La Ferrere',
        pais: 'Argentina'
    },
    // usualmente cuando una funcion esta adentro de un objeto es un metodo siempre cuando agregas o un arreglo o otro objeto o un metodo(funcion) van con (:)
    nacimiento: function(){
      return new Date().getFullYear() -this.edad;
    }// new date()es la fecha actual y getfullyear()es el año actual descontandole la edad te da la fecha en que nacio-----BUENA FUNCION-----
}
console.log(persona);

// para acceder a los elementos del objeto se accede por el nombre de lo que esta en antes de los dos PushSubscriptionOptions, asi
console.log(persona.email);  //con esto te tira lo que dice el email en este caso

console.log(persona.musica[2]);
persona.musica.push('Alternativo');

console.log(persona.hogar.ciudad);

// otra manera de acceder a los elementos de un objeto
console.log(persona['hogar']['pais']);

// este hay una funcion que te tira la edad
console.log(persona.nacimiento());

// otro objeto para practicar
 const persona2 ={
   nombre:'Chegu',
   apellido:'Evangelista',
   profesion: 'Porrero',
   email: 'correo@correo.com',
   edad: 33, 
   musica: ['Rock','Cumbia','Reegeton'], 
   hogar: {
       ciudad: 'Potrero de Garay',
       pais: 'Argentina'
   },
  
   nacimiento: function(){
     return new Date().getFullYear() -this.edad;
   }
 }
 console.log(persona2);
 console.log(persona2.nacimiento());

 // clase nueva arreglos de objetos

  const autos = [
   {modelo: 'Mustang', motor: 6.2},
   {modelo: 'Camaro', motor: 6.1},
   {modelo: 'Challenger', motor: 6.3}
 ];
 console.log(autos);
 console.log(autos[1].modelo);

// para recorrer estos arreglos con objeto se utiliza el for
// un for es una interaccion que se repite hasta que se cumpla-----IMPORTANTE----

// lo que me da esto la cantidad de objetos que tiene el arreglo, para poder escribir un for y que se pase por esos tres objetos
console.log(autos.length);

// ASI ES COMO SE IMPRIMEN LOS DATOS EN UN ARREGLO UTILIZANDO FOR

// se inizializa siempre igual el for generalmente en todos los lenguajes se inicializa igual
// for( let i= 0; )esto va siempre i es de index ademas eso significa que esta en la posicion actual
// IMPORTANTE----CON EL i++ va incrementando de uno en uno hasta llegar a 3 ya que la posicion final es de 2 porque siempre empieza de 0, y el autos.length me indico que habia tres ELEMENTOS. POR ESO SE UTILIZA UN ARREGLO PARA SABER LA CANTIDAD DE OBJETOS Y PODER INTERACTUAR CON ELLO
for(let i = 0; i < autos.length; i++ ) {
  console.log(autos[i].modelo);

  console.log(`${autos[i].modelo} ${autos[i].motor} `);
} 
// SE PUEDEN PONER VARIOS RESULTADOS QUE TE ARROJE
//con el [i].modelo te va regresar los modelos de todos los autos asi si tenes mil autos te va a regresar todo lo que vos le pidas . MUY BUENA FUNCION LA for
// O SE PUEDE HACER POR SEPARADO
for(let i = 0; i < autos.length; i++ ) { 
  console.log(`${autos[i].modelo} ${autos[i].motor} `);
} 
//en este es un literante y me va imprimir el modelo y el motor de cada auto que tengo de mi arreglo


// Si se puede re asignar valores a un objeto por mas que tenga una const para acceder a ello hacemos 
autos[0].modelo = 'Audi';
console.log(autos);
// Es decir tengo que modificar cada elemento por separado

// Otra clase numero 28
// Estas funcion se llama fuction declaration

// primero se hace la function y despues se llama
function saludar1 (){
  console.log('Hola Miguel');
}
// llamandola aparece en mi consola de otra manera no aparecieria
saludar1 ();

function saludar (la_puedo_llamar_como_quiero){
  console.log(`Hola ${la_puedo_llamar_como_quiero}`);
}
saludar ('Alma');
saludar ("Pepito");

// funcion para sumar
function sumar1(a,b){
  console.log(a+b);
}
sumar1(3,4);
sumar1(10,50);

// otra manera
function sumar(a,b){
  return a + b;
}
let suma;

suma = sumar(1,2);
console.log(suma);
suma = sumar(5,15);
console.log(suma);

// OTRA CLASE 29
// typeof es para que nos regrese el tipo de dato que es
// esta es la forma vieja de usar if

function saludar2 (nombre){
  if(typeof nombre === "undefined"){nombre = 'Visitante'} // en caso que un visitante no de su nombre va aparecer undefined entonces yo tomo el underfined y cuando sea igual a esto le digo que le ponga lo que quiero
  return `Hola ${nombre}`;
}
// Aca tira underlife porque no puso nada en el parametro para poder darle un nombre por mas que no ponga nada tenemos que poner un if(typeof) y especificarlo sino la forma mas rapida es crear la funcion y en el parametro poner igual a lo que quiero poner sino pone parametro como el ejemplo posterior de DESPEDIDA
let saludo;
saludo = saludar();
console.log(saludo);

saludo = saludar2('Carolina');
console.log(saludo);

saludo = saludar2();
console.log(saludo);



//la forma nueva y mas sencilla es 

function despedida (nombre = 'Visitante'){
  return `Chaoooo ${nombre}`;
}

let despido;
despido = despedida();
console.log(despido);

despido = despedida('Tonga');
console.log(despido);


// Function Expression
// otra manera de introducir function
const sumamos_numeros = function(a =3,b = 5){
  return a + b;
}
console.log(sumamos_numeros(1,19));
// en este que no le puse parametro ninguno va tomar el valor que le puse arriba es decir va devolver cuando no haya parametros nada
console.log(sumamos_numeros());

const hablameDeTi = function(nombre = 'Otra vez vos',edad = 20, profesion = 'mecanico'){
  return `Hola, tienes ${edad}, profesion ${profesion} y te llamas ${nombre}`;
}
console.log(hablameDeTi('Pedro'));

// clase 30 ejemplo de IIFE
// son funciones que se decalran y se invocan al mismo tiempo. Estas funciones se invocan con (function{return...})(); asi es como se invocan y funcionan
(function(){
  console.log('Creando un IIFE');

})();

// Si utilizas jquery la sintasis es similar
/* (function(){
  console.log('Creando un IIFE');

})(Jquery); */

(function(tecnologia1){
  console.log(`Aprendiendo ${tecnologia1}`);

})('Javascript');

// Metodos de propiedades
// Cuando una funcion se pone dentro de un objeto

const musica = {
  reproducir: function(id){
    console.log(`Reproduciendo musica id ${id}`);
  },
  pausar: function(){
    console.log(`Pause a la musica`);
  }
}
musica.reproducir(30);
musica.pausar();

// los metodos tmbn pueden guardarse / crearse por afuera del objeto con el nombre del objeto + el (punto)creo otro elemento en el objeto y luego le doy un igual y puedo poner una funcion
musica.borrar = function(id){
  console.log(`Borrando la cancion con el id ${id}`);
}
musica.borrar(2);

// otra clase 31
function obtenerClientes (){
  console.log('Descargando...');
  // con esta funcion voy hacer que aparezca despues de tres segundos el cartel completo y uso tmbb la propiedad de las funciones para llamarla en el momento por eso va los 3000 ahi
  setTimeout(function(){
    console.log('Completo esta en la clase 31')
  }, 3000);
}
console.log(obtenerClientes());

// para probar las funciones que no existen utilizo el try
// Con esto no impido que no se me ejecuten las otras

// Try es cuando existe y catch es cuando no existe marca el error
try {
    probando_funcion_try();
} catch (error) {
  console.log(error);
}finally {
  console.log('No le importa, ejecuta de todos modos');
}

// En vez de que no me deje hacer mas nada  solamente la utilizo cuando no se para que sirve o si no esta funcionando la funcion.
// Es una manera de probar los errores con Try catch

// otra clase 32
// existe un objeto llamado Date()
const diaHoy = new Date();

let valorObtenido;
// mes son metodos de date ()
valorObtenido = diaHoy.getMonth();
console.log(valorObtenido);

// dia
valorObtenido = diaHoy.getDate();
console.log(valorObtenido);

// obtener el año
valorObtenido = diaHoy.getFullYear();
console.log(valorObtenido);

// obtener minutos
valorObtenido =diaHoy.getMinutes();
console.log(valorObtenido);
// obtener hora
valorObtenido = diaHoy.getHours();
console.log(valorObtenido);

// milisegundos desde 1970
/* valorObtenido = diaHoy.getUTCMilliseconds */
// get es para obtener la informacion y set para modificarla
valorObtenido = diaHoy.setFullYear(2011);
valorObtenido = diaHoy.getUTCFullYear();
console.log(valorObtenido);


/*let meses1 = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

 let mesLetras = meses1[fecha.getMonth()];
console.log(mesLetras); */

 


