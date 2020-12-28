import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize',showButton);


    return (
        <>
        <nav className ="navbar">
            <div className = "navbar-container">
                <Link to="/" className = "navbar-logo" onClick={closeMobileMenu}>
                <img id="logo" className ="aa-logo" src="images/AAlogo.png" width="75" height="75" alt=""/>
                
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className = {click ? 'fas fa-times': 'fas fa-bars'} />

                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className ='nav-item'> 
                <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                    Home
                </Link>
                </li>

                <li className ='nav-item'> 
                <Link to='/about' className='nav-links' onClick = {closeMobileMenu}>
                    About
                </Link>
                </li>

                <li className ='nav-item'> 
                <Link to='/our-product' className='nav-links' onClick = {closeMobileMenu}>
                    Our Product
                </Link>
                </li> 

                <li className ='nav-item'> 
                <Link to='/market-and-competitors' className='nav-links' onClick = {closeMobileMenu}>
                    Market and Competitors
                </Link>
                </li>
               
                <li className ='nav-item'> 
                <Link to='/contact-us' className='nav-links-mobile' onClick = {closeMobileMenu}>
                    Contact Us
                </Link>
                </li>

                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
