import LandingSection from "./sections/Landing"
import ProfileSection from "./sections/profile"

export default function SimpleClient(){
    return(
        <div>
            <div className="introductionBG"/>
            <h1 className="introduction fadeAnimation">WELCOME TO MY WEBSITE!</h1>
            <div>
                <LandingSection/>
                <ProfileSection/>
            </div>
        </div>
    )
}