import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

    const [cantidad,guardarCantidad] = useState(0)

    return (
      <Fragment>
          <Header titulo="Cotizador de Prestamos"/>
          <div className="container">
              <Form cantidad={cantidad} guardarCantidad={guardarCantidad}/>
          </div>
      </Fragment>
    );
}

export default App;
