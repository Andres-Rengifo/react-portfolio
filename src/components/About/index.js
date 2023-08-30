import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout (() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm an ambitious front-end developer currently looking for a role
                    in a Job which will offer an opportunity to hone my skills with work
                    on the latest technologies.
                </p>
                <p>
                    I am a hard worker and a quick learner, I am constantly trying to learn
                    something new that will help me grow in the techno;ogical area.
                </p>
                <p>
                    I have a an average GPA of 3.6 including Physics and Mathematics
                </p>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About