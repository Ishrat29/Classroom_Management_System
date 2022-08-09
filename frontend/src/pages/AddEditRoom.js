import React,{useState} from 'react'
import FormElement from '../components/FormElement'
import './addEditRoom.css'
import Axios from 'axios'
import { GenButton } from '../components/GenButton';
import GenNavbar from '../components/Navigation_Bar/GenNavbar';
import TableElement from '../components/TableElement'
import functions, { isNeedUpdateRoomRoutineTempPair, roomRoutineToCourseCode, roomRoutineToStatus } from '../helper/RoomRoutineHelper'

const weekdays = ["sunday","monday","tuesday","wednesday","thursday"];
const times = ["8","9","10","11","12","13","14","15","16","17"];
var coursearray = new Array(100);
for(let j=0;j<100;j++){
  coursearray[j] = {course_code:"",
  course_title:"",primary_teacher:""};
}

function AddEditRoom() {

  const [editAfterFound, setEditAfterFound] = useState(0);

  //Building Related Info
  const [isBuildingValid, setIsBuildingValid] = useState(0);
  const [invalidBuildingMessage, setInvalidBuildingMessage] = useState("");
  const [building, setBuilding] = useState("");
  const [buildingList, setBuildingList] = useState([]);
  const [buildingListIndex, setBuildingListIndex] = useState(0);

  const initialize = ()=>{
    //initialization functions for getting the building list
    setInvalidBuildingMessage("Waiting for network");
    setIsBuildingValid(1);

    Axios.get("http://localhost:3001/building/get").then((response) => {
      console.log(response);
      if(response.data.length===0){
        setInvalidBuildingMessage("No building List was Found");
      }else{
        setIsBuildingValid(2);
        setBuilding(response.data[0].name);
        setBuildingList(response.data);
        setBuildingListIndex(0);
      }
    });
  };

  const onSelectOption = (event) =>{
    const index = event.target.value.indexOf('.');
    setBuildingListIndex(parseInt(event.target.value.substring(0,index)));
    setBuilding(event.target.value.substring(index+2));
    console.log("Selected Building: "+event["target"]["value"].substring(index+2)+" Array Index: "+event.target.value.substring(0,index));
  };

  //state for storing all course data
  const [courseDetailList, setCourseDetailList] = useState(coursearray);

  //Room no. related section
  const [isValidRoom, setIsValidRoom] = useState(0);
  const [invalidMessageRoom,setInvalidMessageRoom] = useState("");
  const [roomNo, setRoomNo] = useState('');
  const [room,setRoom] = useState([]);
  const onRoomNoChange = (roomNoString) => {
    let length = roomNoString.length;
    setRoomNo(roomNoString)
    console.log("roomNoString: "+roomNoString+", Curently stored value:"+roomNo);

    if(length>10||length===0){
      setInvalidMessageRoom('Room No must be less than 10 characters. Ex: 329');
      setIsValidRoom(1);
      return;
    }

    setIsValidRoom(1);
    setInvalidMessageRoom("Waiting for network data");

    Axios.post("http://localhost:3001/room/info", {
      building: building,
      roomNo: roomNoString,
    }).then((response) => {
      console.log(response);
      if(response.data.length===0){
        setIsValidRoom(2);
        setRoom(response.data[0]);

        for(let dayCounter=0;dayCounter<6;dayCounter++){
          for( let timeCounter=0;timeCounter<=10;timeCounter++){
            let indexc=dayTimeToIndex(dayCounter,timeCounter);
            coursearray[indexc] = {course_code:"",
            course_title:"No Scheduled Class",primary_teacher:""};
            //console.log(courseDetailList[indexc]["course_code"]);
          }  
        }
      }else{
        if(editAfterFound!==0){
          setEditAfterFound(0);
          window.location.reload();
        }
        setInvalidMessageRoom("Corresponding room exists in the Database");
        setIsValidRoom(4);
        setRoom(response.data[0]);

        //assigning to corresponding values of Form elements
        setsunday8(response.data[0].sunday_8);
        setsunday8temp(response.data[0].sunday_8_temp);
        setsunday9(response.data[0].sunday_9);
        setsunday9temp(response.data[0].sunday_9_temp);
        setsunday10(response.data[0].sunday_10);
        setsunday10temp(response.data[0].sunday_10_temp);
        setsunday11(response.data[0].sunday_11);
        setsunday11temp(response.data[0].sunday_11_temp);
        setsunday12(response.data[0].sunday_12);
        setsunday12temp(response.data[0].sunday_12_temp);
        setsunday13(response.data[0].sunday_13);
        setsunday13temp(response.data[0].sunday_13_temp);
        setsunday14(response.data[0].sunday_14);
        setsunday14temp(response.data[0].sunday_14_temp);
        setsunday15(response.data[0].sunday_15);
        setsunday15temp(response.data[0].sunday_15_temp);
        setsunday16(response.data[0].sunday_16);
        setsunday16temp(response.data[0].sunday_16_temp);
        setsunday17(response.data[0].sunday_17);
        setsunday17temp(response.data[0].sunday_17_temp);
        setmonday8(response.data[0].monday_8);
        setmonday8temp(response.data[0].monday_8_temp);
        setmonday9(response.data[0].monday_9);
        setmonday9temp(response.data[0].monday_9_temp);
        setmonday10(response.data[0].monday_10);
        setmonday10temp(response.data[0].monday_10_temp);
        setmonday11(response.data[0].monday_11);
        setmonday11temp(response.data[0].monday_11_temp);
        setmonday12(response.data[0].monday_12);
        setmonday12temp(response.data[0].monday_12_temp);
        setmonday13(response.data[0].monday_13);
        setmonday13temp(response.data[0].monday_13_temp);
        setmonday14(response.data[0].monday_14);
        setmonday14temp(response.data[0].monday_14_temp);
        setmonday15(response.data[0].monday_15);
        setmonday15temp(response.data[0].monday_15_temp);
        setmonday16(response.data[0].monday_16);
        setmonday16temp(response.data[0].monday_16_temp);
        setmonday17(response.data[0].monday_17);
        setmonday17temp(response.data[0].monday_17_temp);
        settuesday8(response.data[0].tuesday_8);
        settuesday8temp(response.data[0].tuesday_8_temp);
        settuesday9(response.data[0].tuesday_9);
        settuesday9temp(response.data[0].tuesday_9_temp);
        settuesday10(response.data[0].tuesday_10);
        settuesday10temp(response.data[0].tuesday_10_temp);
        settuesday11(response.data[0].tuesday_11);
        settuesday11temp(response.data[0].tuesday_11_temp);
        settuesday12(response.data[0].tuesday_12);
        settuesday12temp(response.data[0].tuesday_12_temp);
        settuesday13(response.data[0].tuesday_13);
        settuesday13temp(response.data[0].tuesday_13_temp);
        settuesday14(response.data[0].tuesday_14);
        settuesday14temp(response.data[0].tuesday_14_temp);
        settuesday15(response.data[0].tuesday_15);
        settuesday15temp(response.data[0].tuesday_15_temp);
        settuesday16(response.data[0].tuesday_16);
        settuesday16temp(response.data[0].tuesday_16_temp);
        settuesday17(response.data[0].tuesday_17);
        settuesday17temp(response.data[0].tuesday_17_temp);
        setwednesday8(response.data[0].wednesday_8);
        setwednesday8temp(response.data[0].wednesday_8_temp);
        setwednesday9(response.data[0].wednesday_9);
        setwednesday9temp(response.data[0].wednesday_9_temp);
        setwednesday10(response.data[0].wednesday_10);
        setwednesday10temp(response.data[0].wednesday_10_temp);
        setwednesday11(response.data[0].wednesday_11);
        setwednesday11temp(response.data[0].wednesday_11_temp);
        setwednesday12(response.data[0].wednesday_12);
        setwednesday12temp(response.data[0].wednesday_12_temp);
        setwednesday13(response.data[0].wednesday_13);
        setwednesday13temp(response.data[0].wednesday_13_temp);
        setwednesday14(response.data[0].wednesday_14);
        setwednesday14temp(response.data[0].wednesday_14_temp);
        setwednesday15(response.data[0].wednesday_15);
        setwednesday15temp(response.data[0].wednesday_15_temp);
        setwednesday16(response.data[0].wednesday_16);
        setwednesday16temp(response.data[0].wednesday_16_temp);
        setwednesday17(response.data[0].wednesday_17);
        setwednesday17temp(response.data[0].wednesday_17_temp);
        setthursday8(response.data[0].thursday_8);
        setthursday8temp(response.data[0].thursday_8_temp);
        setthursday9(response.data[0].thursday_9);
        setthursday9temp(response.data[0].thursday_9_temp);
        setthursday10(response.data[0].thursday_10);
        setthursday10temp(response.data[0].thursday_10_temp);
        setthursday11(response.data[0].thursday_11);
        setthursday11temp(response.data[0].thursday_11_temp);
        setthursday12(response.data[0].thursday_12);
        setthursday12temp(response.data[0].thursday_12_temp);
        setthursday13(response.data[0].thursday_13);
        setthursday13temp(response.data[0].thursday_13_temp);
        setthursday14(response.data[0].thursday_14);
        setthursday14temp(response.data[0].thursday_14_temp);
        setthursday15(response.data[0].thursday_15);
        setthursday15temp(response.data[0].thursday_15_temp);
        setthursday16(response.data[0].thursday_16);
        setthursday16temp(response.data[0].thursday_16_temp);
        setthursday17(response.data[0].thursday_17);
        setthursday17temp(response.data[0].thursday_17_temp);

        //getting corresponding course info
        for(let dayCounter=0;dayCounter<6;dayCounter++){
          for( let timeCounter=0;timeCounter<=10;timeCounter++){
            let indexc=dayTimeToIndex(dayCounter,timeCounter);

            let tempRoom = response.data[0];

            if(isNeedUpdateRoomRoutineTempPair(
              tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]],
              tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]+"_temp"])){
              
              tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]] = 
              roomRoutineToCourseCode(tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]])+"|y";
              eval('set'+weekdays[dayCounter]+times[timeCounter]+'(tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]]);');

              tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]+"_temp"] =
              roomRoutineToCourseCode(tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]+"_temp"])+"|n";
              eval('set'+weekdays[dayCounter]+"_"+times[timeCounter]+"_temp"+'(tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]+"_temp"]);');
            }
            
            const status = roomRoutineToStatus(tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]]);
            let reqCourseCode="";
            if(status==='y') reqCourseCode = roomRoutineToCourseCode(tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]]);
            else reqCourseCode = roomRoutineToCourseCode(tempRoom[weekdays[dayCounter]+"_"+times[timeCounter]+"_temp"]);

            if(reqCourseCode.length!==0) Axios.post("http://localhost:3001/courseinfo", {
              courseCode: reqCourseCode,
            }).then((inresponse) => {
              if(inresponse.data.length===0){
                coursearray[indexc] = {course_code:"",
                course_title:"No Scheduled Class",primary_teacher:""};  
              }else{
                coursearray[indexc] = inresponse.data[0];
              }
            });
            else{
              coursearray[indexc] = {course_code:"",
                course_title:"No Scheduled Class",primary_teacher:""};
              coursearray[indexc+50] = {course_code:"",
                course_title:"No Scheduled Class",primary_teacher:""};
            }
          }  
        }
      }
    });
    setCourseDetailList(coursearray);
  };

  //All Routine related states. dummy Course
  const [sunday8,setsunday8] = useState("|y");
  const [sunday8temp, setsunday8temp] = useState("|n");
  const [sunday9,setsunday9] = useState("|y");
  const [sunday9temp, setsunday9temp] = useState("|n");
  const [sunday10,setsunday10] = useState("|y");
  const [sunday10temp, setsunday10temp] = useState("|n");
  const [sunday11,setsunday11] = useState("|y");
  const [sunday11temp, setsunday11temp] = useState("|n");
  const [sunday12,setsunday12] = useState("|y");
  const [sunday12temp, setsunday12temp] = useState("|n");
  const [sunday13,setsunday13] = useState("|y");
  const [sunday13temp, setsunday13temp] = useState("|n");
  const [sunday14,setsunday14] = useState("|y");
  const [sunday14temp, setsunday14temp] = useState("|n");
  const [sunday15,setsunday15] = useState("|y");
  const [sunday15temp, setsunday15temp] = useState("|n");
  const [sunday16,setsunday16] = useState("|y");
  const [sunday16temp, setsunday16temp] = useState("|n");
  const [sunday17,setsunday17] = useState("|y");
  const [sunday17temp, setsunday17temp] = useState("|n");
  const [monday8,setmonday8] = useState("|y");
  const [monday8temp, setmonday8temp] = useState("|n");
  const [monday9,setmonday9] = useState("|y");
  const [monday9temp, setmonday9temp] = useState("|n");
  const [monday10,setmonday10] = useState("|y");
  const [monday10temp, setmonday10temp] = useState("|n");
  const [monday11,setmonday11] = useState("|y");
  const [monday11temp, setmonday11temp] = useState("|n");
  const [monday12,setmonday12] = useState("|y");
  const [monday12temp, setmonday12temp] = useState("|n");
  const [monday13,setmonday13] = useState("|y");
  const [monday13temp, setmonday13temp] = useState("|n");
  const [monday14,setmonday14] = useState("|y");
  const [monday14temp, setmonday14temp] = useState("|n");
  const [monday15,setmonday15] = useState("|y");
  const [monday15temp, setmonday15temp] = useState("|n");
  const [monday16,setmonday16] = useState("|y");
  const [monday16temp, setmonday16temp] = useState("|n");
  const [monday17,setmonday17] = useState("|y");
  const [monday17temp, setmonday17temp] = useState("|n");
  const [tuesday8,settuesday8] = useState("|y");
  const [tuesday8temp, settuesday8temp] = useState("|n");
  const [tuesday9,settuesday9] = useState("|y");
  const [tuesday9temp, settuesday9temp] = useState("|n");
  const [tuesday10,settuesday10] = useState("|y");
  const [tuesday10temp, settuesday10temp] = useState("|n");
  const [tuesday11,settuesday11] = useState("|y");
  const [tuesday11temp, settuesday11temp] = useState("|n");
  const [tuesday12,settuesday12] = useState("|y");
  const [tuesday12temp, settuesday12temp] = useState("|n");
  const [tuesday13,settuesday13] = useState("|y");
  const [tuesday13temp, settuesday13temp] = useState("|n");
  const [tuesday14,settuesday14] = useState("|y");
  const [tuesday14temp, settuesday14temp] = useState("|n");
  const [tuesday15,settuesday15] = useState("|y");
  const [tuesday15temp, settuesday15temp] = useState("|n");
  const [tuesday16,settuesday16] = useState("|y");
  const [tuesday16temp, settuesday16temp] = useState("|n");
  const [tuesday17,settuesday17] = useState("|y");
  const [tuesday17temp, settuesday17temp] = useState("|n");
  const [wednesday8,setwednesday8] = useState("|y");
  const [wednesday8temp, setwednesday8temp] = useState("|n");
  const [wednesday9,setwednesday9] = useState("|y");
  const [wednesday9temp, setwednesday9temp] = useState("|n");
  const [wednesday10,setwednesday10] = useState("|y");
  const [wednesday10temp, setwednesday10temp] = useState("|n");
  const [wednesday11,setwednesday11] = useState("|y");
  const [wednesday11temp, setwednesday11temp] = useState("|n");
  const [wednesday12,setwednesday12] = useState("|y");
  const [wednesday12temp, setwednesday12temp] = useState("|n");
  const [wednesday13,setwednesday13] = useState("|y");
  const [wednesday13temp, setwednesday13temp] = useState("|n");
  const [wednesday14,setwednesday14] = useState("|y");
  const [wednesday14temp, setwednesday14temp] = useState("|n");
  const [wednesday15,setwednesday15] = useState("|y");
  const [wednesday15temp, setwednesday15temp] = useState("|n");
  const [wednesday16,setwednesday16] = useState("|y");
  const [wednesday16temp, setwednesday16temp] = useState("|n");
  const [wednesday17,setwednesday17] = useState("|y");
  const [wednesday17temp, setwednesday17temp] = useState("|n");
  const [thursday8,setthursday8] = useState("|y");
  const [thursday8temp, setthursday8temp] = useState("|n");
  const [thursday9,setthursday9] = useState("|y");
  const [thursday9temp, setthursday9temp] = useState("|n");
  const [thursday10,setthursday10] = useState("|y");
  const [thursday10temp, setthursday10temp] = useState("|n");
  const [thursday11,setthursday11] = useState("|y");
  const [thursday11temp, setthursday11temp] = useState("|n");
  const [thursday12,setthursday12] = useState("|y");
  const [thursday12temp, setthursday12temp] = useState("|n");
  const [thursday13,setthursday13] = useState("|y");
  const [thursday13temp, setthursday13temp] = useState("|n");
  const [thursday14,setthursday14] = useState("|y");
  const [thursday14temp, setthursday14temp] = useState("|n");
  const [thursday15,setthursday15] = useState("|y");
  const [thursday15temp, setthursday15temp] = useState("|n");
  const [thursday16,setthursday16] = useState("|y");
  const [thursday16temp, setthursday16temp] = useState("|n");
  const [thursday17,setthursday17] = useState("|y");
  const [thursday17temp, setthursday17temp] = useState("|n");

  //currently Selected Table Index
  const [weekIndex,setWeekIndex] = useState(0);
  const [timeIndex,setTimeIndex] = useState(0);

  const dayTimeToIndex = (day,time) =>{
    return day*10+time;
  };

  const onClickTablefunc = (e,indexT)=>{
    setWeekIndex(Math.floor(indexT/10));
    setTimeIndex(indexT%10);
    console.log("indexT: "+indexT+" weekIndex: "+(indexT/10)+" timeIndex="+(indexT%10));

  }

  //Selected table info
  const [normalSelectedCourseCode,setNormalSelectedCourseCode]=useState("");
  const [isValidNormalSelectedCourseCode,setIsValidNormalSelectedCourseCode]=useState(0);
  const [inValidMessageNSelectedCourseCode, setInValidMessageNSelectedCourseCode]= useState("");
  const onNSelectedCourseCodeChange = (courseCodeString) => {
    let length = courseCodeString.length;

    if(length>50){
      setInValidMessageNSelectedCourseCode('Course Code is invalid. valid example: CSE325');
      setIsValidNormalSelectedCourseCode(1);
      return;
    }else if(length===0){
      setNormalSelectedCourseCode(courseCodeString);
      console.log(" Courese Code String:"+courseCodeString+
        " Stored: "+normalSelectedCourseCode);
      eval('set'+weekdays[weekIndex]+times[timeIndex]+
      '(courseCodeString+"|"+roomRoutineToStatus('+weekdays[weekIndex]+times[timeIndex]+
      '));');
      setIsValidNormalSelectedCourseCode(0);
      saveDataToRoutine(weekIndex,timeIndex,{course_code:"",
      course_title:"",primary_teacher:""});
      return;
    }

    setIsValidNormalSelectedCourseCode(1);
    setInValidMessageNSelectedCourseCode("Waiting for network data");

    Axios.post("http://localhost:3001/Course/courseinfo", {
      courseCode: courseCodeString,
    }).then((response) => {
      console.log(response);
      if(response.data.length===0){
        setIsValidNormalSelectedCourseCode(1);
        setInValidMessageNSelectedCourseCode('Course does not exists in database');
      }else{
        setInValidMessageNSelectedCourseCode("Course Exists in the Database and saved changes temporarily");
        setIsValidNormalSelectedCourseCode(4);
        eval('set'+weekdays[weekIndex]+times[timeIndex]+
        '(courseCodeString+"|"+roomRoutineToStatus('+weekdays[weekIndex]+times[timeIndex]+
        '));');

        //assigning to corresponding values of Table elements
        eval('if(roomRoutineToStatus('+weekdays[weekIndex]+times[timeIndex]+
        ')==="y") saveDataToRoutine(weekIndex,timeIndex,response.data[0]);');
        setNormalSelectedCourseCode(courseCodeString);
      }
    });
  };

  //required for eval
  const roomRoutineToStatus = (roomRoutine)=>{
    const inds = roomRoutine.indexOf('|');
    return roomRoutine.substring(inds+1,inds+2);
}

  //update temporarily routine info
  const saveDataToRoutine = (week,time,arr)=>{
    coursearray[dayTimeToIndex(week,time)] = arr;
    setCourseDetailList(coursearray);
  };

  return (
    <>
      <GenNavbar/>
      <div className='page-wrap'>
         <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Room Information</h4>
            <form className='form'>
              Building Name:
              <select className='building-select' onClick={initialize} onChange={onSelectOption}>
                {buildingList.map((it,index)=>(
                  <option key={index} ind={index}>{(index+1).toString()+'. '+it.name}</option>
                ))}
              </select>
              <div className={isBuildingValid===2?"":"building-invalid"}>
                <FormElement labelName="Room No." validState={isValidRoom} invalidMessage={invalidMessageRoom} inputType="Text" onChangeFunc={onRoomNoChange}
                text={""}/>
                <div className={(isValidRoom===2||isValidRoom===4)?"main-page":"main-page-non"}>
                  <hr></hr>
                  <div>Please note that edited Valid Information is Automatically Saved in temporarily the form below</div>
                  <TableElement day={weekdays[weekIndex]} time={times[timeIndex]} courseCode={courseDetailList[dayTimeToIndex(weekIndex,timeIndex)]["course_code"]}
                  courseTitle={courseDetailList[dayTimeToIndex(weekIndex,timeIndex)]["course_title"]}
                  ourseTeacher={courseDetailList[dayTimeToIndex(weekIndex,timeIndex)]["primary_teacher"]}
                  keyInfo={dayTimeToIndex(weekIndex,timeIndex)}
                  onC = {onClickTablefunc}/>
                  {"currently saved course code: "+normalSelectedCourseCode}
                  <FormElement labelName="Course Code" validState={isValidNormalSelectedCourseCode} invalidMessage={inValidMessageNSelectedCourseCode} inputType="Text" onChangeFunc={onNSelectedCourseCodeChange}
                  text={isValidNormalSelectedCourseCode===4?normalSelectedCourseCode:""}/>
                  <hr></hr>
                  <div className='table-row-wrap'>
                    {times.map((it,index)=>(
                      <TableElement key={index} day={weekdays[0]} time={times[index]} courseCode={courseDetailList[dayTimeToIndex(0,index)]["course_code"]}
                      courseTitle={courseDetailList[dayTimeToIndex(0,index)]["course_title"]}
                      courseTeacher={courseDetailList[dayTimeToIndex(0,index)]["primary_teacher"]}
                      keyInfo={dayTimeToIndex(0,index)}
                      onC = {onClickTablefunc}/>
                    ))}
                  </div>
                  <div className='table-row-wrap'>
                    {times.map((it,index)=>(
                      <TableElement key={index} day={weekdays[1]} time={times[index]} courseCode={courseDetailList[dayTimeToIndex(2,index)]["course_code"]}
                      courseTitle={courseDetailList[dayTimeToIndex(1,index)]["course_title"]}
                      courseTeacher={courseDetailList[dayTimeToIndex(1,index)]["primary_teacher"]}
                      keyInfo={dayTimeToIndex(1,index)}
                      onC = {onClickTablefunc}/>
                    ))}
                  </div>
                  <div className='table-row-wrap'>
                    {times.map((it,index)=>(
                      <TableElement key={index} day={weekdays[2]} time={times[index]} courseCode={courseDetailList[dayTimeToIndex(2,index)]["course_code"]}
                      courseTitle={courseDetailList[dayTimeToIndex(2,index)]["course_title"]}
                      courseTeacher={courseDetailList[dayTimeToIndex(2,index)]["primary_teacher"]}
                      keyInfo={dayTimeToIndex(2,index)}
                      onC = {onClickTablefunc}/>
                    ))}
                  </div>
                  <div className='table-row-wrap'>
                    {times.map((it,index)=>(
                      <TableElement key={index} day={weekdays[3]} time={times[index]} courseCode={courseDetailList[dayTimeToIndex(3,index)]["course_code"]}
                      courseTitle={courseDetailList[dayTimeToIndex(3,index)]["course_title"]}
                      courseTeacher={courseDetailList[dayTimeToIndex(3,index)]["primary_teacher"]}
                      keyInfo={dayTimeToIndex(3,index)}
                      onC = {onClickTablefunc}/>
                    ))}
                  </div>
                  <div className='table-row-wrap'>
                    {times.map((it,index)=>(
                      <TableElement key={index} day={weekdays[4]} time={times[index]} courseCode={courseDetailList[dayTimeToIndex(4,index)]["course_code"]}
                      courseTitle={courseDetailList[dayTimeToIndex(4,index)]["course_title"]}
                      courseTeacher={courseDetailList[dayTimeToIndex(4,index)]["primary_teacher"]}
                      keyInfo={dayTimeToIndex(4,index)}
                      onC = {onClickTablefunc}/>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default AddEditRoom