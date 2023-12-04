$(document).ready(function () {
  // Función para llenar dinámicamente el resumen del carrito
  function fillCartSummary(cart) {
    s = "";
    cart.forEach((e) => {
      console.log(e);
      s += `
            <li>${e.dishName} x ${e.quantity} - $${e.totalPrice}</li>
            `;
    });

    
    $("#ul").html(s);
    $("#nProductos").text("Total de Productos: " + cart.length)
    $("#total").text("Precio Total: "+calculateTotal(cart))
  }

  // Función para calcular el total del carrito
  function calculateTotal(cart) {
    let total = 0;

    cart.forEach(e => {
        total += parseFloat( e.totalPrice );
    })

    return total.toFixed(2);
  }

  // Llenar el resumen del carrito
  fillCartSummary(JSON.parse(localStorage.getItem("compra")));

  // Manejar el envío del formulario de pago
  $("#paymentForm").submit(function (event) {
    event.preventDefault();

    // Aquí puedes agregar lógica para procesar el pago, como enviar los datos a un servidor, etc.
    // También puedes actualizar la interfaz de usuario según el resultado del pago

    alert("¡Pago procesado con éxito! Saliendo...");
    localStorage.clear();
    window.location.href = "index.html"

  });
});
