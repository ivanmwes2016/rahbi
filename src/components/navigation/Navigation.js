

import React, { Component } from 'react'
import './styles.css'
import Logo from '../../images/Rhabi.png'

 class Navigation extends Component{

    state = {
        clicked:false
    }

    handleClick =() => {
        this.setState({
            clicked:!this.state.clicked
        })
    }

   

    render(){
        return(
            <nav className='nav-bar'>
                <div><img src={Logo} className="navbar-logo" /></div>
                <div className="LogoName">RHABI SECURITY</div>
             


                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
    
                    <li><a href='/'>Home</a></li>
                    <li><a href='about-us'>About</a></li>
                    <li><a href='services'>Services</a></li>
                    <li><a href='#'>Vacancies</a></li>
                    <li><a href='contact'>Contact</a></li>

                </ul>

               

    
                <button className="quotebutton"><a href='contact'>Request a Quote</a></button>

                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'bi bi-x-lg' : 'bi bi-list'}></i>

            </div>
            </nav>
        );
    }
    
}

export default Navigation