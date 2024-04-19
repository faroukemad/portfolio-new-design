import {React,useRef,useState} from 'react'
import './email.scss'
import {Close} from '@material-ui/icons';
import emailjs from '@emailjs/browser';
import BeatLoader from "react-spinners/BeatLoader";
import { TfiEmail } from "react-icons/tfi";

export default function Email({menuOpen,setMenuOpen,load,setLoad}) {
///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
 // const [error,setError]=useState(false);
 // const [firstName, setFirstName] = useState('');
  //const [lastName, setLastName] = useState('');
  //const [email, setEmail] = useState('');
 // const [message, setMessage] = useState('');

  

 // const handleChange=(val)=>{
  //  if(val.match(/\S+@\S+\.\S+/)){
  //    setError(false);
  //  }else{
   //   setError(true);
   // }
 // }

  const [isDisabled, setDisibility] = useState(true);

  const checkEmail = e => {
    if(e.target.name==='user_email')
    if(setDisibility(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)))){
    console.log('true')}
    else
    console.log('false')
   // (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
  }
  //const regex = /\S+@\S+\.\S+/;


const form =useRef();

const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_m9z0c1n', 'template_didi06q', form.current, 'Im2pGcGqK87J3EOPa')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    setTimeout(()=>{
      setMenuOpen(false);
      alert('message sent');
    },3000);
   
};



const handleClick=()=>{
  setLoad(true);
  setTimeout(()=>{
    setLoad(false);
  },3000);
}

//handleClick(e)=>{
  //handleChange(e.target.value);
  //setEmail(e.target.value);
//}
//

  return (
    <div className={"menu  " +(menuOpen && "active")}>
        <Close className="close" onClick={()=>setMenuOpen(false)} />
        <div className="container" >
            <div className="dv">
                <div className='contact'>Have Some Question?</div>
            </div>
            <div className="dvs">
           <div className="dv1">
             <div >
              <TfiEmail className="image"/> 

             </div>
           </div>
                

            <form className='dv2' ref={form} name='form' onSubmit={sendEmail}>
            <input className='fstName'  name="user_name"type="text" placeholder='First Name' required/>
            <input className='lstName' name="last_name" type="text"  placeholder='Last Name' required/>
            <input className='inEmail' 
            onChange={checkEmail} 
              
              name="user_email"type="text" placeholder='What is your Email?' required/>
              <textarea className='txtMessage'   name="message" placeholder='Your Question..' required></textarea>
             
              <button className='sub' type='submit' disabled={isDisabled} onClick={handleClick} >
                <div className="loader"> 
                    <BeatLoader
                    color={"white"}
                    loading={load}
                    size={20}
                    />
                  </div>
                  <div className={"mess " + (load && "btnDis")}>
                      Send Message
                  </div>
              </button>
                </form>
                </div>
        </div>
        
    
    </div>
  )
}
//