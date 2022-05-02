import React from 'react'
import {  Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/circle-user-regular.svg'
import Menu from '../Navigation_Bar/Menu';
import './Login.css'

 const Login = () => {
   return (
    <>
      <title>Login page</title>
          <head></head>
             <body>
                 <div>
                 <Menu/>
                  {/* <section className="Form my-4 mx-5"> */}
                   <div 
                   className="container my-4 mx-5 " 
                   style={{display: 'flex', 
                    justifyContent:'center', 
                    alignItems:'center'}}>
        
                    {/* <div className="row "> */}
                    {/* <div className="col-lg-5">
                  <div className='p-5 float'>
                  <img className='rounded' src={sideimg} alt='' height={'500px'} width={'300px'} />
                  </div>
                 </div> */}
                   <div className='col-lg-7 px-5 pt-5'> 
                  {/* <h1 className='font-weight-bold py-3'>Login</h1> */}
                  <img 
                  className='icon-image' 
                  src={loginImg} 
                  alt='icon'/>
                    <h4 
                    style={{color:'#dff9fb'}}>
                      Sign into your account
                      </h4> 
                     <Form>
                      {/* <div className='form-row'> 
                      <div className='col-lg-7'>  */}
                     <input 
                     type='email' 
                     placeholder= 'Email-address'
                     className='form-control my-3 p-3'>
                       </input> 
                     {/* </div>
                     </div> */}
                     {/* <div className='form-row'>
                     <div className='col-lg-7'>  */}
                     <input 
                     type='password' 
                     placeholder= 'password' 
                     className='form-control my-3 p-3'>
                       </input> 
                     {/* </div>
                     </div>  */}

                     {/* <div className='form-row'>
                     <div className='col-lg-7'>  */}
                     <button 
                     type='button' 
                     className='btn1 mt-3 mb-5'>
                       LOGIN
                       </button> 
                     {/* </div> 
                     </div>  */}
                     <a 
                     style={{color:'#54a0ff'}} 
                     href='#'>
                       Forgot password
                       </a> 
                <p 
                style={{color:'#0abde3'}}>
                  Don't have an account? 
                  <a 
                  style={{color:'#54a0ff'}} 
                  href='#'>
                    Register Here
                    </a></p> 
               </Form> 

           </div>
          </div> 
       {/* </div>  */}
      {/* </section> */}
       </div> 
      </body>
     </> 
   )
 }

export default Login


