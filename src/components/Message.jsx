import React from 'react';

const Message = ({error} ) => {
    return (
        <div>
            {
                (error) ?  <p className="error">Todos los campos son obligatorios</p>
                        :  <p className="message"> Agrege los datos para cotizar el prestamo</p>
            }

        </div>
    );

}

export default Message;


