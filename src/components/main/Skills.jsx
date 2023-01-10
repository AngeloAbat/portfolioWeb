export default function Skills(){
    return(
        <div id="Skills" className="borders">
            <h1 className="title">
                Skills
            </h1>
            <div className="skill-Item">
                <h2 className="skill-Header">Front End</h2>
                <div className='skill-List'>
                    <ul>
                        <li className="skill-ListItem">HTML</li>
                        <li className="skill-ListItem">CSS</li>
                        <li className="skill-ListItem">JavaScript</li>
                        <li className="skill-ListItem">Bootstrap</li>
                        <li className="skill-ListItem">Styled</li>
                        <li className="skill-ListItem">React.JS</li>
                    </ul>
                </div>
            </div>
            <div className="skill-Item">
                <h2 className="skill-Header">Back End</h2>
                <div className='skill-List'>
                    <ul>
                        <li className="skill-ListItem">Node.JS</li>
                        <li className="skill-ListItem">Express.JS</li>
                        <li className="skill-ListItem">Lambda(AWS)</li>
                        <li className="skill-ListItem">API Gateway(AWS)</li>
                        <li className="skill-ListItem">Cognito(AWS)</li>
                        <li className="skill-ListItem">MongoDB</li>
                        <li className="skill-ListItem">DynamoDB(AWS)</li>
                    </ul>
                </div>
            </div>
            <div className="skill-Item">
                <h2 className="skill-Header">Soft Skills</h2>
                <div className='skill-List'>
                    <ul>
                        <li className="skill-ListItem">Communication</li>
                        <li className="skill-ListItem">Teamwork</li>
                        <li className="skill-ListItem">Adaptability</li>
                        <li className="skill-ListItem">Time Management</li>
                        <li className="skill-ListItem">Organizational</li>
                        <li className="skill-ListItem">Critical Thinking</li>
                    </ul>
                </div>
            </div>
            <div className="skill-Item">
                <h2 className="skill-Header">Hard Skills</h2>
                <div className='skill-List'>
                    <ul>
                        <li className="skill-ListItem">Engineering</li>
                        <li className="skill-ListItem">Data Analysis</li>
                        <li className="skill-ListItem">Project Management</li>
                        <li className="skill-ListItem">Bilingual (Filipino & English)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}