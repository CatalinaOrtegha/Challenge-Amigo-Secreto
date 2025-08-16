//Lista donde se almacenan los nombres ingresados
let listaNombresSorteados = [];


function agregarAmigo() {
    //Obtiene el valor del input con id "amigo" y elimina espacios en blanco al inicio y final
    let nombre = String(document.getElementById('amigo').value).trim();
    //console.log(nombre); muestra en consola el nombre capturado (para depuración)

    //Valida si el campo está vacío, muestra un aviso y detiene la ejecución
    if (nombre.length == 0) {
        alert('El campo está vacío')
        return;
    }

    //Valida si el nombre ya fue ingresado antes, muestra un aviso y no lo agrega
    if (listaNombresSorteados.includes(nombre)) {
        alert('El nombre ya está agregado');
    //Si el nombre es valido y no fue ingresado antes, lo agrega a la lista
    } else {
        listaNombresSorteados.push(nombre);
        //Obtiene el elemento UL con ID "listaAmigos"
        let lista = document.getElementById('listaAmigos');
        //Crea un nuevo elemento de lista (li)
        const li = document.createElement("li");
        //Asigna el nombre como texto del <li>
        li.textContent = nombre;
        //Agrega el <li> a la lista UL
        lista.appendChild(li);
        //Limpia al input para que el usuario pueda ingresar otro nombre
        document.getElementById('amigo').value = '';
    }
}

function sortearAmigo() {
    //Valida si no hay nombres en la lista, muestra un aviso y detiene la ejecución
    if (listaNombresSorteados.length == 0) {
        alert('No hay amigos para sortear')
        return;
    }

    //Genera un número aleatorio entre 0 y la longitud de la lista -1
    let indice = Math.floor(Math.random() * listaNombresSorteados.length);
    //console.log(indice)  Depuración: muestra el índice sorteado
    
    //Obtiene el nombre correspondiente al indice sorteado
    let amigoSecreto = listaNombresSorteados.at(indice)
    //console.log(amigoSecreto) Depuración: muestra el nombre sorteado

    //Muestra el resultado en el elemento con id "resultado"
    document.getElementById('resultado').innerHTML = amigoSecreto;

}

