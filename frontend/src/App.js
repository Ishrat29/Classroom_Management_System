import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <>
     <Login/>
      </>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
// import {Button, Alert, Row, Col} from 'react-bootstrap';
// import LeftSide from "./components/LeftSide";
// import Menu from "./components/Menu";
// import RightSide from "./components/RightSide";
// function App() {
//   return (
//     <div className="App">
//       <Menu />
//       <Row className="landing">
//         <Col ><LeftSide /></Col>
        
//         <Col ><RightSide /></Col>
//       </Row>
//     </div>
//   );
// }

// export default App;