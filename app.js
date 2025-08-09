let listaNombresSorteados =[];


function agregarAmigo(){
    let nombre = String(document.getElementById('amigo').value).trim();
    console.log(nombre);
    
    if (nombre.length== 0){
        alert('El campo está vacío')
        return;
    }

    if (listaNombresSorteados.includes(nombre)) {
        alert('El nombre ya está agregado');
        
    } else {
        listaNombresSorteados.push(nombre);

        let lista = document.getElementById('listaAmigos');
        const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    
}
}



