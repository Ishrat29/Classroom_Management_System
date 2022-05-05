import React from 'react'
import {  Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/Login.png'
import Menu from '../Navigation_Bar/Menu';
import './Login.css'

 const SignUp = () => {
   return (
    <>
  
      <title>Login page</title>
          <head></head>
             <body>
                 <div>
                 <Menu/>
                 
                  
                 
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
                    <h4 className='header'>
                     SignUp for your account
                      </h4> 
                     <Form>
                   
                       <input 
                     type='name' 
                     placeholder= 'Name'
                     className='form-control my-3 p-2'>
                       </input>

                       <input 
                     type='dept' 
                     placeholder= 'Dept'
                     className='form-control my-3 p-2'>
                       </input> 

                       <input 
                     type='Reg-no' 
                     placeholder= 'Reg-No'
                     className='form-control my-3 p-2'>
                       </input> 

                     <input 
                     type='email' 
                     placeholder= 'Email-address'
                     className='form-control my-3 p-2'>
                       </input> 
                     
                     <input 
                     type='password' 
                     placeholder= 'password' 
                     className='form-control my-3 p-2'>
                       </input> 
                    
                     <button 
                     type='button' 
                     className='signup mt-3 mb-5'>
                       SIGN UP
                       </button> 

                       <p 
                style={{color:'#0abde3'}}>
                  Already have an account? Login Now.. 
                    </p>   
                   
               </Form> 

           </div>
          </div> 
       </div> 
      </body> 
 
     </> 
   )
 }

export default SignUp;


