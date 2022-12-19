import mail from "./media/mail.jpg"
import airplane from "./media/Airplane.jpg"
import fitness from "./media/Fitness.jpg"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import ReactCSSTransitionGroup from 'react-transition-group'; 

const Projects = () => {

    const rightButton = <FontAwesomeIcon icon={faChevronRight} size="2x"/>

    const [isFadingFitness, setIsFadingFitness] = useState(false);

    const [isFadingAirplane, setIsFadingAirplane] = useState(false);

    const [isFadingMail, setIsFadingMail] = useState(false);

    useEffect(()=>{
        setIsFadingMail(true);
    },[])




    const handleClick = (e) => {
        const id = e.currentTarget.id;
        console.log(id);
        if (id === 'fitnessButton')
        {
            setIsFadingFitness(true);
        }
        else if(id === 'airplaneButton')
        {
            setIsFadingAirplane(true);
        }
        else
        {
            setIsFadingMail(true);
        }

    }


    return ( 
        <div className="projects">
            <div className={isFadingMail ? "project revealed" : "project"}>
                <div>
                    <img src={fitness} alt="Not found" className="projectImage"/>
                    <h2>FitnessApp</h2>
                </div>
                <div className="next">
                    <button className="button" onClick={handleClick} id='fitnessButton'>{rightButton}</button>
                </div>
            </div>
            <div className={isFadingFitness ? "project revealed" : "project"}>
                <div>
                    <img src={airplane} alt="Not found" className="projectImage"/>
                    <h2>Airplane Reservation</h2>
                </div>
                <div className="next">
                    <button className="button" onClick={handleClick} id='airplaneButton'>{rightButton}</button>
                </div>

            </div>
            <div className={isFadingAirplane ? "project revealed" : "project"}>
                <div>
                    <img src={mail} alt="Not found" className="projectImage"/>
                    <h2>Mail</h2>
                </div>
                <div className="next">
                    <button className="button" onClick={handleClick} id='mailButton'>{rightButton}</button>
                </div>
            </div>

        </div>
     );
}
 
export default Projects
