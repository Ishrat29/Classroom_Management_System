import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login_Signup/Login';
import SignUp from './components/Login_Signup/SignUp';
import Course from './components/Info/Course';
import AddEditStudent from './pages/AddEditStudent';
import TeacherQuery from './pages/TeacherQuery';
import StudentQuery from './pages/StudentQuery';
import Profile from './components/Login_Signup/Profile';

function App() {
  return (
    <>
   
   <Router>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/AddEditStudent' element={<AddEditStudent/>} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/StudentQuery' element={<StudentQuery/>} />
    <Route path='/TeacherQuery' element={<TeacherQuery/>} />
    <Route path='/Profile' element={<Profile/>} />

</Routes>
</Router>
{/* <div>
     {/* <Login/> */}
      {/* <SignUp/>  */}
    {/*  <AddEditStudent/> */}
    {/* </div> */}
      </>
  );
}

export default App;

