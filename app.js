//1. Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir.

function mayorEdad(){
    let edad = document.getElementById('edad1').value;
    if (edad>=18){
        alert("Usted puede conducir");
        console.log("Usted puede conducir")
    }else {
        alert("usted es menor de edad");
        console.log("usted es menor de edad")
    }
}

//5. Realiza un script que cuente el número de vocales que tiene un texto.

function contarVocales(texto){
    let contadorVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let i=0; i<texto.length; i++){
        if(vocales.indexOf(texto[i]) >= 0){
            ++contadorVocales;
        }
    }
    return contadorVocales;
}

console.log("tiene: " + contarVocales('axixexixoxu') + " vocales");

//13.  Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.
const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) =>{
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) +1 ;
    const diaActual = parseInt(fechaActual.getDate());

    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0,4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5,7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8,10));


    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    }else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

window.addEventListener('load', function () {
    fechaNacimiento.addEventListener('change', function () {
        if(this.value){
            edad.innerText = `La edad es: ${calcularEdad(this.value)} años`;
        }
    });
});

//14. Programa una función que dada una cadena de texto cuente el numero de vocales y consonantes
// metedo1
let cadena = "aAeEiIoOuU son vocales";
let numeroVocales = cadena.match(/[aeiou]/gi).length;
let numeroConsonantes = cadena.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

console.log("vocales= " + numeroVocales, "consonantes= " + numeroConsonantes);

//metodo2
const contarLetras = (cadena="") => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto");
    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado no es una cadenade texto`);
        let vocales = 0,
        consonantes = 0;
        cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena){
        if(/[aeiouáéíóú]/.test(letra))vocales++;
        if(/[bcdfghjklmnñpqrstvwzyx]/.test(letra))consonantes++;
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras("hola como estas");

//15. Programa una función que valide que un texto sea un nombre valido. Entrada(‘edson’) devolverá ‘verdadero’
const validarnombre = (nombre="") => {
    if(!nombre) return console.warn("No ingresaste un nombre");
    if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado no es una cadena de texto`);
    let expReg = /^[A-Za-zÑnÁáÉéÍíÓóÚúÃãÕõÂâÊêÎîÔôÛûÜü$\s]+$/g.test(nombre)
    return(expReg)
    ?console.info(`${nombre}, Felicidades es un nombre válido`)
    :console.info(`${nombre} Intenta otra vez, no es válido`);
}

validarnombre("ivan Montes");
validarnombre("edson_sistemas");

//16. Programa una función que dado un arreglo de elementos, elimine los duplicados:
//    entrada([‘5’, ’25’, ‘10’, ‘s’, ‘5’, ‘a’, ‘a’]) devolverá ([‘5’, ‘25’, ‘10’, ‘s’, ‘a’]).

const quitarDuplicados = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo, no puede estar vacío.");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length === 0) return console.error("El arreglo está vacío");
    if(arr.length === 1) return console.error("El arreglo debe tener al menos dos elementos");
        return console.info({
        original: arr,
        sinDuplicados: arr.filter((value,index,self) => self.indexOf(value)===index),
    })
}

quitarDuplicados([1,1,2,2,6,6,6,"a","a","a",true,true,true]);

    //opcion2
    let data = [1,2,6,1,2,5,9,'33','33'];

        let sinRepetir = data.filter((item,index)=>{
        return data.indexOf(item) === index;
        })
    console.log(sinRepetir);

//17. Programa una función que dado un array de números devuelva un objeto con dos arreglos el primero
//     con los números pares y en el segundo con los números impares.

const separarParesImpares = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números.");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length === 0) return console.error("El arreglo está vacío");
    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un número`);
    }
    return console.info({
        pares: arr.filter(num=>num%2===0),
        impares: arr.filter(num=>num%2===1)
    })
}

separarParesImpares([1,2,4,5]);

//18. Ayuda al Elfo a listar los regalos.

const carta = 'bici coche balón _playstation bici  coche   peluche';

function listGifts(letter) {
    const listarCarta = letter.split(" ");
    return listarCarta.filter((regalo) => {
        let valor = regalo.startsWith("_")
        if (valor !== true && regalo !=="") 
            return regalo !== valor
    })
    .reduce((contador, regalo) => {
        contador[regalo] = (contador[regalo] || 0) + 1;
        return contador
  }, {});
}

const regalos = listGifts(carta)
console.log(regalos)

//19. Buscando en el almacen:

function iterate(obj) {
    let res = [];
    for (let property in obj) {
        const child = obj[property];
        if (typeof child === 'object') {
            res = [...res, ...iterate(child)]
        }
        res.push(child);
    }
    return res;
}
  
function contains(store, product) {
    return iterate(store).some((item) => item === product)
}

const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta'
        }
    }
}

const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}
  
console.log("almacen: " + contains(almacen, 'camiseta'));
console.log("otro almacen: " + contains(otroAlmacen, 'gameboy'));

console.log("almacen: " + contains(almacen, 'agua'));
console.log("otro almacen: " + contains(otroAlmacen, 'mando'));

//20. En busca del reno perdido

function missingReindeer(ids) {
    let salida;
    const aux = [...Array(ids.length).keys()];
    const res = ids.sort((a, b) => a - b);
    (JSON.stringify(aux) === JSON.stringify(res))
        ?
            salida = res.at(-1) + 1
        :
        (
            res.forEach((_, index, arr) => {
                if (arr.indexOf(index) === -1) {
                    salida = index;
                 }
            })
        )
    return salida;
  }
  
console.log("# de reno perdido: " + missingReindeer([0, 2, 3]))
console.log("# de reno perdido: " + missingReindeer([5, 6, 1, 2, 3, 7, 0]))
console.log("# de reno perdido: " + missingReindeer([0,1]))
console.log("# de reno perdido: " + missingReindeer([9,2,3,5,6,4,7,0,1]))
console.log("# de reno perdido: " + missingReindeer([0]))
