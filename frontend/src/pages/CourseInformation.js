import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './CourseInfo.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CourseInformation() {

    const[show, setShow]= useState(false)
    const[move, setMove]= useState(true)
    const[btn2, setBtn2]= useState(false)
    const[show2, setShow2] = useState(false)
    const Toast = ()=>{
        toast.error("Data Doesn't Exist!",{
            position:"bottom-right"
        }); 
    }

    return (
        <>
            <GenNavbar/>
            <div className='page-wrap'>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Course Information</h4>
                    <form className='form'>
                        <FormElement labelName="Course Code" inputType="Text" text=""/>
                        {/* <FormElement labelName="Course Title" inputType="Text" text=""/> */}
                        <FormElement labelName="Dept" inputType="Text" text=""/>
                        

                    {show &&  
                     <div>
                     <h5 className='design'>Course Title</h5> 
                     <input 
                     type='Title' 
                     labelName="Course-Title"
                     placeholder= 'Database'
                     className='design'
                     >
                       </input> </div>}

                    {show &&  
                     <div>
                     <h5 className='design'>Course Teacher</h5> 
                     <input 
                     type='Teacher' 
                     labelName="Course-Teacher"
                     placeholder= 'Mridul Sir'
                     className='design'
                     >
                       </input> </div>}   

                    {show &&  
                     <div>
                     <h5 className='design'>Room</h5> 
                     <input 
                     type='room' 
                     labelName="Room"
                     placeholder= 'Gallary-2, IICT'
                     className='design'
                     >
                       </input> </div>}

                       {move &&  <GenButton 
                        buttonStyle="btn--try"
                        onClick={()=>{setMove(!move); setShow(!show); setBtn2(!btn2);}}
                        >Apply</GenButton>}

                        {btn2 &&  <GenButton 
                        buttonStyle="btn--try"
                        onClick={()=>{setShow(!show); Toast();}}>
                            Apply</GenButton> }
                       
                      
                        {/* <GenButton buttonStyle="btn--try"
                        onClick={Toast}
                        >
                        Apply</GenButton> */}
                        <ToastContainer />
                        
                           

                    </form>
                </div>
            </div>
        </>
      )
    }
    
    export default CourseInformation    