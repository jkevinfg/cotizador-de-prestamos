import React from 'react';

const Form = (props) => {

    const {cantidad,guardarCantidad} = props;

    const cambiarCantidad = (event) => {
        guardarCantidad(parseInt(event.target.value))
    }

    return(
        <form action="">
            {cantidad}
            <div className="mb-5">
                <label className="form-label">
                    Cantidad de Prestamo
                </label>
                <input type="number"
                placeholder="Ejemplo : 3000"
                       className="form-control"
                       onChange = {cambiarCantidad}
                />
            </div>
            <div className="mb-5">
                <label className="form-label">
                   Plazo para pagar
                </label>
                <select className="form-select">
                    <option value="">Seleccionar</option>
                    <option value="3">3 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                </select>
            </div>
            <div className="d-grid gap-2">
                <input className="btn btn-primary"
                    type="button"
                       value="Calcular"
                />
            </div>
        </form>
    );
}

export default Form;