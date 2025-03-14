let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados=[];
let numeroMaximo=10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos==1 ? 'vez': 'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } 
    else {
    if(numeroDeUsuario< numeroSecreto){
        asignarTextoElemento('p', 'El numero es mayor')
    }
    else {
        asignarTextoElemento('p', 'El numero es menor')
    }
    intentos++;
    limpiarNumero();
}
    return;
}

function generarNumeroSecreto() {
   let numeroGenerado= Math.floor(Math.random()*10)+1;
    //si el numero generado esta en la lista, haremos una operacion en caso de que no haremos otra´
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if(listaNumeroSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }  
    else{ 
    if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumeroSorteados.push(numeroGenerado)
        return numeroGenerado;
    }}
 
}


function limpiarNumero(){
    document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    intentos=1;
    numeroSecreto=generarNumeroSecreto();
}

function reiniciarJuego(){
    //limpiarCaja
    //indicarMensajeDeIntervaloDeNumeros
    //generarElNumeroALeatorio
    //deshabilitarElBotonDeNuevoJuego
    limpiarNumero();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    
}

condicionesIniciales();