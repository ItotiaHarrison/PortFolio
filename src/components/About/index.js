import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
                        idx={15}
                    />
                </h1>

                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>

                <p>
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    I am motivated and enthusiastic about learning new things,
                    and I am confident that I have the potential to be
                    an excellent software developer.
                </p>
            </div>
        </div>
    )
}

export default About