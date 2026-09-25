document.addEventListener("DOMContentLoaded", () => {
  const artistForm = document.getElementById("artistForm");
  const artistList = document.getElementById("artistList");

  let artistas = JSON.parse(localStorage.getItem("artistas")) || [];

  function mostrarArtistas() {
    artistList.innerHTML = "";
    artistas.forEach((artista, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${artista.nombre}</strong> (${artista.genero})<br>
        <a href="${artista.link}" target="_blank">Escuchar música</a><br>
        <em>${artista.mensaje}</em><br>
        <button onclick="eliminarArtista(${index})">Eliminar</button>
      `;
      artistList.appendChild(li);
    });
  }

  artistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevoArtista = {
      nombre: document.getElementById("nombre").value,
      genero: document.getElementById("genero").value,
      link: document.getElementById("link").value,
      mensaje: document.getElementById("mensaje").value
    };
    artistas.push(nuevoArtista);
    localStorage.setItem("artistas", JSON.stringify(artistas));
    artistForm.reset();
    mostrarArtistas();
  });

  window.eliminarArtista = function(index) {
    artistas.splice(index, 1);
    localStorage.setItem("artistas", JSON.stringify(artistas));
    mostrarArtistas();
  };

  mostrarArtistas();
});