import airplane from "../media/Airplane.jpg"
import airplaneBooked from "../media/airplaneBooked.jpg"
import airplaneChoice from "../media/airplaneChoice.jpg"
import airplaneChosen from "../media/airplaneChosen.jpg"
import airplanePayment from "../media/airplanePayment.jpg"

const Airplane = () => {
    return ( 
    <div className="details">
        <h1>Airplane Reservation</h1>
        <div>This is a web application that allows users to search for flights and buy tickets. The application includes features such as a search bar that lets users search for flights based on their preferred dates and destinations, and a payment system that allows users to purchase tickets. The backend is built using Flask and SQLite, while the frontend is built using HTML, CSS, and JavaScript. The application is responsive and has a clean and modern design.</div>
        <div className="para">
            <h3>Main Page</h3>
            <img src={airplane} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                Main Page lets user search the database to fing flights that suits his needs.
                We are asked from and to where we're flying as well as when and if we want one or two-way flight.
            </div>
        </div>
        <div className="para">
            <h3>Choice page</h3>
            <img src={airplaneChoice} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                On choice page user is presented with flights that match his query. We are presented with more accurate time and price so we can choose the best flight.
            </div>
        </div>
        <div className="para">
            <h3>Chosen page</h3>
            <img src={airplaneChosen} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                Here we see details of chosen flight and we can select how many bags do we want to take with us.
            </div>
        </div>
        <div className="para">
            <h3>Payment page</h3>
            <img src={airplanePayment} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                There is stripe payment implemented so user can proceed with payment by his credit or debit card.
            </div>
        </div>
        <div className="para">
            <h3>Booked page</h3>
            <img src={airplaneBooked} alt="Not found" className="projectImage"></img>
            <div className="paraDesc">
                On this page user can see all the flights that was previously booked.
            </div>
        </div>
        <a href="https://github.com/wer08/Project"> GitHub</a>

    </div>
     );
}
 
export default Airplane;