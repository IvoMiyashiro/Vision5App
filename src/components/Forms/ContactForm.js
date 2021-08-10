import React, { useEffect, useState } from 'react';

import { Input } from './Input';
import { Textarea } from './Textarea';

import { Spinner } from '../../components/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const ContactForm = () => {

    const regEx = {
        username: /^[a-zA-Z0-9_-]{4,16}$/,
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        contact: /^\d{7,14}$/
    }

    const [ nombre, setNombre ] = useState({ value: '', isValid: null });
    const [ email, setEmail ] = useState({ value: '', isValid: null });
    const [ contact, setContact ] = useState({ value: '', isValid: null });
    const [ message, setMessage ] = useState({ value: '', isValid: null });

    const [ btnState, setBtnState ] = useState( true );
    const [ formState, setFormState] = useState( false );
    const [ spinnerState, setSpinnerState] = useState( false )
    const [ inputDisabled, setinputDisabled ] = useState( false )

    const handleSubmit = (e) => {

        e.preventDefault();

        setSpinnerState( true );
        setBtnState( true );
        setinputDisabled( true );

        setTimeout( async() => {
            setFormState({
                loadgin: false
            });
            setFormState( true );
        }, 1000);


    }

    useEffect(() => {

        if ( nombre.isValid && email.isValid && contact.isValid && message.isValid ) {
            setBtnState( false );
        } else {
            setBtnState( true );
        }
    },[ nombre.isValid, email.isValid, contact.isValid, message.isValid]);

    return (
        <form className="contactForm" onSubmit={ handleSubmit }>
            <Input 
                label={ 'Nombre*' }
                name={ 'name' }
                type={ 'text' }
                regEx={ regEx.name }
                state={ nombre }
                setValue={ setNombre }
                disabled={ inputDisabled }
                
            />
            <Input 
                label={ 'Correo Electrónico*' }
                name={ 'email' }
                type={ 'email' }
                regEx={ regEx.email }
                state={ email }
                setValue={ setEmail }
                disabled={ inputDisabled }
            />
            <Input 
                label={ 'Número de Teléfono*' }
                name={ 'contact' }
                type={ 'text' }
                regEx={ regEx.contact }
                state={ contact }
                setValue={ setContact }
                disabled={ inputDisabled }
            />
            <Textarea 
                label={ 'Mensaje*' }
                name={ 'message' }
                state={ message }
                setValue={ setMessage }
                disabled={ inputDisabled }
            />
            {
                formState
                    ? 
                        (
                            <button
                                disabled={ true } 
                                className="btnPrimary contactForm__checkBtn"
                            > 
                                Mensaje enviado
                                <FontAwesomeIcon icon={ faCheckCircle } className="contactForm__checkBtnIcon" />
                            </button>
                        )
                    : 
                        (
                            <button
                                className="btnPrimary contactForm__btn"
                                type="submit"
                                disabled={ btnState }
                            >
                                {
                                    spinnerState
                                        ? <Spinner />
                                        : 'Confirmar'
                                }
                            </button>
                        )
            }

        </form>
    )
}
