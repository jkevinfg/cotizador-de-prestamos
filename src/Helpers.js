
const calcularMonto =  (cantidad,plazo, tasa)  => {
    const interes = cantidad*plazo*tasa/100;
    const monto = cantidad + interes;
    return monto.toFixed(2);
}

export default calcularMonto;