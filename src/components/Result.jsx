import React from 'react';


const Result = (props) => {
    const {cantidad, plazo , tasa, monto} = props ;
    return (
            <div className="result ">
                <p> Cantidad : {cantidad} soles</p>
                <p> Tasa : {tasa } %</p>
                <p> Plazo a pagar : {plazo } meses</p>
                <p>Pago mensual : { (monto/plazo).toFixed(2)} soles </p>
                <p>Pago total : {monto} soles</p>
            </div>
    )


}

export default Result;