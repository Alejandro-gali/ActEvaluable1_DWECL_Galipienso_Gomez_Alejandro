// 9. Calcular el IVA del 21 % sobre el precio después del descuento.
function calculaIva(importe) { // Se le pasa por parámetro el importeDescontado
    if (!isNaN(importe)) {
        const precioIva = importe * 1.21;
        console.log(`El precio descontado más el IVA es ${precioIva}`);
        return precioIva;
    } else {
        console.error("El importe tiene que ser un número.");
    }
}

// 10. Al finalizar debe preguntar si se desea realizar otra operación. Si se indica que si, volver a realizar todo, sino terminar y salir.
// 11. Una vez hayamos terminado y salido, debe mostrar un último mensaje por consola indicando el número de operaciones realizadas,
// el gasto total realizado, el gasto medio, el mayor y el menor.
function operaciones() {
    let confirmacion = window.confirm("¿Quiere realizar una/otra operación?");
    let contadorOperaciones = 0;
    let gastoTotal += acumulaGastos;
    let gastoMedio = 0;
    let gastoMayor = 0;
    let gastoMenor = 0;

    do {
        // 1. Pedir al usuario el precio del producto
        const precioProducto = parseFloat(window.prompt("Introduzca el precio del producto: "));

        // 2. Pedir la cantidad de unidades
        const cantidadUds = parseInt(window.prompt("Introduzca la cantidad de unidades: "));

        // 3. Calcular el importe de la compra
        let importe = 0;
        if (!isNaN(precioProducto) && !isNaN(cantidadUds)) {
            importe = precioProducto * cantidadUds;
            console.log(`El importe es ${precioProducto * cantidadUds}`);
        } else {
            console.error("Algún valor no es un número.");
        }

        // 4. Aplicar un descuento según el importe:
        // 5. Menos de 50€ -> Sin descuento
        // 6. Entre 50€ y 99.99€ -> 5 %
        // 7. Entre 100€ y 199,9€ -> 10 %
        // 8. 200€ o más -> 15 %
        let importeDescontado = 0;

        if (importe < 50 && importe > 0) {
            importeDescontado = importe;
        } else if (importe >= 50 && importe < 100) {
            importeDescontado = importe * 0.95;
        } else if (importe >= 100 && importe < 200) {
            importeDescontado = importe * 0.90;
        } else if (importe >= 200) {
            importeDescontado = importe * 0.85;
        } else {
            console.error("El valor del precio tiene que ser mayor a 0.");
        }
        console.log(`El precio tras el descuento es ${importeDescontado}`);


        calculaIva(importeDescontado); // Llamamos a la función de calcular IVA


        contadorOperaciones++;
        let acumulaGastos = calculaIva(importeDescontado);

    } while (confirmacion == true);

    console.log("El número de operaciones realizadas ha sido: " + contadorOperaciones  + ".\n");
}

operaciones();