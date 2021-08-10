import React, { useState } from 'react';

export const Textarea = ({ 
    label,
    name, 
    state, 
    setValue,
    disabled }) => {

    const [error, setError] = useState( null );

    const handleTextareaChange = (e) => {
        
        setValue({
            ...state,
            value: e.target.value,
        })
    }

    const handleTextareaOnKeyUp = () => {

        if ( state.value.length < 1 ) {
            setValue({
                ...state,
                isValid: false,
            })
            setError( 'El mensaje es muy corto.');
        } else {
            setValue({
                ...state,
                isValid: true,
            })
            setError( '');
        }
    }

    const handleTextareaOnBlur = () => {
        if ( state.value.length < 1 ) {
            setValue({
                ...state,
                isValid: false,
            })
            setError( 'El mensaje es muy corto.');
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
            <textarea 
                name={ name } 
                onChange={ handleTextareaChange }
                onKeyUp={ handleTextareaOnKeyUp }
                onBlur={ handleTextareaOnBlur }
                disabled={ disabled }
                className={ 
                    'contactForm__textarea ' 
                    + 
                    ( 
                        state.isValid === true
                            ? 'contactForm__textareaCheck' 
                            : 
                                ( 
                                    state.isValid === false 
                                        ? 'contactForm__textareaError'
                                        : ''
                                )
                    )
                }
            >
            </textarea>
            <small className="contactForm__error"> { error } </small>
        </div>
    )
}