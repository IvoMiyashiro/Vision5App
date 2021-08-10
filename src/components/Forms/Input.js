import React, { useState } from 'react';

export const Input = ({ 
    label,
    type,
    name,
    regEx,
    state,
    setValue,
    disabled }) => {

    const [error, setError] = useState( null );

    const handleInputChange = (e) => {
        
        setValue({
            ...state,
            value: e.target.value,
        })
    }

    const handleInputOnKeyUp = () => {

        if ( regEx ) {
            if ( regEx.test( state.value ) ) {
                setValue({
                    ...state,
                    isValid: true,
                })
                setError( '' );
            } else {
                setValue({
                    ...state,
                    isValid: false,
                })
                if ( name === 'email') {
                    setError( '*El email no es válido.' );
                } else if ( name === 'name' ) {
                    setError( '*El nombre no es válido.' );
                } else if ( name === 'contact' ) {
                    setError('*El número de contacto no es válido.');
                }
            }
        }
    }

    const handleInputOnBlur = () => {

        if ( regEx ) {
            if ( regEx.test( state.value ) ) {
                setValue({
                    ...state,
                    isValid: true,
                })
                setError( '' );
            } else {
                setValue({
                    ...state,
                    isValid: false,
                })
                if ( name === 'email') {
                    setError( '*El email no es válido.' );
                } else if ( name === 'name' ) {
                    setError( '*El nombre no es válido.' );
                } else if ( name === 'contact' ) {
                    setError('*El número de contacto no es válido.');
                }
                
            }
        }
    }

    return (
        <div className="contactForm__inputSection">
            <label 
                htmlFor={ name } 
                className={
                    'contactForm__label '
                    + 
                    ( 
                        state.isValid === true
                            ? 'contactForm__labelCheck' 
                            : 
                                ( 
                                    state.isValid === false 
                                        ? 'contactForm__labelError'
                                        : ''
                                )
                    )
                }
            > 
                { label } 
            </label>
            <input 
                type={ type }
                name={ name } 
                value={ state.value }
                onChange={ handleInputChange }
                onKeyUp={ handleInputOnKeyUp }
                onBlur={ handleInputOnBlur }
                disabled={ disabled }
                className={ 
                    'contactForm__input ' 
                    + 
                    ( 
                        state.isValid === true
                            ? 'contactForm__inputCheck' 
                            : 
                                ( 
                                    state.isValid === false 
                                        ? 'contactForm__inputError'
                                        : ''
                                )
                    )
                }
            />
            <small className="contactForm__error"> { error } </small>
        </div>
    )
}