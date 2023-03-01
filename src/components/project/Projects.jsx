const item = require("./projectItems.json").projectSchema

const king = require("../../public/img/KING.jpg")
console.log(item)

export default function Projects(){


    const projectItem = item.map((item, index) => {
        return(
            <li className="skill-ListItem">
                <div >
                    <img src={king}/>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.tools.SomeShit}</p>
                    <p>{item.tools.Github}</p>
                </div>
            </li>
        )
    })

    return(
        <div className="borders">
            <div id="Portfolio" className=" borderMargin"/>
            <h1>Portfolio</h1>
            <p>list of group projects as well as solo projects I worked in</p>
            <ul>
                {projectItem}
            </ul>
        </div>
    )
}