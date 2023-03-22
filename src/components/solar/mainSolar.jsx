import "./css/solar.css"
import "./css/detailBox.css"
import "./css/copernican.css"
import "./css/ringRotation.css"

import About from "../main/About"
import ContactMe from "../main/ContactMe"
import Skills from "../main/Skills"
import Projects from "../project/Projects"

let Astronaut = require('../../public/icon/astronautTransp1.png')


export default function SolarSys(){
    let random = ["state", "Hood", "chicken", "pork", "beef", "goat"]

    let item = random.map((item, index) => {
        return(
            <div>
                <h1>Lorem Ipsum</h1>
                <div className="breaker"/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum. It is a long established fact that a 
                    reader will be distracted by the readable content of a page when looking 
                    at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                </p>
                <div className="breaker"/>
            </div>      
        )
    })


    return(
        <div className="solarSystem">
            <div className="detailBoxBackground"/>
            <div class="detailBox">
                {item}
                <About/>
                <Skills/>
                <Projects/>
                <ContactMe/>
            </div>
            <h1 className="headerName">Angelo Abat</h1>
            <div className="Copernican">
                <div className="center1 ring">
                    <a href="#Portfolio" className="Planet Planet1"></a>
                </div>
                <div className="center2 ring">
                    <a href="#Skills"className="Planet Planet2"></a>
                </div>
                <div className="center3 ring">
                    <a href="#ContactMe" className="Planet Planet3"></a>
                </div>
                <div className="center4 ring">
                    <a href="#About" className="Planet Planet4"></a>
                </div>
                <img className="astro" src={Astronaut} alt="Center"/>
            </div>
            {/* <img src={Astronaut} alt="CHICKEN"/> */}
        </div>
    )
}