/*
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


.navbar {
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  position: sticky;
  top: 0;
  z-index: 999;
  color: #fff;
  font-family: Georgia, 'Times New Roman', Times, serif;
  width: auto;
}

.navbar-container {
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  padding-left: 30px;
}

img {
  max-height: 80px;
  background-color: #fff;
}

.fa-typo3 {
  margin-left: 0.5rem;
  font-size: 1.8rem;
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 100%;
  justify-content: end;
  margin-right: 3rem;
}

.nav-item {
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.3rem 0.5rem;
}

.nav-links {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
}

.nav-links:hover, .nav-item:hover {
  border-bottom: 10px solid #fff;
  transition: all 0.2s ease-out;
}

.fa-bars {
  color: #fff;
}

.nav-links-mobile {
  display: none;
}

.menu-icon {
  display: none;
}

@media screen and (max-width: 960px) {
  .NavbarItems {
    position: relative;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background: #242222;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    align-items: center;
  }

  .nav-item {
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0.3rem 0.5rem;
    width: 100%;
    margin-right: 4.5rem;
  }

  .nav-links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }

  .nav-links:hover, .nav-item:hover {
    background-color: #fff;
    color: #242424;
    border-radius: 0;
  }

  .navbar-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }

  .menu-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  .fa-times {
    color: #fff;
    font-size: 2rem;
  }

  .nav-links-mobile {
    display: block;
    text-align: center;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
  }

  .nav-links-mobile:hover {
    background: #fff;
    color: #242424;
    transition: 250ms;
  }
}
*/