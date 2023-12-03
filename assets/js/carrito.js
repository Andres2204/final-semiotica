$(document).ready(function () {
    // Tu array de objetos
    var dishesArray = JSON.parse(localStorage.getItem("carrito"));
  
    if (dishesArray == null) return;

    // Función para agregar elementos a la tarjeta
    for (var i = 0; i < dishesArray.length; i++) {
      dish = dishesArray[i];
      
      insertarTablaCarrito(dish)
 
    }
});

function insertarTablaCarrito(dish) {

    $("#productosCarrito").append(`
        <div class="card m-3" style="max-width: 30vw;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="./assets/img/${
                dish.id
              }.jpg" class="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="imagen${
      dish.id
    }" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${dish.dish_name}</h5>
                <p class="card-text desc">${dish.description}</p>
                <p class="card-text">
                  <small class="text-muted">Price: $${dish.price.toFixed(
                    2
                  )}</small>
                </p>
                <button class="btn btn-danger añadirCarrito" data-dish-id="${
                  dish.id
                }">Quitar plato</button>
                <button class="expandirbtn"><i class="fa-solid fa-chevron-up"></i></button>
              </div>
            </div>
          </div>
        </div>
      `);

}