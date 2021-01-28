import React from 'react';

const Result = ({total, cantidad, plazo}) =>(
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es de: $ {cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Con un pago mensual de: $ {(cantidad / plazo).toFixed(2)}</p>
            <p>Total a pagar: $ {(total).toFixed(2)}</p>
        </div>
    )


export default Result;
