import React, { useState, Fragment } from 'react';
import {calcularTotal} from '../helpers.js';

const Form = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal,cargarSpinner} = props;

    const [error, verificarError] = useState(false);


    const enviarForm = (e) => {
    e.preventDefault();

    if(cantidad === 0 || plazo === ""){
        //enviar error
        verificarError(true);
        return;
    }
    //resetear error
    verificarError(false);
    cargarSpinner(true);

    setTimeout(() => {
         //enviar cotizacion
        const totalPagar = calcularTotal(cantidad, plazo);
        guardarTotal(totalPagar);

        cargarSpinner(false);
        
    }, 2000);

   

    }


return(

    <Fragment>
        <form onSubmit={enviarForm}>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={ (e) =>guardarCantidad(parseInt(e.target.value))}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={ (e) =>guardarPlazo(e.target.value)}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
        </form>
        {(error) ? <p className="error"> Todos los campos son obligatorios</p> : null}
    </Fragment>  

)
}

export default Form;