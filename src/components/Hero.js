import React from 'react'
import './Hero.css'
import phone from '../asset/phone.svg'

const Hero = ({myTheme}) => {
    return (
        <section className = 'hero' data-theme ={myTheme}>
            <div className = 'container --grid-15 '>

                <div className = 'hero-text'>
                    <h1> Welcome to ceStore</h1>
                    <p className = ''> coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    coach emmy coach emmy
                    
                
                          </p>
                    <div className = '--flex-start'>
                        <button className = '--btn btn-p'>Read More</button>
                        <button className = '--btn --btn-danger'>See Pictures</button>
                    </div>
                </div>

                <div className = 'phone --text-center'>
                    <img src = {phone} alt = 'phone' width = {200} />
                </div>

            </div>
        </section>
    )
}

export default Hero
