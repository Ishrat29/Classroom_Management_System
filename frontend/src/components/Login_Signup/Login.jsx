import React from 'react'
import {  Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/Login.png'
import Menu from '../Navigation_Bar/Menu';
import SignUp from './SignUp';
import './Login.css'


 const Login = () => {

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
                      Login to your account
                      </h4> 
                     <Form>
                     
                     <input 
                     type='email' 
                     placeholder= 'Email-address'
                     className='form-control my-3 p-3'>
                       </input> 
                    
                     <input 
                     type='password' 
                     placeholder= 'password' 
                     className='form-control my-3 p-3'>
                       </input> 
                    
                     <button 
                     type='button' 
                     className='login mt-3 mb-5'
                     >
                       LOGIN
                       </button> 
                  
                     <a 
                     style={{color:'#54a0ff'}} 
                     href='#'>
                       Forgot password
                       </a> 
                <p 
                style={{color:'#0abde3'}}>
                  Don't have an account? Sign Up First.. 
                  {/* <a 
                  style={{color:'#54a0ff'}} 
                  href='./SignUp.jsx'>
                    Register Here
                    </a> */}
                    
                    </p> 
               </Form> 

           </div>
          </div> 
       </div> 
      </body> 
 
     </> 
   )
 }

export default Login


