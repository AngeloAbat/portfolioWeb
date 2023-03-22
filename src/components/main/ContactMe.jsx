import linkedInLogo from "../../public/icon/linkedInLogo.png"

export default function ContactMe(){
    return(
        <div className="contact borders">
            <div id="ContactMe" className=" borderMargin"/>
            <h1>Contact</h1>
            <div className="breaker"/>
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
                        <a href="https://github.com/AngeloAbat">
                            github:  https://github.com/AngeloAbat
                        </a>
                    </li>
                </ul>
            </div>
            <div className="breaker"/>
            <div className="breaker"/>
            <div className="breaker"/>
            <div className="breaker"/>
            <div className="breaker"/>
            <bold>Hello! Thank you for taking the time to check my Portfolio Website!</bold>
        </div>
    )
}