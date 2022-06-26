import React from 'react'
import './formElement.css'

function FormElement(props) {

    //default state is 0, invalid 1, valid 2, valid with message 4
    const getClassOnvalidState = () => {
        if(props.validState===0) return "form-control";
        if(props.validState===1) return "form-control-invalid";
        if(props.validState===2) return "form-control-valid";
        if(props.validState===4) return "form-control-valid";
    };

    const getClassnameErrMessage = ()=>{
      if(props.validState===4) return "feedback-message";
      if(props.validState===1) return "feedback-message-invalid";
      else return "valid-feedback";
    };

  return (
    <div className="col-sm-6">
        <label className="form-label">{props.labelName}</label>
        <input type={props.inputType} className={getClassOnvalidState()} onChange = {(e)=>{props.onChangeFunc(e.target.value)}} defaultValue={props.text}/>
        <div className={getClassnameErrMessage()}>
            {props.invalidMessage}
        </div>
    </div>
  )
}

export default FormElement