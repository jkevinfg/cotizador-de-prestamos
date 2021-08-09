import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Result from "./components/Result";
import Message from  "./components/Message";
import Spinner from "./components/Spinner";


function App() {

    const [error,cambiarError] = useState(false)
    const [monto , guardarMonto] = useState(0);
    const [cantidad,guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState('');
    const [tasa , guardarTasa] = useState('')
    const [cargando , guardarCargando] =  useState(false);

    let component;

    if (cargando){
        component = <Spinner />;
    } else if (monto === 0 ){
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
                          guardarCargando = {guardarCargando}
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
