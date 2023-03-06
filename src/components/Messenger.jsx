import Mesenger_login from "../media/Mesenger_login.png"
import Mesenger_profile from "../media/Mesenger_profile.png"
import Messenger_home from "../media/Messenger_home.png"

const Messenger = () => {
    return (         
    <div className="details">
        <h1>Messenger</h1>
        <div>This Web application was build using Django and PostgreSQL for the back-end and CSS and React in front-end</div>
        <div className="para">
            <h3>Login tab</h3>
            <img src={Mesenger_login} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                In Login tab I've implemented authorization using Djoser. In includes sending confirmation mail. 
                In addition there is an option to log in using google account or facebook(only for testers)
            </div>
        </div>
        <div className="para">
            <h3>Profile tab</h3>
            <img src={Mesenger_profile} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                In profile tab user has the ability to change personal information and his profile picture. 
            </div>
        </div>
        <div className="para">
            <h3>Home tab</h3>
            <img src={Messenger_home} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                This is the main communicator.User has the ability to serach for contacts and message them. There is an emoji selector implemented.
            </div>
        </div>
        <a href="https://github.com/wer08/Django_React_Project"> GitHub</a>
    </div> );
}
 
export default Messenger;