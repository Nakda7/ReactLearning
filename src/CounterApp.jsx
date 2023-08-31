//rafc
import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value )

    const  handleAdd = () => setCounter( (c) => c + 1 )
    const  handleSubstract = () => setCounter( (c) => c -1 )
    const  handleReset = () => setCounter( (c) => value )

    return (
        <>        
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>  +2  </button>
            <button onClick={ handleSubstract }>    -1  </button>
            <button onClick={ handleReset }>    RESET   </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};  