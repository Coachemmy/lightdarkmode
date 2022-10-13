import React from 'react'
import './Header.css'
import logo from '../asset/1665584928193.png'



const Header = ({myTheme, onToggleTheme}) => {
    return (
        <header data-theme ={myTheme}>
            <div className = 'container --flex-between'>

                <div className = 'logo'>
                <img src={logo} alt='logo' width={30}/>  
                    <span className = 'logotext'>ceStore</span>                  
                </div>

                <nav>
                <ul className = '--flex-between'>
                    <li><a href = '#'>Home </a></li>
                    <li><a href = '#'>About </a></li>
                </ul>
                </nav>


                <div onClick = {onToggleTheme}>
                    <span className = 'toggle-btn'>
                    <p className = 'mode'>swap-mode </p> 
                    
                    </span>
                </div>

            </div>
            
        </header>
    )
}

export default Header
