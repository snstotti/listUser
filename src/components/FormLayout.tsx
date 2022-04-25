import React from "react";
import { useParams } from "react-router";
// import { useParams } from "react-router-dom";

import '../styles/formLayout.scss';

export interface FormProps {
    title?: string
    type?: string
    value?: string | number
    selector?: string 
    name: string
    flag: boolean
    change: (e: React.ChangeEvent<HTMLInputElement>, id: number)=>void
  }

const FormLayout = ({ flag, name,title,type,value,change}:FormProps) => {

    let isInvalid = !value ? " is-invalid" : ""

    const  {number} = useParams<{ number: string }>();

   
    

    return <div className="form">
        <div className="form__title">{title}</div>
        {type ? <input 
                    name={name} 
                    onChange={(e)=>change(e,+number)} 
                    className={!flag ? "form__input-readonly " : "form__input-active" + isInvalid }
                    readOnly={!flag}
                    type={type}
                    value={value}/> : 
        <textarea className="form__textarea"></textarea>}
        
    </div>
    
}

export default FormLayout;