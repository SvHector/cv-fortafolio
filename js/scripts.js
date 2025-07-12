document.addEventListener('DOMContentLoaded', () => {
    const proyectos = [
        {
            titulo: "Sistema de Gestión",
            descripcion: "Aplicación web para el control de trámites internos.",
            imagen: "img/proyecto1.jpg"
        },
        {
            titulo: "App de Cancionero",
            descripcion: "Aplicación PWA con Firebase para gestión de letras de canciones.",
            imagen: "img/proyecto2.jpg"
        }
    ];

    const galeria = document.getElementById("proyectosGaleria");
    proyectos.forEach(proy => {
        galeria.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">
                <img src="\${proy.imagen}" class="card-img-top" alt="\${proy.titulo}">
                <div class="card-body">
                    <h5 class="card-title">\${proy.titulo}</h5>
                    <p class="card-text">\${proy.descripcion}</p>
                </div>
            </div>
        </div>`;
    });
});
