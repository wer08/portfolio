import mail from "./media/mail.jpg"
import mailArchive from "./media/mailArchive.jpg"
import mailCompose from "./media/mailCompose.jpg"
import mailDetails from "./media/mailDetails.jpg"
import mailSent from "./media/mailSent.jpg"
const Mail = () => {
    return ( 
    <div className="details">
        <h1>Mail</h1>
        <div>This Web Application is build using Django on the back-end but all my work was on Javascript. It's a Single-page application. </div>
        <div className="para">
            <h3>Inbox page</h3>
            <img src={mail} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                In Inbox user can see all received, unarchived messages. Read images have different color and font. 
            </div>
        </div>
        <div className="para">
            <h3>Archive page</h3>
            <img src={mailArchive} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                In archive user can see all archived messages and can disarchive them.  
            </div>
        </div>
        <div className="para">
            <h3>Compose</h3>
            <img src={mailCompose} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                In compose view user can write a new e-mail.  
            </div>
        </div>
        <div className="para">
            <h3>Mail Details</h3>
            <img src={mailDetails} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                When clicked on message mail details page is opened. We can see body of the mail and have the ability to respond.
            </div>
        </div>
        <div className="para">
            <h3>Sent page</h3>
            <img src={mailSent} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                On this page user can see all the sent messages.
            </div>
        </div>
        <a href="https://github.com/wer08/Mail"> GitHub</a>
    </div>

     );
}
 
export default Mail;