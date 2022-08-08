import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './TeacherInfo.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';

function TeacherInformation() {

    return (
        <>
            <GenNavbar/>
            <div className='page-wrap'>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Teacher's Information</h4>
                    <form className='form'>
                        <FormElement labelName="Teacher's E-mail" inputType="Text" text=""/>
                        {/* <FormElement labelName="Teacher's Name" inputType="Text" text=""/>
                        <FormElement labelName="Teacher's Dept" inputType="Text" text=""/> */}
                        <GenButton buttonStyle="btn--try">Apply</GenButton>
                        
                           
                             
                        {/* </div>  */}
                    </form>
                </div>
            </div>
        </>
      )
    }
    
    export default TeacherInformation    