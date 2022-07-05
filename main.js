alert(`Bienvenido a Sanatorio Córdoba.`)

//El desafio planteado para esta primer entrega es un turnero para un sanatorio. El mismo va asignando un numero de turno a cada nombre que se ingrese.

let dato = 0;
let turnado = prompt(`Ingrese su nombre, por favor. Hoy nos quedan 10 turnos.`);


while (dato < 10) {

    //Si el espacio de nombre es distinto a un valor vacio, comienza el ciclo.
    if (turnado != ""){
    
    //en cada ciclo, se le suma un numero a dato, lo cual genera un aumento en el Nº de turno asignado.
    dato++;
    console.log(`${turnado}, Su turno es el Nº ${dato}. Por favor, espere en la fila. Gracias!`);
    alert(`${turnado}, Su turno es el Nº ${dato}. Por favor, espere en la fila. Gracias!`);
    
    }else{
        //Si el espacio de nombre es un valor vacio, el ciclo arroja la siguiente alerta, deteniendose.
        alert("Ingrese un nombre correcto.");
    }

    // luego de cada ciclo, se resta uno al total de turnos, arrojando en el proximo prompt, la cantidad de turnos pendientes.
    let turnos = 10 - dato;
    turnado = prompt(`Ingrese su nombre, por favor. Hoy nos quedan ${turnos} turnos.`);

}

//Al finalizar el total de turnos, el sistema arrojará este ultimo mensaje.
alert (`No quedan mas turnos en el día de hoy. Muchas gracias.`);
