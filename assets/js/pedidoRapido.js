const cartillaEntera = [{
    id: 10,
    dish_name: "sed",
    description:
      "Los añadidos son para pertubados. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 9.82,
    ingredients: [
      { ingredient_name: "Salsa de Tomate", ingredient_price: 1.0 },
      { ingredient_name: "Queso", ingredient_price: 2.0 },
    ],
  },
  {
    id: 11,
    dish_name: "libero rutrum",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 12.43,
    ingredients: [
      { ingredient_name: "Aceitunas", ingredient_price: 1.2 },
      { ingredient_name: "Albahaca", ingredient_price: 2.5 },
      { ingredient_name: "Tomillo", ingredient_price: 1.8 },
      { ingredient_name: "Orégano", ingredient_price: 2.0 },
      { ingredient_name: "Laurel", ingredient_price: 1.5 },
    ],
  },
  {
    id: 12,
    dish_name: "lectus in",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 53.26,
    ingredients: [
      { ingredient_name: "blue leibel", ingredient_price: 99.0 },
    ],
  },
  {
    id: 13,
    dish_name: "nibh quisque",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 66.47,
    ingredients: [
      { ingredient_name: "Alcohol 70%", ingredient_price: 3.0 },
    ],
  },
  {
    id: 14,
    dish_name: "sapien urna",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    price: 68.16,
    ingredients: [
      { ingredient_name: "Base de vive 300", ingredient_price: 2.0 },
    ],
  },
  {
    id: 15,
    dish_name: "eu",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 72.41,
    ingredients: [
      { ingredient_name: "Sueño de programador", ingredient_price: 3.0 },
    ],
  },
];


