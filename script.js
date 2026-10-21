function cambiarEstado() {
  const bio = document.getElementById('bio');
  bio.innerText = "Despliegue exitoso realizado el: " + new Date().toLocaleTimeString() + "!";
}