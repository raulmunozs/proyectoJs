const cursos = [
    {nombre: "lectura Rapida", precio: 300},
    {nombre: "Bullet Jurnal",  precio: 250},
    {nombre: "Economia para emprendedores", precio: 350}
]

let carrito = [];
let seleccion = prompt("¿¡Listo para aprender?! \n si \n no");
function inicio(){
        while(seleccion != "si" && seleccion != "no"){
            alert("Por favor indicar con un si o un no")
            seleccion = prompt("Desea adquirir un curso \n Si \n No")
       // init = parseInt(prompt("Que deseas aprender hoy? \n 1)Lectura Rapida. \n 2)Journaling. \n 3)Economía para emprendedores."))
    } 
    
}
inicio();
productos();
menu();

function productos(){
    if(seleccion =="si"){
        alert("tenemos los siguientes cursos")
        let todosCursos = cursos.map((cursos) => cursos.nombre + " " + cursos.precio + "$");
        alert("Que deseas aprender hoy? \n 1)Lectura Rapida. \n 2)Journaling. \n 3)Economía para emprendedores. \n escriba el numero del curso")
    } else if(seleccion =="no"){
        alert("Nos vemos luego")
    }
}

function cantidades(){
    let unidades = parseInt(prompt("Cuantas personas haran el curso?"))
    carrito.push({producto, unidades, precio})
    alert(carrito)
}

function menu(){
    while(seleccion != "no"){
        let producto = prompt("Por favor escribe el curso que deseas hacer")
        let precio = 0
        if(producto === 1 || producto === 2 || producto === 3){
            switch(producto){
                case 1:
                    precio = 300;
                    break;
                case 2:
                    precio = 250;
                    break;
                case 3:
                    precio = 350;
                    break;
                default:
                    alert("Porfavor ingresa un curso")
                    break;
                }
                cantidades();
        } else {
            alert("No tenemos ese producto")
        }
    }
}