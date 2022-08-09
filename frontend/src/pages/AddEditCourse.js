import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './addEditCourse.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';

function AddEditCourse() {

 

  //Course_Code related section
  const [editAfterFoundcourse,setEditAfterFoundcourse] =useState(0);
  const [isValidCourseCode, setIsValidCourseCode] = useState(0);
  const [invalidMessage,setInvalidMessage] = useState("");
  const [courseCode, setCourseCode] = useState('CSE101D');
  const [course,setCourse] = useState([]);
  const onCourseCodeChange = (courseCodeString) => {
    let length = courseCodeString.length;
    setCourseCode(courseCodeString);
    console.log("CourseCodeString: "+courseCodeString+", Curently stored value:"+courseCode);

    if(length<6 || length>7){
      setInvalidMessage('Course Code cannot be less than 6 digits. Ex: CSE101 or EEE101D');
      setIsValidCourseCode(1);
      return;
    }

    setIsValidCourseCode(1);
    setInvalidMessage("Waiting for network data");

    Axios.post("http://localhost:3001/Course/courseinfo", {
      courseCode: courseCodeString,
    }).then((response) => {
      console.log(response);
      if(response.data.length===0){
        setIsValidCourseCode(2);
         setCourse(response.data[0]);
      }else{
        if(editAfterFoundcourse!==0){
          setEditAfterFoundcourse(0);
          window.location.reload();
        }
        setInvalidMessage("Course Exists in the Database");
        setIsValidCourseCode(4);
        setCourse(response.data[0]);
      }
    });
  };
  

  //Course_Title related section
  const [isValidCourseTitle, setIsValidCourseTitle] = useState(isValidCourseCode===4?2:0);
  const [invalidMessageCourseTitle,setInvalidMessageCourseTitle] = useState("");
  const [courseTitle, setCourseTitle] = useState(isValidCourseCode===4?course.courseTitle:"");
  const onCourseTitleChange = (courseTitleString) => {
    let length = courseTitleString.length;
    setCourseTitle(courseTitleString);
    console.log("Course Title: "+courseTitleString+", Curently stored value:"+courseTitle);

    if(length===0){
      setInvalidMessageCourseTitle('Course Title cannot be empty');
      setIsValidCourseTitle(1);
      return;
    }

    setEditAfterFoundcourse(1);
    setIsValidCourseTitle(2);
  };


   //dept_code related section
   const [isValidDept, setIsValidDept] = useState(isValidCourseCode===4?2:0);
   const [invalidMessageDept,setInvalidMessageDept] = useState("");
   const [dept, setDept] = useState(isValidCourseCode===4?course.department:"");
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
 
     setEditAfterFoundcourse(1);
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
  const [isValidDeptName, setIsValidDeptName] = useState(isValidCourseCode===4?4:0);
  const [invalidMessageDeptN,setInvalidMessageDeptN] = useState(isValidCourseCode===4?"Department Name: "+deptDetail.name+"\nBuilding of Department: "+deptDetail.building:"");
  const [DeptName, setDeptName] = useState(isValidCourseCode===4?course.courseTitle:"");
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



  //Primary teacher related section
  const [isValidPrimaryTeacher, setIsValidPrimaryTeacher] = useState(isValidCourseCode===4?4:0);
  const [invalidMessagePrimaryTeacher,setInvalidMessagePrimaryTeacher] = useState(isValidCourseCode===4?"Department Name: "+deptDetail.name+"\nBuilding of Department: "+deptDetail.building:"");
  const [PrimaryTeacher, setPrimaryTeacher] = useState(isValidCourseCode===4?course.courseTitle:"");
  const onPrimaryTeacherChange = (nameString) => {
    let length = nameString.length;
    setPrimaryTeacher(nameString);
    console.log("Primary Teacher: "+nameString+", Curently stored value:"+PrimaryTeacher);

    if(length===0){
      setInvalidMessagePrimaryTeacher('Primary Teacher cannot be empty');
      setIsValidPrimaryTeacher(1);
      return;
    }

    setIsValidPrimaryTeacher(2);
  };


  //Secondary teacher related section
  const [isValidSecondaryTeacher, setIsValidSecondaryTeacher] = useState(isValidCourseCode===4?4:0);
  const [invalidMessageSecondaryTeacher,setInvalidMessageSecondaryTeacher] = useState(isValidCourseCode===4?"Department Name: "+deptDetail.name+"\nBuilding of Department: "+deptDetail.building:"");
  const [SecondaryTeacher, setSecondaryTeacher] = useState(isValidCourseCode===4?course.courseTitle:"");
  const onSecondaryTeacherChange = (nameString) => {
    let length = nameString.length;
    setSecondaryTeacher(nameString);
    console.log("Secondary Teacher: "+nameString+", Curently stored value:"+SecondaryTeacher);

    // if(length===0){
    //   setInvalidMessageSecondaryTeacher('Type Null if there is no secondary teacher');
    //   setIsValidSecondaryTeacher(1);
    //   return;
    // }

    setIsValidSecondaryTeacher(2);
  };


  //CR related section
  const [isValidCRreg, setIsValidCRreg] = useState(isValidCourseCode===4?4:0);
  const [invalidMessageCRreg,setInvalidMessageCRreg] = useState(isValidCourseCode===4?"Department Name: "+deptDetail.name+"\nBuilding of Department: "+deptDetail.building:"");
  const [CRreg, setCRreg] = useState(isValidCourseCode===4?course.courseTitle:"");
  const onCRregChange = (nameString) => {
    let length = nameString.length;
    setCRreg(nameString);
    console.log("CR Reg: "+nameString+", Curently stored value:"+CRreg);

    if(length===0){
      setInvalidMessageCRreg('CR registration can not be empty');
      setIsValidCRreg(1);
      return;
    }

    setIsValidCRreg(2);
  };


  //CR related section(2)
  const [isValidCRreg2, setIsValidCRreg2] = useState(isValidCourseCode===4?4:0);
  const [invalidMessageCRreg2,setInvalidMessageCRreg2] = useState(isValidCourseCode===4?"Department Name: "+deptDetail.name+"\nBuilding of Department: "+deptDetail.building:"");
  const [CRreg2, setCRreg2] = useState(isValidCourseCode===4?course.courseTitle:"");
  const onCRreg2Change = (nameString) => {
    let length = nameString.length;
    setCRreg2(nameString);
    console.log("CR Reg: "+nameString+", Curently stored value:"+CRreg2);

    if(length===0){
      setInvalidMessageCRreg2('CR registration can not be empty');
      setIsValidCRreg2(1);
      return;
    }

    setIsValidCRreg2(2);
  };

  

 

 // button related functions
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
          if(isValidCourseCode===2&&isValidDept===2&&isValidCourseTitle===2&&isValidCourseCode===2
            &&isValidPrimaryTeacher===2&&isValidSecondaryTeacher===2&&isValidCRreg===2&&isValidCRreg2===2){
            Axios.post("http://localhost:3001/Course/createcourse", {
              courseCode : courseCode,
              courseTitle: courseTitle,
              department: dept,
              PrimaryTeacher: PrimaryTeacher,
              SecondaryTeacher: SecondaryTeacher,
              CRreg: CRreg,
              CRreg2: CRreg2,
            }).then((response) => {
              if(response.data.err===0){
                setBtnErrMessage("Updated!");
                setBtnErrClassName("feedback-btn-err-message");
          
              }
            });
          }else if(editAfterFoundcourse===1&&isValidCourseCode===4&&(isValidDept===4|isValidDept===0)
          &&(isValidCourseTitle===2||isValidCourseTitle===0)&&(isValidPrimaryTeacher===2||isValidPrimaryTeacher===0)
          && (isValidSecondaryTeacher===2||isValidSecondaryTeacher===0)&&(isValidCRreg===2||isValidCRreg===0)&&(isValidCRreg2===2||isValidCRreg2===0)){
            Axios.put("http://localhost:3001/Course/updatecourse", {
              courseCode : courseCode,
              courseTitle: courseTitle,
              department: dept,
              PrimaryTeacher: PrimaryTeacher,
              SecondaryTeacher: SecondaryTeacher,
              CRreg: CRreg,
              CRreg2: CRreg2,
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
      if(editAfterFoundcourse===1&&isValidDept===4&&isValidCourseTitle===2&&isValidCourseCode===2&&isValidPrimaryTeacher===2
        &&isValidSecondaryTeacher===2&&isValidCRreg===2&&isValidCRreg2===2){
        Axios.post("http://localhost:3001/Course/createcourse", {
          courseCode : courseCode,
          courseTitle: courseTitle,
          department: dept,
          PrimaryTeacher: PrimaryTeacher,
          SecondaryTeacher: SecondaryTeacher,
          CRreg: CRreg,
          CRreg2: CRreg2,
            }).then((response) => {
              if(response.data.err===0){
                setBtnErrMessage("Updated!");
                setBtnErrClassName("feedback-btn-err-message");
          
              }
            });
      }else if(editAfterFoundcourse===1&&isValidCourseCode===4&&(isValidDept===4|isValidDept===0)&&(isValidCourseTitle===2||isValidCourseTitle===0)
      &&(isValidPrimaryTeacher===2||isValidPrimaryTeacher===0)&& (isValidSecondaryTeacher===2||isValidSecondaryTeacher===0)&&(isValidCRreg===2||isValidCRreg===0)
      &&(isValidCRreg2===2||isValidCRreg2===0)){
        Axios.put("http://localhost:3001/Course/updatecourse", {
          courseCode : courseCode,
          courseTitle: courseTitle,
          department: dept,
          PrimaryTeacher: PrimaryTeacher,
          SecondaryTeacher: SecondaryTeacher,
          CRreg: CRreg,
          CRreg2: CRreg2,
        }).then((response) => {
          if(response.data.err===0){
            setBtnErrMessage("Updated!");
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
            <h4 className="mb-3">Course Information</h4>
            <form className='form'>
              <FormElement labelName="Course Code" validState={isValidCourseCode} invalidMessage={invalidMessage} inputType="Text" onChangeFunc={onCourseCodeChange} text=""/>
              <div className={(isValidCourseCode===0 || isValidCourseCode===1)?'course-info-fetch-non':"course-info-fetch"}>
                <FormElement labelName="Course Title" validState={isValidCourseTitle} invalidMessage={invalidMessageCourseTitle} inputType="Text" onChangeFunc={onCourseTitleChange}
                 text={isValidCourseCode===4?course.courseTitle:""}/> 
                <FormElement labelName="Department Code" validState={isValidDept} invalidMessage={invalidMessageDept} inputType="number" onChangeFunc={onDeptChange}
                        text={isValidCourseCode===4?course.department:""}/>
                  <div className={(isValidDept===4 || isValidDept===0 || isValidDept===1)?'deptdetail-non':"deptdetail"}>
                            <FormElement labelName="Department Name" validState={isValidDeptName} invalidMessage={invalidMessageDeptN} inputType="Text" onChangeFunc={onDeptNameChange}
                            text={""}/>
                            <FormElement labelName="Department Building" validState={isValidDeptB} invalidMessage={invalidMessageDeptB} inputType="Text" onChangeFunc={onDeptBChange}
                            text={""}/>
                        </div> 
                  <FormElement labelName="Primary Teacher" validState={isValidPrimaryTeacher} invalidMessage={invalidMessagePrimaryTeacher} inputType="Text" onChangeFunc={onPrimaryTeacherChange}
                  text={isValidCourseCode===4?course.PrimaryTeacher:""}/> 
                  <FormElement labelName="Scondary Teacher" validState={isValidSecondaryTeacher} invalidMessage={invalidMessageSecondaryTeacher} inputType="Text" onChangeFunc={onSecondaryTeacherChange}
                  text={isValidCourseCode===4?course.SecondaryTeacher:""}/>
                  <FormElement labelName="Class Representative's registration (1)" validState={isValidCRreg} invalidMessage={invalidMessageCRreg} inputType="Text" onChangeFunc={onCRregChange}
                  text={isValidCourseCode===4?course.CRreg:""}/>
                   <FormElement labelName="Class Representative's registration (2)" validState={isValidCRreg2} invalidMessage={invalidMessageCRreg2} inputType="Text" onChangeFunc={onCRreg2Change}
                  text={isValidCourseCode===4?course.CRreg2:""}/>  
                 
                  <div className='b-div'>{/*edit starts here*/}
                          <GenButton buttonStyle="btn--test" onClick={onBtnClick} >
                            {isValidCourseCode===4?"Update Course Info":"Add Course Info"}
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

export default  AddEditCourse