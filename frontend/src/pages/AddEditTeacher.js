import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './addEditTeacher.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';

function AddEditTeacher() {

    const [editAfterFoundMail,setEditAfterFoundMail] =useState(0);

    //Teacher e-mail related section
    const [isValidMail, setIsValidMail] = useState(0);
    const [invalidMailMessage,setInvalidMailMessage] = useState("");
    const [mail, setMail] = useState('@sust.edu');
    const [teacher,setTeacher] = useState([]);
    const onMailChange = (mailString) => {
      mailString=mailString.toLowerCase();
      let length = mailString.length;
      setMail(mailString);
      console.log("emailString: "+mailString+", Curently stored value:"+mail);
  
      if(length<=9){
        setInvalidMailMessage('Email must be of this fromat. Ex: dummy123@sust.edu');
        setIsValidMail(1);
        return;
      }
      if(mailString.substring(length-9,length).localeCompare('@sust.edu')!==0){
        //console.log("last part: "+mailString.substring(length-9,length));
        setInvalidMailMessage('Entered E-mail is not in correct format. Ex: dummy123@sust.edu');
        setIsValidMail(1);
        return;
      }
  
      setIsValidMail(1);
      setInvalidMailMessage("Waiting for network data");
  
      Axios.post("http://localhost:3001/teacher/info", {
        email: mailString,
      }).then((response) => {
        console.log(response);
        if(response.data.length===0){
          setIsValidMail(2);
          setTeacher(response.data[0]);
        }else{
          if(editAfterFoundMail!==0){
            setEditAfterFoundMail(0);
            window.location.reload();
          }
          setInvalidMailMessage("Teacher Exists in the Database");
          setIsValidMail(4);
          setTeacher(response.data[0]);

          //setting all for state values
          setName(response.data[0].name);
          setMobile(response.data[0].mobile);
          setDept(response.data[0].department);
        }
      });
    };
  
    //name related section
    const [isValidName, setIsValidName] = useState(isValidMail===4?2:0);
    const [invalidMessageName,setInvalidMessageName] = useState("");
    const [name, setName] = useState(isValidMail===4?teacher.name:"");
    const onNameChange = (nameString) => {
      let length = nameString.length;
      setName(nameString);
      console.log("Name: "+nameString+", Curently stored value:"+name);
  
      if(length===0){
        setInvalidMessageName('Name cannot be empty');
        setIsValidName(1);
        return;
      }
  
      setEditAfterFoundMail(1);
      setIsValidName(2);
    };
  
    //mobile related section
    const [isValidMobile, setIsValidMobile] = useState(isValidMail===4?2:0);
    const [invalidMessageMobile,setInvalidMessageMobile] = useState("");
    const [mobile, setMobile] = useState(isValidMail===4?teacher.mobile:0);
    
    const onMobileChange = (mobileString) => {
      let length = mobileString.length;
  
      if(length<11 || length>11){
        setInvalidMessageMobile('Inorrect Mobile number format. Should consist of 11 digits. Example: 01912345678');
        setIsValidMobile(1);
        return;
      }
  
      setEditAfterFoundMail(1);
      setMobile(mobileString);
      console.log("Mobile: "+mobileString+", Curently stored value:"+mobile);
      setIsValidMobile(2);
    };
  
    //dept related section
    const [isValidDept, setIsValidDept] = useState(isValidMail===4?2:0);
    const [invalidMessageDept,setInvalidMessageDept] = useState("");
    const [dept, setDept] = useState(isValidMail===4?teacher.department:"");
    const [deptDetail,setDeptDetail] = useState([]);
    const onDeptChange = (deptString) => {
      let length = deptString.length;
      setDept(deptString);
      console.log("Dept: "+deptString+", Curently stored value:"+dept);
  
      if(length===0){
        setInvalidMessageDept('Department code cannot be Empty');
        setIsValidDept(1);
        return;
      }
  
      setEditAfterFoundMail(1);
      setIsValidDept(1);
      setInvalidMessageDept("Waiting for network data");
  
      Axios.post("http://localhost:3001/deptinfo", {
        departmentcode: deptString,
      }).then((response) => {
        console.log(response);
        if(response.data.length===0){
          setIsValidDept(2);
          setDeptDetail(response.data[0]);
        }else{
          setIsValidDept(4);
          setDeptDetail(response.data[0]);
          setInvalidMessageDept("Department Name: "+response.data[0].name+", Building of Department: "+response.data[0].building);
          setDeptName(response.data[0].name);
          setDeptB(response.data[0].building);
        }
      });
    };
  
    //Department name related section
    const [isValidDeptName, setIsValidDeptName] = useState(isValidDept===4?4:0);
    const [invalidMessageDeptN,setInvalidMessageDeptN] = useState(isValidDept===4?"Department Name: "+deptDetail.name+"\nBuilding of Department: "+deptDetail.building:"");
    const [DeptName, setDeptName] = useState(isValidDept===4?dept.name:"");
    const onDeptNameChange = (nameString) => {
      let length = nameString.length;
      setDeptName(nameString);
      console.log("Dept Name: "+nameString+", Curently stored value:"+DeptName);
  
      if(length===0){
        setInvalidMessageDeptN('Department Name cannot be empty');
        setIsValidDeptName(1);
        return;
      }
  
      setIsValidDeptName(2);
    };
  
    //Department building related section
    const [isValidDeptB, setIsValidDeptB] = useState(isValidDept===4?4:0);
    const [invalidMessageDeptB,setInvalidMessageDeptB] = useState(isValidDept===4?"Department Name: "+deptDetail.name+"\nBuilding of Department: "+deptDetail.building:"");
    const [DeptB, setDeptB] = useState("");
    const onDeptBChange = (nameString) => {
      let length = nameString.length;
      setDeptB(nameString);
      console.log("Dept Building: "+nameString+", Curently stored value:"+DeptB);
  
      if(length===0){
        setInvalidMessageDeptB('Department Building cannot be empty');
        setIsValidDeptB(1);
        return;
      }
  
      setIsValidDeptB(2);
    };
  
    //button related functions
    const [btnErrMessage,setBtnErrMessage] = useState("");
    const [btnErrClassName,setBtnErrClassName] = useState("valid-btn-err")
    const onBtnClick = ()=>{
      if(isValidDept===2&&isValidDeptB===2&&isValidDeptName===2){
        Axios.post("http://localhost:3001/createdept", {
          deptcode: dept,
          deptname: DeptName,
          deptbuilding: DeptB,
        }).then((response) => {
          if(response.data.err===0){
            setBtnErrMessage("Updated Department Info");
            setBtnErrClassName("feedback-btn-err-message");
            if(isValidMail===2&&isValidDept===2&&isValidName===2&&isValidMail===2&&isValidMobile===2){
              Axios.post("http://localhost:3001/teacher/create", {
                email: mail,
                name: name,
                mobile: mobile,
                department: dept,
              }).then((response) => {
                if(response.data.err===0){
                  setBtnErrMessage("Updated Department And Teacher Info");
                  setBtnErrClassName("feedback-btn-err-message");
            
                }
              });
            }else if(editAfterFoundMail===1&&isValidMail===4&&(isValidDept===4|isValidDept===0)&&(isValidName===2||isValidName===0)&&(isValidMobile===2||isValidMobile===0)){
              Axios.put("http://localhost:3001/teacher/update", {
                email: mail,
                name: name,
                mobile: mobile,
                department: dept,
              }).then((response) => {
                if(response.data.err===0){
                  setBtnErrMessage("Updated Department And Teacher Info");
                  setBtnErrClassName("feedback-btn-err-message");
            
                }
              });
            }
          }else{
            setBtnErrClassName("invalid-btn-err");
            setBtnErrMessage("Could not update department and Teacher Info")
            return;
          }
  
        });
      }else{
        if(editAfterFoundMail===1&&isValidDept===4&&isValidName===2&&isValidMail===2&&isValidMobile===2){
          Axios.post("http://localhost:3001/teacher/create", {
                email: mail,
                name: name,
                mobile: mobile,
                department: dept,
              }).then((response) => {
                if(response.data.err===0){
                  setBtnErrMessage("Updated Teacher Info");
                  setBtnErrClassName("feedback-btn-err-message");
            
                }
              });
        }else if(editAfterFoundMail===1&&isValidMail===4&&(isValidDept===4|isValidDept===0)&&(isValidName===2||isValidName===0)&&(isValidMobile===2||isValidMobile===0)){
          Axios.put("http://localhost:3001/teacher/update", {
            email: mail,
            name: name,
            mobile: mobile,
            department: dept,
          }).then((response) => {
            if(response.data.err===0){
              setBtnErrMessage("Updated Teacher Info");
              setBtnErrClassName("feedback-btn-err-message");
        
            }
          });
        }
      }
    };

  return (
    <>
        <GenNavbar/>
        <div className='page-wrap'>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Teacher Information</h4>
                <form className='form'>
                    <FormElement labelName="Teacher's E-mail" validState={isValidMail} invalidMessage={invalidMailMessage} inputType="Text" onChangeFunc={onMailChange} text=""/>
                    <div className={(isValidMail===0 || isValidMail===1)?'teacher-info-fetch-non':"teacher-info-fetch"}>
                        <FormElement labelName="Teacher Name" validState={isValidName} invalidMessage={invalidMessageName} inputType="Text" onChangeFunc={onNameChange}
                        text={isValidMail===4?teacher.name:""}/>
                        <FormElement labelName="Mobile Number" validState={isValidMobile} invalidMessage={invalidMessageMobile} inputType="number" onChangeFunc={onMobileChange}
                        text={isValidMail===4?teacher.mobile:""}/>
                        <FormElement labelName="Teacher's Department Code" validState={isValidDept} invalidMessage={invalidMessageDept} inputType="number" onChangeFunc={onDeptChange}
                        text={isValidMail===4?teacher.department:""}/>
                        <div className={(isValidDept===4 || isValidDept===0 || isValidDept===1)?'deptdetail-non':"deptdetail"}>
                            <FormElement labelName="Department Name" validState={isValidDeptName} invalidMessage={invalidMessageDeptN} inputType="Text" onChangeFunc={onDeptNameChange}
                            text={""}/>
                            <FormElement labelName="Department Building" validState={isValidDeptB} invalidMessage={invalidMessageDeptB} inputType="Text" onChangeFunc={onDeptBChange}
                            text={""}/>
                        </div>
                        <div className='b-div'>{/*edit starts here*/}
                          <GenButton buttonStyle="btn--test" onClick={onBtnClick} >
                            {isValidReg===4?"Update Student Info":"Add Student Info"}
                          </GenButton>
                          <div className={btnErrClassName}>
                            {btnErrMessage}
                          </div>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    </>
  )
}

export default AddEditTeacher