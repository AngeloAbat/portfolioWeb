import LandingSection from "./sections/Landing"
import ProfileSection from "./sections/profile"
import ContactSection from "./sections/Contact"

export default function SimpleClient(){
    return(
        <div>
            <div className="introductionBG hideMe" />
            <h1 className="introduction fadeAnimation hideMe">WELCOME TO MY WEBSITE!</h1>
            <div>
                <LandingSection/>
                <ProfileSection/>
                <ContactSection/>
            </div>
        </div>
    )
}