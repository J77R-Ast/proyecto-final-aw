let contenedor = document.getElementById("contenedorJuegos");

async function cargarJuegos() {
    const res = await fetch("https://www.freetogame.com/api/games");
    const data = await res.json();
    mostrarJuegos(data.slice(0, 20));
}

function mostrarJuegos(lista) {
    let html = "";

    lista.forEach(juego => {
        let precio = generarPrecio();

        html += `
        <div class="col-md-4">
            <div class="card mb-3 h-100">
                <img src="${juego.thumbnail}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${juego.title}</h5>
                    <p class="card-text">${juego.short_description.substring(0, 80)}...</p>
                    <p class="fw-bold">$${precio}</p>
                    <button class="btn btn-primary w-100" onclick='agregarCarrito(${JSON.stringify(juego)}, ${precio})'>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>`;
    });

    contenedor.innerHTML = html;
}

function generarPrecio() {
    return Math.floor(Math.random() * 50) + 10;
}

function agregarCarrito(juego, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        id: juego.id,
        titulo: juego.title,
        precio: precio
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado");
}

cargarJuegos();
