import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './CourseInfo.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';

function CourseInformation() {

    return (
        <>
            <GenNavbar/>
            <div className='page-wrap'>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Course Information</h4>
                    <form className='form'>
                        <FormElement labelName="Course Code" inputType="Text" text=""/>
                        <FormElement labelName="Course Title" inputType="Text" text=""/>
                        <FormElement labelName="Dept" inputType="Text" text=""/>
                        <GenButton buttonStyle="btn--try">Apply</GenButton>
                        
                           

                    </form>
                </div>
            </div>
        </>
      )
    }
    
    export default CourseInformation    