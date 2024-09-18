import { React, useContext,  } from 'react'
import './email.scss'
import { Close } from '@material-ui/icons';
import { TfiEmail } from "react-icons/tfi";
import { AppContext } from '../context/AppContext';
import EmailForm from './EmailForm';

export default function Email() {
  
  const {menuOpen,setMenuOpen}=useContext(AppContext);
  
  return (
    <div className={"menu  " + (menuOpen && "active")}>
      <Close className="close" onClick={() => setMenuOpen(false)} />
      <div className="container" >
        <div className="dv">
          <div className='contact'>Have Some Question?</div>
        </div>
        <div className="dvs">
          <div className="dv1">
            <div >
              <TfiEmail className="image" />

            </div>
          </div>


         <EmailForm/>
        </div>
      </div>


    </div>
  )
}
