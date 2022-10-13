import React from 'react'
import './Footer.css'

const Footer = ({myTheme}) => {
    return (
        <footer  className = '--flex-center' data-theme ={myTheme}>
                <p> Copyrights &copy;  2022 | ceStore </p>
        </footer>
    )
}

export default Footer
