function actualizarBadge() {
    const badge = document.getElementById("cart-count");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (badge) badge.textContent = carrito.length;
}
document.addEventListener("DOMContentLoaded", actualizarBadge);
