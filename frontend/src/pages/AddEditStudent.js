import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './addEditStudent.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';

function AddEditStudent() {

  const [editAfterFoundref,setEditAfterFoundreg] =useState(0);

  //registration_no related section
  const [isValidReg, setIsValidReg] = useState(0);
  const [invalidMessage,setInvalidMessage] = useState("");
  const [regNo, setRegNo] = useState('2018331000');
  const [student,setStudent] = useState([]);
  const onRegChange = (regString) => {
    let length = regString.length;
    setRegNo(regString);
    console.log("registrationString: "+regString+", Curently stored value:"+regNo);

    if(length<10 || length>10){
      setInvalidMessage('Registration Number must be of 10 digits. Ex: 2018331001');
      setIsValidReg(1);
      return;
    }

    setIsValidReg(1);
    setInvalidMessage("Waiting for network data");

    Axios.post("http://localhost:3001/studentinfo", {
      registration: regString,
    }).then((response) => {
      console.log(response);
      if(response.data.length===0){
        setIsValidReg(2);
        setStudent(response.data[0]);
      }else{
        if(editAfterFoundref!==0){
          setEditAfterFoundreg(0);
          window.location.reload();
        }
        setInvalidMessage("Student Exists in the Database");
        setIsValidReg(4);
        setStudent(response.data[0]);

        //assigning to corresponding values of Form elements
        setName(response.data[0].name);
        setSession(response.data[0].session);
        setDept(response.data[0].department);
      }
    });
  };

  //name related section
  const [isValidName, setIsValidName] = useState(isValidReg===4?2:0);
  const [invalidMessageName,setInvalidMessageName] = useState("");
  const [name, setName] = useState(isValidReg===4?student.name:"");
  const onNameChange = (nameString) => {
    let length = nameString.length;
    setName(nameString);
    console.log("Name: "+nameString+", Curently stored value:"+name);

    if(length===0){
      setInvalidMessageName('Name cannot be empty');
      setIsValidName(1);
      return;
    }

    setEditAfterFoundreg(1);
    setIsValidName(2);
  };

  //session related section
  const [isValidSession, setIsValidSession] = useState(isValidReg===4?2:0);
  const [invalidMessageSession,setInvalidMessageSession] = useState("");
  const [session, setSession] = useState(isValidReg===4?student.session:0);
  const sessionToString = (ses)=>{
    return ses.toString()+"-"+(ses+1).toString();
  };
  const stringToSession = (string)=>{
    return parseInt(string.substring(0,4));
  };
  const onSessionChange = (sessionString) => {
    let length = sessionString.length;

    if(length<9 || length>9){
      setInvalidMessageSession('Correct Session format Example: 2018-2019');
      setIsValidSession(1);
      return;
    }
    for(let i=0; i<length;i++){
      if((i===4 && sessionString.charAt(i)!=='-') || (i!==4 && (sessionString.charAt(i)<'0'|| sessionString.charAt(i)>'9') )){
        console.log("checked: "+sessionString.charAt(i));
        setInvalidMessageSession('Correct Session format Example: 2018-2019');
        setIsValidSession(1);
        return;
      }
    }

    setEditAfterFoundreg(1);
    setSession(stringToSession(sessionString));
    console.log("Session: "+sessionString+", Curently stored value:"+session);
    setIsValidSession(2);
  };

  //dept related section
  const [isValidDept, setIsValidDept] = useState(isValidReg===4?2:0);
  const [invalidMessageDept,setInvalidMessageDept] = useState("");
  const [dept, setDept] = useState(isValidReg===4?student.department:"");
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

    setEditAfterFoundreg(1);
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

  //Department name related section
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
          setBtnErrMessage("Updated!");
          setBtnErrClassName("feedback-btn-err-message");
          if(isValidReg===2&&isValidDept===2&&isValidName===2&&isValidReg===2&&isValidSession===2){
            Axios.post("http://localhost:3001/createstu", {
              reg: regNo,
              name: name,
              session: session,
              department: dept,
            }).then((response) => {
              if(response.data.err===0){
                setBtnErrMessage("Updated!");
                setBtnErrClassName("feedback-btn-err-message");
          
              }
            });
          }else if(editAfterFoundref===1&&isValidReg===4&&(isValidDept===4|isValidDept===0)&&(isValidName===2||isValidName===0)&&(isValidSession===2||isValidSession===0)){
            Axios.put("http://localhost:3001/updatestu", {
              reg: regNo,
              name: name,
              session: session,
              department: dept,
            }).then((response) => {
              if(response.data.err===0){
                setBtnErrMessage("Updated!");
                setBtnErrClassName("feedback-btn-err-message");
          
              }
            });
          }
        }else{
          setBtnErrClassName("invalid-btn-err");
          setBtnErrMessage("Failed!")
          return;
        }

      });
    }else{
      if(editAfterFoundref===1&&isValidDept===4&&isValidName===2&&isValidReg===2&&isValidSession===2){
        console.log("updated with value "+name+" "+session+" "+dept+" ");
        Axios.post("http://localhost:3001/createstu", {
              reg: regNo,
              name: name,
              session: session,
              department: dept,
            }).then((response) => {
              if(response.data.err===0){
                setBtnErrMessage("Updated!");
                setBtnErrClassName("feedback-btn-err-message");
          
              }
            });
      }else if(editAfterFoundref===1&&isValidReg===4&&(isValidDept===4|isValidDept===0)&&(isValidName===2||isValidName===0)&&(isValidSession===2||isValidSession===0)){
        console.log("updated with value "+name+" "+session+" "+dept+" ");
        Axios.put("http://localhost:3001/updatestu", {
          reg: regNo,
          name: name,
          session: session,
          department: dept,
        }).then((response) => {
          if(response.data.err===0){
            setBtnErrMessage("Updated!");
            setBtnErrClassName("feedback-btn-err-message");
      
          }
        });
      }
    }
    console.log("button funtion ended value "+name+" "+session+" "+dept+" ");
  };

  return (
    <>
        <GenNavbar/>
        <div className='page-wrap'>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Student Information</h4>
            <form className='form'>
              <FormElement labelName="Registration Number" validState={isValidReg} invalidMessage={invalidMessage} inputType="number" onChangeFunc={onRegChange} text=""/>
              <div className={(isValidReg===0 || isValidReg===1)?'student-info-fetch-non':"student-info-fetch"}>
                <FormElement labelName="Student Name" validState={isValidName} invalidMessage={invalidMessageName} inputType="Text" onChangeFunc={onNameChange}
                text={isValidReg===4?student.name:""}/>
                <FormElement labelName="Student Session" validState={isValidSession} invalidMessage={invalidMessageSession} inputType="Text" onChangeFunc={onSessionChange}
                text={isValidReg===4?sessionToString(student.session):""}/>
                <FormElement labelName="Student Department Code" validState={isValidDept} invalidMessage={invalidMessageDept} inputType="number" onChangeFunc={onDeptChange}
                text={isValidReg===4?student.department:""}/>
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
                </div>{/*edit ends here*/}
              </div> 
            </form>
          </div>
        </div>
    </>
  )
}

export default AddEditStudent