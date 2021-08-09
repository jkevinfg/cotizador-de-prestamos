import React from 'react';
import calcularMonto from "../Helpers";

const Form = (props) => {
    const {cantidad,guardarCantidad,
            plazo,guardarPlazo,
            tasa,guardarTasa,
             guardarMonto,
            cambiarError,
            } = props;

    const cambiarCantidad = (event) => {
        guardarCantidad(parseInt(event.target.value))
    }

    const cambiarPlazo = (event) => {
        guardarPlazo(parseInt(event.target.value))
    }

    const cambiarTasa = (event) => {
        guardarTasa(parseInt(event.target.value))

    }

    const enviarFormulario  = (event) => {
        event.preventDefault();
        if(cantidad === 0 || plazo === ''|| tasa === '' || isNaN(cantidad) || isNaN(plazo) || isNaN(tasa)){
            guardarMonto(0)
            return cambiarError(true);
        }
        //eliminar el error previo
        cambiarError(false);


        const monto = calcularMonto(cantidad,plazo,tasa);
        guardarMonto(monto);



    };

    return(
        <form action="" onSubmit={enviarFormulario}>
                    <div className="mb-5">
                        <label className="form-label">
                            Cantidad de Prestamo (soles)
                        </label>
                        <input type="number"
                               placeholder="Ejemplo : 3000"
                               className="form-control"
                               onChange = {cambiarCantidad}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="form-label">
                            Tasa mensual
                        </label>
                        <select className="form-select" onChange = {cambiarTasa}>
                            <option value="">Seleccionar</option>
                            <option value="2">2%</option>
                            <option value="5">5%</option>
                            <option value="8">8%</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="form-label">
                            Plazo para pagar
                        </label>
                        <select className="form-select" onChange={cambiarPlazo}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <input className="btn btn-primary btn-lg"
                               type="submit"
                               value="Calcular"
                        />
                    </div>

        </form>
    );
}

export default Form;