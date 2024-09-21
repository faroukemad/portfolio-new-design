import React, { useState, useRef, useContext } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import emailjs from '@emailjs/browser';
import { AppContext } from '../context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDisabled } from '../../redux/formSlice';

export default function EmailForm() {
    const { setMenuOpen } = useContext(AppContext);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setLoad(true);
        setTimeout(() => {
            setLoad(false);
        }, 3000);
        emailjs.sendForm('service_m9z0c1n', 'template_didi06q', form.current, 'Im2pGcGqK87J3EOPa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        setTimeout(() => {
            setMenuOpen(false);
            alert('message sent');
        }, 3000);

    };
    const [load, setLoad] = useState(false)

    // const [isDisabled, setDisibility] = useState(false);
    const dispatch = useDispatch();
    const isDisabled = useSelector((state) => state.form.isDisabled);


    const checkEmail = (e) => {
        if (e.target.name === 'user_email') {
            const isInvalidEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value);
            dispatch(setIsDisabled(isInvalidEmail)); 
            console.log(isInvalidEmail ? 'true' : 'false');
        }
    };
    return (
        <form className='dv2' ref={form} name='form' onSubmit={sendEmail}>
            <input className='fstName' name="user_name" type="text" placeholder='First Name' required />
            <input className='lstName' name="last_name" type="text" placeholder='Last Name' required />
            <input className='inEmail'
                onChange={checkEmail}

                name="user_email" type="text" placeholder=' Your Email' required />
            <textarea className='txtMessage' name="message" placeholder='Your Question..' required></textarea>

            <button className='sub' type='submit' disabled={isDisabled}  >
                <div className="loader">
                    <BeatLoader
                        color={"white"}
                        loading={load}
                        size={10}
                    />
                </div>
                <div className={"mess " + (load && "btnDis")}>
                    Send Message
                </div>
            </button>
        </form>
    )
}
