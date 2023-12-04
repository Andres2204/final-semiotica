$(document).ready(function () {
  // Tu array de objetos
  var dishesArray = getCart();
  console.log(dishesArray);

  Object.entries(dishesArray).forEach(([key, value]) => {
    let dish = value;
    console.log(dish);
    ingredientes = "";

    let additionalPrice = 0;

    dish.ingredients.forEach((e) => {
      if (e.name != "" && e.name != "additionalNotes") {

        additionalPrice += parseFloat( e.name.split("$")[1] );
        console.log(additionalPrice);
       
        ingredientes += `
        <div class="form-check">
        <label class="form-check-label" for="${e.name}"
        >${e.name}</label
        >
        </div>`;
      }
    });

    // Crear un nuevo elemento de tarjeta para cada objeto en el array
    var newCardElement = `
    <div class="col mb-2">
    
    <div class="card mb-3" style="max-width: 390px">
    <div class="row g-0">
      <img
        src="./assets/img/platos/${dish.dishId}.jpg"
        class="img-fluid rounded w-100 h-100 object-fit-cover card-img-top"
        alt="Card Image"
      />
      <div class="container">
        <div class="card-body w-100">
        <h5 class="card-title">${dish.dishName}</h5>
          <p class="card-text">
            ${dish.description}
          </p>
          <p class="card-text">
            <small class="text-muted">Price: $${dish.dishPrice}</small>
          </p>
          
          <!-- Contenedor flexible para los botones con mayor separación -->
          <div class="d-flex justify-content-between mb-3">
            <!-- Botón para agregar al carrito con mayor margen derecho -->
            <span>
              <button
                class="btn btn-primary addToCartBtn mr-4"
                data-dish-id="${dish.dishId}"
              >
                ----
              </button>
            </span>

            <!-- Botón para mostrar/ocultar detalles con mayor margen izquierdo -->
            <span>
            <button class="btn btn-danger eliminarCarrito" data-dish-id="${key}">
            Eliminar del carrito
          </button>
            </span>
          </div>


          <!-- Contenedor separado para los detalles (inicialmente oculto) -->
          <div class="details-container" style="">
            <div class="card mb-3" style="max-width: 390px">
              <div class="row g-0">
                <div class="col">
                  <div class="card-body">
                    <!-- Formulario con checkboxes y campo de texto -->
                    <form class="ingredientForm">
                    <div class="mb-3">
                        <label class="form-label">${ingredientes ? "Ingredientes:":""}</label>
                        ${ingredientes}  
                        <label class="form-label">Precio Adicional: ${additionalPrice}</label>
                        <!-- Agrega más checkboxes según sea necesario -->
                        </div>
                        
                        <div class="mb-3">
                        <label for="additionalNotes" class="form-label"
                        >Notas adicionales:</label
                        >
                        <textarea
                          class="form-control"
                          id="additionalNotes"
                          name="additionalNotes"
                          rows="3"
                          readonly
                          value="${dish.additionalNotes}"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Fin del contenedor de detalles -->
        </div>
      </div>
    </div>
  </div>

    </div
    `;

    // Agregar el nuevo elemento de tarjeta al contenedor existente
    $("#productosCarrito").append(newCardElement);
  });

  $(document).on("click", ".eliminarCarrito", function () {
    // Obtener el ID del plato desde el atributo de datos del botón
    var dishId = $(this).data("dish-id");
    console.log(dishId);


    // Eliminar el plato del carrito
    removeFromCart(dishId);

    location.reload(); // Ejemplo: recargar la página
  });


  console.log(generateInvoiceData(getCart()))

});

function generateInvoiceData(cart) {
  // Array para almacenar los datos de la factura
  var invoiceData = [];

  // Recorrer el carrito
  Object.entries(cart).forEach(([key, value]) => {
    let dish = value;

    // Calcular el precio total teniendo en cuenta la cantidad
    
    // Calcular el precio adicional de los ingredientes
    var additionalPrice = 0;
    var ingredientes = [];
    
    dish.ingredients.forEach((e) => {
      if (e.name !== "" && e.name !== "additionalNotes") {
        additionalPrice += parseFloat(e.name.split("$")[1]);
        ingredientes.push(e.name);
      }
    });

    var totalPrice = dish.quantity * (additionalPrice);

    // Crear un objeto con la información de la factura
    var invoiceItem = {
      dishId: dish.dishId,
      dishName: dish.dishName,
      quantity: dish.quantity,
      unitPrice: dish.dishPrice,
      totalPrice: totalPrice,
      ingredients: ingredientes,
      additionalPrice: additionalPrice,
      additionalNotes: dish.additionalNotes || "",
    };

    // Agregar el objeto al array de datos de la factura
    invoiceData.push(invoiceItem);
  });

  return invoiceData;
}



// Función para obtener el carrito del Local Storage
function getCart() {
  return JSON.parse(localStorage.getItem("carrito")) || {};
}

// Función para actualizar el carrito en el Local Storage
function updateCart(cart) {
  localStorage.setItem("carrito", JSON.stringify(cart));
}

// Función para agregar un plato al carrito
function addToCart(dishId, dishName, dishPrice, ingredients, additionalNotes) {
  // Obtener datos actuales del carrito del Local Storage
  var cart = getCart();

  // Crear un identificador único para esta variante del plato
  var variantId =
    dishId + "-" + ingredients.map((item) => item.value).join("-");

  // Verificar si ya existe esta variante en el carrito
  if (cart[variantId]) {
    // Actualizar la cantidad si ya existe
    cart[variantId].quantity += 1;
  } else {
    // Agregar la nueva variante al carrito
    cart[variantId] = {
      dishId: dishId,
      dishName: dishName,
      dishPrice: dishPrice,
      ingredients: ingredients,
      additionalNotes: additionalNotes,
      quantity: 1,
    };
  }

  // Actualizar el carrito en el Local Storage
  updateCart(cart);
}

// Función para actualizar la cantidad de un plato en el carrito
function updateQuantity(variantId, newQuantity) {
  // Obtener datos actuales del carrito del Local Storage
  var cart = getCart();

  // Verificar si la variante está en el carrito
  if (cart[variantId]) {
    // Actualizar la cantidad
    cart[variantId].quantity = newQuantity;

    // Actualizar el carrito en el Local Storage
    updateCart(cart);
  }
}

// Función para quitar un plato del carrito
function removeFromCart(variantId) {
  // Obtener datos actuales del carrito del Local Storage
  var cart = getCart();

  // Verificar si la variante está en el carrito
  if (cart[variantId]) {
    // Eliminar la variante del carrito
    delete cart[variantId];

    // Actualizar el carrito en el Local Storage
    updateCart(cart);
  }
}

// Función para limpiar completamente el carrito
function clearCart() {
  // Limpiar el carrito en el Local Storage
  localStorage.removeItem("carrito");
}

function tema() {
  console.log('entra')
  let actual = localStorage.getItem('darkmode')
  var elementoConTema = document.getElementById("elementoConTema");
  elementoConTema.setAttribute("data-bs-theme", actual);
}
