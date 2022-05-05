import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login_Signup/Login';
import SignUp from './components/Login_Signup/SignUp';

function App() {
  return (
    <>
     <Login/>
     {/* <SignUp/> */}
      </>
  );
}

export default App;

