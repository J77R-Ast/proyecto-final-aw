let tabla = document.getElementById("tablaCarrito");
let totalElem = document.getElementById("totalCompra");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {
    let html = "";
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;

        html += `
        <tr>
            <td>${item.titulo}</td>
            <td>$${item.precio}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">X</button>
            </td>
        </tr>
        `;
    });

    tabla.innerHTML = html;
    totalElem.innerText = total;
}

function eliminar(i) {
    carrito.splice(i, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

mostrarCarrito();
