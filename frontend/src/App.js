import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login_Signup_Profile/Login';
import SignUp from './components/Login_Signup_Profile/SignUp';
import Course from './components/Info/Course';
import AddEditStudent from './pages/AddEditStudent';
import TeacherQuery from './pages/TeacherQuery';
import StudentQuery from './pages/StudentQuery';
import Profile from './components/Login_Signup_Profile/Profile';
import AddEditTeacher from './pages/AddEditTeacher';
import AddEditCourse from './pages/AddEditCourse';
import AddEditRoom from './pages/AddEditRoom';
import TeacherInformation from './pages/TeacherInformation';
import CourseInformation from './pages/CourseInformation';




function App() {
  return (
    <>
   
   <Router>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/Profile' element={<Profile/>} />
    <Route path='/StudentQuery' element={<StudentQuery/>} />
    <Route path='/TeacherQuery' element={<TeacherQuery/>} />
    <Route path='/AddEditStudent' element={<AddEditStudent/>} />
    <Route path='/AddEditTeacher' element={<AddEditTeacher/>} />
    <Route path='/AddEditCourse' element={<AddEditCourse/>} />
    <Route path='/AddEditRoom' element={<AddEditRoom/>} />
    <Route path='/TeacherInformation' element={<TeacherInformation/>} />
    <Route path='/CourseInformation' element={<CourseInformation/>} />
    
   

</Routes>
</Router>

      </>
  );
}

export default App;

