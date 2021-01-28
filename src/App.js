import React, { useState }from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Result from './Components/Result';
import Messengers from './Components/Messengers';
import Spinner from './Components/Spinner';





function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [spinner, cargarSpinner] = useState(false);




  let componente;

  if(spinner){
    componente = <Spinner/>
  }else if(total === 0){
    //console.log(total);
    componente = <Messengers/>
  }else{
    componente = <Result 
                    total={total}
                    cantidad={cantidad}
                    plazo={plazo}/>
  }


  return (
    <div className="App">
        <Header titulo="Cotizar Prestamo"/>

        <div className="container">
          <Form 
          cantidad={cantidad} 
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          cargarSpinner={cargarSpinner}
          />
        <div className="mensajes">
          {componente}
        </div>
        </div>
        
    </div>
         
  );
}

export default App;
