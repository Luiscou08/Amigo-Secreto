// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js

let amigos = []; 

function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo !== '') {
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = '';
  }
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; //

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Necesitas al menos dos amigos para el sorteo.');
    return;
  }

  const resultado = sortear(amigos);
  mostrarResultado(resultado);
}

function sortear(amigos) {
}

function mostrarResultado(resultado) {
  const resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = ''; // Limpiar la lista de resultados

  resultado.forEach(asignacion => {
    const li = document.createElement('li');
    li.textContent = `${asignacion.amigo} le regala a ${asignacion.amigoSecreto}`;
    resultadoLista.appendChild(li);
  });
}
function sortear(amigos) {
    let amigosDisponibles = [...amigos]; // Copia del array para no modificar el original
    let resultado = [];
  
    amigos.forEach(amigo => {
      let amigoSecreto;
      let intentos = 0;
  
      do {
        const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
        amigoSecreto = amigosDisponibles[indiceAleatorio];
        intentos++;
        if(intentos > 100){
          alert("No se pudo realizar el sorteo, intente de nuevo");
          return [];
        }
      } while (amigoSecreto === amigo);
  
      resultado.push({ amigo: amigo, amigoSecreto: amigoSecreto });
      amigosDisponibles = amigosDisponibles.filter(a => a !== amigoSecreto);
    });
  
    return resultado;
  }