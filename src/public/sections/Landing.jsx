let Astronaut = require('../icon/astronautTransp1.png')

export default function LandingSection(){
    return(
        <div className="sectionFiller sectionContainer">
            <img className='picture' src={Astronaut} alt='An Astronaut'/>
            <h1>
                My name is Angelo Abat and this website is still under construction.
            </h1>
            <br/>
            <p>But Feel free to browse through</p>
        </div>
    )
}