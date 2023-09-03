let me = require('../img/me.jpg')

export default function ContactSection(){
    return(
        <div className="sectionContainer">
            <h1>My Contacts</h1>
            <br />
            <p>
                My Linked in:
                <a href="https://www.linkedin.com/in/angelo-abat-57541b23a/">Click here!</a> 
            </p>
            <br />
            <p>
                Me Email: 
                <a href="">alagmay.abat23@gmail.com</a>
            </p>
            <image src={me} alt="A picture of me"/>
            <iframe width="930" height="523" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)"  allowfullscreen ></iframe>
        </div>
    )
}