$(document).ready(function () {
    // Tu array de objetos
    var dishesArray = cartillaEntera;
    // Función para agregar elementos a la tarjeta
    for (var i = 0; i < dishesArray.length; i++) {
      dish = dishesArray[i];
  
      // Crear Elementos para los ingredientes
  
      ingredientes = "";
  
      dish.ingredients.forEach(e => {
        ingredientes += `
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="${e.ingredient_name} + $${e.ingredient_price}"
            data-price="${e.ingredient_price}"
            id="${e.ingredient_name + dish.id}"
          />
          <label class="form-check-label" for="${e.ingredient_name}"
            >${e.ingredient_name} + $${e.ingredient_price}</label
          >
        </div>`;
      });
  
      
  
      // Crear un nuevo elemento de tarjeta para cada objeto en el array
      var newCardElement = `
      <div class="col mb-2">
    
      <div class="card mb-3" style="max-width: 390px">
      <div class="row g-0">
        <img
          src="./assets/img/platos/${dish.id}.jpg"
          class="img-fluid rounded-top w-100 h-100 object-fit-cover card-img-top"
          alt="Card Image"
        />
        <div class="container">
          <div class="card-body w-100">
            <h5 class="card-title">${dish.dish_name}</h5>
            <p class="card-text">
              ${dish.description}
            </p>
            <p class="card-text">
              <small class="text-muted">Price: $${dish.price}</small>
            </p>
  
            <!-- Contenedor flexible para los botones con mayor separación -->
            <div class="d-flex justify-content-between mb-3">
              <!-- Botón para agregar al carrito con mayor margen derecho -->
              <span>
                <button
                  class="btn btn-primary addToCartBtn mr-4"
                  data-dish-id="${dish.id}"
                >
                  Agregar al carrito
                </button>
              </span>
  
              <!-- Botón para mostrar/ocultar detalles con mayor margen izquierdo -->
              <span>
                <button class="btn btn-primary toggleDetailsBtn ml-4">
                  Mostrar Detalles
                </button>
              </span>
            </div>
  
  
            <!-- Contenedor separado para los detalles (inicialmente oculto) -->
            <div class="details-container" style="display: none">
              <div class="card mb-3" style="max-width: 390px">
                <div class="row g-0">
                  <div class="col">
                    <div class="card-body">
                      <!-- Formulario con checkboxes y campo de texto -->
                      <form class="ingredientForm">
                        <div class="mb-3">
                          <label class="form-label">Ingredientes:</label>
                          ${ingredientes}                   
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
      $(".modal-body").append(newCardElement);
    }
  
    // Objeto para almacenar datos del carrito
    var cardDataObject = {};
  
    // Evento de clic para añadir al carrito
    $(document).on("click", ".addToCartBtn", function () {
      // Obtener datos específicos del elemento clicado
      var dishId = $(this).data("dish-id");
      var dishName = $(this).closest(".card-body").find(".card-title").text();
    
      // Obtener el precio de la estructura "$x.xx"
      var priceText = $(this).closest(".card-body").find(".text-muted").text();
      var dishPrice = parseFloat(priceText.replace("Price: $", ""));
    
      // Obtener datos del formulario
      var formData = $(this).closest(".card-body").find(".ingredientForm").serializeArray();
    
      // Construir un identificador único para esta variante del plato
      var variantId = dishId + "-" + formData.map(item => item.value).join("-");
    
      // Crear un objeto de plato
      var dishObject = {
        dishId: dishId,
        dishName: dishName,
        dishPrice: dishPrice,
        ingredients: formData, // Almacenar ingredientes seleccionados
        additionalNotes: formData.additionalNotes, // Almacenar notas adicionales
        quantity: 1,
      };
    
      // Obtener el carrito actual del Local Storage
      var cart = getCart();
    
      // Verificar si ya existe esta variante en el carrito
      if (cart[variantId]) {
        // Actualizar la cantidad si ya existe
        cart[variantId].quantity += 1;
      } else {
        // Agregar la nueva variante al carrito
        cart[variantId] = dishObject;
      }
    
      // Actualizar el carrito en el Local Storage
      updateCart(cart);
    });
  
    // Evento de clic para mostrar/ocultar detalles
    $(document).on("click", ".toggleDetailsBtn", function () {
      var detailsContainer = $(this)
        .closest(".card-body")
        .find(".details-container");
      detailsContainer.slideToggle();
    });

    $(document).on("click", ".comprar", function () {
      localStorage.setItem("compra", JSON.stringify(generateInvoiceData(getCart())));
      $(location).attr('href',"espera.html");
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
    
        var totalPrice = dish.quantity * (dish.dishPrice + additionalPrice);
    
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


  });
  
  function updateCart(cart) {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }
  
  // Función para obtener el carrito del Local Storage
  function getCart() {
    return JSON.parse(localStorage.getItem("carrito")) || {};
  }
  
  
  
  // Función para agregar un plato al carrito en el Local Storage
  function addToCart(dishId, quantity, dishName, dishPrice, formData) {
    // Obtener datos actuales del carrito del Local Storage
    let cart = JSON.parse(localStorage.getItem("carrito")) || {};
  
    // Verificar si el plato ya está en el carrito
    if (cart[dishId]) {
      // Actualizar la cantidad si ya existe
      cart[dishId].quantity += quantity;
    } else {
      // Agregar el nuevo plato al carrito
      cart[dishId] = {
        dishId: dishId,
        quantity: quantity,
        dishName: dishName,
        dishPrice: dishPrice,
        formData: formData,
      };
    }
  
    // Actualizar el carrito en el Local Storage
    localStorage.setItem("carrito", JSON.stringify(cart));
  }
  
  // Función para obtener el carrito del Local Storage
  function getCart() {
    return JSON.parse(localStorage.getItem("carrito")) || {};
  }
  
  // Función para actualizar la cantidad de un plato en el carrito
  function updateQuantity(dishId, newQuantity) {
    // Obtener datos actuales del carrito del Local Storage
    let cart = JSON.parse(localStorage.getItem("carrito")) || {};
  
    // Verificar si el plato está en el carrito
    if (cart[dishId]) {
      // Actualizar la cantidad
      cart[dishId].quantity = newQuantity;
  
      // Actualizar el carrito en el Local Storage
      localStorage.setItem("carrito", JSON.stringify(cart));
    }
  }
  
  // Función para limpiar completamente el carrito
  function clearCart() {
    // Limpiar el carrito en el Local Storage
    localStorage.removeItem("carrito");
  }