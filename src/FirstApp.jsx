// import { Fragment } from 'react';
// ARROW FUNCTION
// export const FirstApp = () => (<h1> Hugo Miralrio </h1>);
import PropTypes from 'prop-types'

const getMessage = () => {
    return 'Bye';
} 

const newMessage = {
    message: 'Hola',
    tittle: 'Me llamo Hugo'
};

export const FirstApp = ( {
    tittle,
    subtitle = 'Cell sintio el verdadero terror.', 
    numeros

    } ) => {

    if(!tittle){
        throw new Error('El titulo no se ha recibido.');
    }

    return (
        <>
            <h1> { tittle } </h1>
            <h2> {subtitle} </h2>
            {/*JSON.stringify(newMessage.message)*/}
            { /* getMessage() */}
            <h3>REACT APP</h3>
            <h3> {numeros+1} </h3>
        </>
    )
};

FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    tittle: 'No hay titulo.',
    subtitle: 'No hay subtitulo'
}


