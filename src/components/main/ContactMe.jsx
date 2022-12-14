import linkedInLogo from "../../public/icon/linkedInLogo.png"

export default function ContactMe(){
    return(
        <div id="ContactMe" className="contact borders">
            <h1>Contact</h1>
            <br/>
            <div>
                <ul className="contact-List">
                    <li>
                        Phone: +1(510)949-6267
                    </li>
                    <li>
                        Email: alagmay.abat23@gmail.com
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/angelo-abat-57541b23a/ ">
                            {/* <img className="contact-Icon" src={linkedInLogo} alt='logo'/> */}
                            LinkedIn: https://www.linkedin.com/in/angelo-abat-57541b23a/    
                        </a>
                    </li>
                    <li>
                        github:  https://github.com/AngeloAbat
                    </li>
                </ul>
            </div>
        </div>
    )
}