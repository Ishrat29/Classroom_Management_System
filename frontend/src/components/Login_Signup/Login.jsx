import React from 'react'
import {  Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/login.png'
import Menu from '../Navigation_Bar/Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'



//toast.configure()
 const Login = () => {
 
  const navigate = useNavigate();
  // const notify = () => {
  //   toast('Login Completed!')
  // }
 
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
                     onClick={()=>{navigate("/TeacherQuery"); }}
                     >
                       LOGIN
                       </button>
                       {/* if(Login completed)
                       toast.success("Login Completed");
                       else
                       toast.error("Something went wrong"); */}
                     
                       
                       <p 
                style={{color:'#0abde3'}}>
                  Don't Have an Acount? 
                  </p> 
                     <a 
                     style={{color:'#54a0ff'}} 
                     href='#'
                     onClick={()=>{navigate("/SignUp");}}>
                       Sign Up First..
                      </a> 
               </Form> 

           </div>
          </div> 
       </div> 
      </body> 
 
     </> 
   )
 }

export default Login


