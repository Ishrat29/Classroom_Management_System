import React,{useState} from 'react';
import './GenNavbar.css';

function GenNavbar() {
   const [click, setClick] = useState(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src='/images/sust-logo.png' alt='' className='navbar-Logo'></img>
                <div className='menu-icon' onClick = {() => setClick(!click)}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        Home
                    </li>
                    <li className='nav-item'>
                        Profile
                    </li>
                    <li className='nav-item'>
                        Logout
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default GenNavbar