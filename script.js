function mostrarMensajeEspecial(mensaje) {
  const mensajeDiv = document.createElement('div');
  mensajeDiv.className = 'mensaje-especial';
  mensajeDiv.innerText = mensaje;
  document.body.appendChild(mensajeDiv);

  for (let i = 0; i < 20; i++) {
    const corazon = document.createElement('div');
    corazon.className = 'corazon-animado';
    corazon.textContent = '💖';
    
    const offsetX = (Math.random() - 0.5) * 300; 
    const offsetY = (Math.random() - 0.5) * 100; 
    const mensajeRect = mensajeDiv.getBoundingClientRect();

    corazon.style.left = `${mensajeRect.left + mensajeRect.width / 2 + offsetX}px`;
    corazon.style.top = `${mensajeRect.top + mensajeRect.height / 2 + offsetY}px`;

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 4000);
  }

  setTimeout(() => {
    mensajeDiv.classList.add('ocultar');
    setTimeout(() => mensajeDiv.remove(), 1000);
  }, 3500);
}
