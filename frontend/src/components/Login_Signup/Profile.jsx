import React from 'react'
import {  Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/login.png'
import GenNavbar from '../Navigation_Bar/GenNavbar';
import './Login.css'
import { Navigate } from 'react-router-dom'



 const Profile = () => {
  

   return (
    <>
  
      <title>Profile page</title>
          <head></head>
             <body>
                 <div>
                 <GenNavbar/>
                 
                   <div 
                   className="container my-4 mx-5 " 
                   style={{display: 'flex', 
                    justifyContent:'center', 
                    alignItems:'center'}}>
        
                   <div className='col-lg-7 px-5 pt-5'> 
                  <div class="text-center">
                  <img 
                  className='icon-image' 
                  src={loginImg} 
                  alt='icon'
                 />
                 </div>
                 <h3 className='header'>
                     User Profile
                      </h3> 
                     <Form>
                     
                     <input 
                     type='Name' 
                     placeholder= 'Name'
                     className='form-control my-3 p-3'>
                       </input> 

                       <input 
                     type='Dept' 
                     placeholder= 'Dept'
                     className='form-control my-3 p-3'>
                       </input>    
                    
                     <input 
                     type='Reg-No' 
                     placeholder= 'Reg-No' 
                     className='form-control my-3 p-3'>
                       </input> 

                       <input 
                     type='Session' 
                     placeholder= 'Session'
                     className='form-control my-3 p-3'>
                       </input>  

                        <input 
                     type='Email-address' 
                     placeholder= 'Email-address' 
                     className='form-control my-3 p-3'>
                       </input>  
                    
                     <button 
                     type='button' 
                     className='login mt-3 mb-5'
                     >
                       Edit Profile 
                       </button> 
                     
               </Form> 

           </div>
          </div> 
       </div> 
      </body> 
 
     </> 
   )
 }

export default Profile


