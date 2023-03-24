import Mesenger_login from "../media/Mesenger_login.png"
import Mesenger_profile from "../media/Mesenger_profile.png"
import Messenger_home from "../media/Messenger_home.png"

const Messenger = () => {
    return (         
    <div className="details">
        <h1>Messenger</h1>
        <div>I developed a full-stack web application using Django, Django REST Framework, Channels, React, and Redux, along with Socket.IO for real-time communication. The application allows users to communicate with each other in real-time through a contact-based system, with features such as adding contacts and registering with Google or Facebook. The application is designed to run using Docker Compose, making setup and deployment a breeze.</div>
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
                User gets notification when new message is sent to him. App provides the ability to send text messages as well as pictures.
            </div>
        </div>
        <a href="https://github.com/wer08/Django_React_Project"> GitHub</a>
    </div> );
}
 
export default Messenger;