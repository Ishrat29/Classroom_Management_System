import React,{useState} from 'react';
import { Navbar } from 'react-bootstrap';
import './GenNavbar.css';

function Menu() {
   const [click, setClick] = useState(false);

  return (
    <>
        <nav className='navbar py-0'>
            <div className='navbar-container' >
                <img src='/images/sust-logo.png' alt='' className='navbar-Logo mx-2'></img>
                <div className='nav-brand'>
                <Navbar.Brand style={{color:'#535c68'}}>Classroom Database Management System</Navbar.Brand> </div>
                
                {/* <div className='menu-icon' onClick = {() => setClick(!click)}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item mt-2'>
                        Sign Up
                    </li>
                    <li className='nav-item mt-2'>
                        Login
                    </li>
                </ul>*/}
            </div> 
        </nav>
    </>
  )
}


export default Menu; 