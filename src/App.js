import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Result from "./components/Result";
import Message from  "./components/Message";

function App() {

    const [error,cambiarError] = useState(false)
    const [monto , guardarMonto] = useState(0);
    const [cantidad,guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState('');
    const [tasa , guardarTasa] = useState('')


    let component;

    if (monto === 0 ){
        component = <Message error = {error}/>;
    } else if  ( isNaN(cantidad) || isNaN(plazo) | isNaN(tasa)) {
        guardarMonto(0)
    }
    else{
        component = <Result  cantidad={cantidad} plazo = {plazo} tasa={tasa}
                             monto = {monto}
        />
    }

    return (
      <Fragment>
          <Header titulo="Cotizador de Prestamos"/>
          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <Form
                          cantidad={cantidad} guardarCantidad={guardarCantidad}
                          plazo = {plazo} guardarPlazo = {guardarPlazo}
                          tasa={tasa} guardarTasa={guardarTasa}
                          monto = {monto} guardarMonto={guardarMonto}
                          error = {error} cambiarError = {cambiarError}
                      />
                  </div>
                  <div className="col-6 align-self-center">
                      {component}
                  </div>
              </div>


          </div>
      </Fragment>
    );
}

export default App;
