import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './TeacherInfo.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';

function TeacherInformation() {

    const[show, setShow]= useState(false)
    const[move, setMove]= useState(true)
    const[btn2, setBtn2]= useState(false)
    const[show2, setShow2] = useState(false)
      

    return (
        <>
            <GenNavbar/>
            <div className='page-wrap'>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Teacher's Information</h4>
                    <form className='form'>
                        <FormElement labelName="Teacher's E-mail" inputType="Text" text=""/>
                        <FormElement labelName="Teacher's Name" inputType="Text" text=""/>
                        <FormElement labelName="Teacher's Dept" inputType="Text" text=""/>
                        <FormElement labelName="Time" inputType="number" placeholder= 'CSE101' text=""/>
                      
                     {show &&  
                     <div>
                     <h5 className='design'>Course Code</h5> 
                     <input 
                     type='course' 
                     labelName="Course"
                     placeholder= 'CSE101'
                     className='design'
                     >
                       </input> </div>}
                      

                     {show &&   
                     <div>
                     <h5 className='design'>Room</h5>  
                    <input 
                     type='Room' 
                     labelName="room"
                     placeholder= '301'
                     className='design'
                     >
                       </input> </div>}

                       {show &&   
                     <div>
                     <h5 className='design'>Building</h5>  
                    <input 
                     type='Room' 
                     labelName="room"
                     placeholder= 'IICT'
                     className='design'
                     >
                       </input> </div>}   

                       {show2 &&  
                       <div>
                       <h5 className='design'>Course</h5> 
                       <input 
                     type='course' 
                     labelName="Course"
                     placeholder= '-'
                     className='design'
                     >
                       </input> </div>}

                       {show2 &&   
                       <div>
                       <h5 className='design'>Room</h5>  
                       <input 
                     type='Room' 
                     labelName="room"
                     placeholder= "-"
                     className='design'
                     >
                       </input> </div>}

                       {show2 &&   
                       <div>
                       <h5 className='design'>Building</h5>  
                       <input 
                     type='Room' 
                     labelName="room"
                     placeholder= "-"
                     className='design'
                     >
                       </input> </div>}  

    
                      {move &&  <GenButton 
                        buttonStyle="btn--try"
                        onClick={()=>{setMove(!move); setShow(!show); setBtn2(!btn2);}}
                        >Apply</GenButton>}
                       {btn2 &&  <GenButton 
                        buttonStyle="btn--try"
                        onClick={()=>{setShow(!show); setShow2(!show2);}}>
                            Apply</GenButton> }
                       
                   
                        
                           
                             
                    </form>
                </div>
            </div>
        </>
      )
    }
    
    export default TeacherInformation    