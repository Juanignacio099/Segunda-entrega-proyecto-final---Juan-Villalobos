
const productos = [
  { nombre: "harina", precio: 50 },
  { nombre: "galletitas", precio: 100 },
  { nombre: "cerveza", precio: 150 },
  { nombre: "leche", precio: 200 },
  { nombre: "gaseosa", precio: 250 },
];

let carrito = [];

let seleccion = prompt("Hola, desea comprar algo? si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor ingresa si o no");
  seleccion = prompt("Hola, desea comprar algo? si o no");
}

if (seleccion == "si") {
  alert("Nuestra lista de productos a continuación");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por visitarnos. Hasta pronto!");
}

while (seleccion != "no") {
  let producto = prompt("Agregá un producto a tu carrito");
  let precio = 0;

  if (
    producto == "harina" ||
    producto == "galletitas" ||
    producto == "cerveza" ||
    producto == "leche" ||
    producto == "gaseosa"
  ) {
    switch (producto) {
      case "harina":
        precio = 50;
        break;
      case "galletitas":
        precio = 100;
        break;
      case "cerveza":
        precio = 150;
        break;
      case "leche":
        precio = 200;
        break;
      case "gaseosa":
        precio = 250;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("No contamos con ese producto");
  }

  seleccion = prompt("Desea seguir comprando?");
  while (seleccion == "no") {
    alert("Gracias por su compra. Hasta pronto.");
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto: ${carritoFinal.producto}, unidades: ${
          carritoFinal.unidades
        }, total a pagar por producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
    })
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: ${total}`)