let ResumePDF = require("../img/Reume.pdf")

export default function Resume(){
    return(
        <div className="sectionContainer">
            <h1>
                Resume section check 1
            </h1>
            <div width={"600px"} height={"1200px"}>
                <iframe src={ResumePDF} width={"90%"} height={"100%"}/>
            </div>
        </div>
    )
}