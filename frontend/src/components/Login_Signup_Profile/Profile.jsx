import React,{useState, useEffect} from 'react'
import {  Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/login.png'
import GenNavbar from '../Navigation_Bar/GenNavbar';
import './Login_SignUp_Profile.css'
import { Navigate } from 'react-router-dom'
const imageMimeType = /image\/(png|jpg|jpeg)/i;




 const Profile = () => {

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image type is not valid");
      return;
    }
    setFile(file);
  }
  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);
  

  // const [imgPreview, setImgPreview] = useState(null);
  // const [error, setError] = useState(false); 
  // const handleImageChange = (e) =>{
  //   const selected = e.target.files[0];
  //   const ALLOWED_TYPES =['image/png', 'image/jpeg', 'image/jpg'];
  //   if(selected && ALLOWED_TYPES.includes(selected.type))
  //   {
  //     let reader = new FileReader();
  //     reader.onloadend = () => {
  //      setImgPreview(selected);
  //     }
  //     reader.readAsDataURL(selected);
  //   }
  //   else{
  //     setError(true);
  //     console.log("File not supported");
  //   }
  // };

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

               
                  
          {/* for image     */}
                 {/* <form>
        <button className='image-btn'  
        // style={{display: 'none'}}
        >
           
     
          <input
            type="file"
            id='image'
            accept='.png, .jpg, .jpeg'
            onChange={changeHandler}
          />
          </button>
      </form>
      {fileDataURL ?
        <button
         className="img-preview-wrapper">
          {
            <img src={fileDataURL} alt="preview" />
          }
        </button> : null} */}

        {/* image end here */}

                 </div>
                 <h3 className='header'>
                     User Profile
                      </h3> 
                     <Form>
                     
                     <div>
                     <h5 className='h-tag'>Name</h5>
                     <input 
                     type='Name' 
                     placeholder= 'Ishita Akhtar'
                     className='form-control my-3 p-3'>
                       </input> </div>
                       <div>
                     <h5 className='h-tag'>Dept</h5>
                       <input 
                     type='Dept' 
                     placeholder= 'CSE'
                     className='form-control my-3 p-3'>
                       </input> </div>   
                    
                     {/* <input 
                     type='Reg-No' 
                     placeholder= 'Reg-No' 
                     className='form-control my-3 p-3'>
                       </input>  */}
                       <div>
                     <h5 className='h-tag'>Session</h5>
                       <input 
                     type='Session' 
                     placeholder= '2010-2011'
                     className='form-control my-3 p-3'>
                       </input>  </div>
                       <div>
                     <h5 className='h-tag'>Email</h5>
                        <input 
                     type='Email-address' 
                     placeholder= 'ish123@sust.edu' 
                     className='form-control my-3 p-3'>
                       </input>  </div>
                    
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


