import Messenger_home from "../media/Messenger_home.png"
import airplane from "../media/Airplane.jpg"
import fitness from "../media/Fitness.jpg"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from "react"
import {CSSTransition, SwitchTransition} from 'react-transition-group'; 
import { Link } from "react-router-dom"

const Projects = () => {
    const nodeRef = useRef(null);

    const rightButton = <FontAwesomeIcon icon={faChevronRight} size="2x"/>
    const leftButton = <FontAwesomeIcon icon={faChevronLeft} size="2x"/>

    const [state, setState] = useState(null);

    useEffect(()=>{
        setState('fitness');
    },[])




    const handleClick = (e) => {
        const id = e.currentTarget.id;
        console.log(id);
        if (id === 'fitnessButton')
        {
            setState('airplane');
        }
        else if(id === 'airplaneButton')
        {
            setState('messenger');
        }
        else
        {
            setState('fitness')
        }
    }
    
    const handleClickLeft = (e) => {
        const id = e.currentTarget.id;
        console.log(id);
        if (id === 'fitnessButtonLeft')
        {
            setState('messenger');
        }
        else if(id === 'airplaneButtonLeft')
        {
            setState('fitness');
        }
        else
        {
            setState('airplane')
        }
    }

    


    return ( 
        <div className="projects">
            <SwitchTransition mode="out-in">
                <CSSTransition key={state} nodeRef={nodeRef} addEndListener={(done)=>nodeRef.current.addEventListener("transitionend", done, false)} classNames="project">
                <div ref={nodeRef}>
                {state === "fitness" &&
                
                    <div className="projectLayout">
                        <div className="next">
                            <button className="button" onClick={handleClickLeft} id='fitnessButtonLeft'>{leftButton}</button>
                        </div>
                        <Link to="/projects/fitness" className="linkToProject">

                        <div>
                            <img src={fitness} alt="Not found" className="projectImage"/>
                            <h2>FitnessApp</h2>
                        </div>

                        </Link>
                        <div className="next">
                            <button className="button" onClick={handleClick} id='fitnessButton'>{rightButton}</button>
                        </div>
                    </div>}
                
                {state === "airplane" &&
                    <div className="projectLayout">
                        <div className="next">
                            <button className="button" onClick={handleClickLeft} id='airplaneButtonLeft'>{leftButton}</button>
                        </div>   
                        <Link to="/projects/airplane" className="linkToProject">
                   
                        <div>
                            <img src={airplane} alt="Not found" className="projectImage"/>
                            <h2>AirplaneReservation</h2>
                        </div>

                        </Link>
                        <div className="next">
                            <button className="button" onClick={handleClick} id='airplaneButton'>{rightButton}</button>
                        </div>
                    </div>
                }
                {state === "messenger" &&
                    <div className="projectLayout">
                        <div className="next">
                            <button className="button" onClick={handleClickLeft} id='messengerButtonLeft'>{leftButton}</button>
                        </div>
                        <Link to="/projects/messenger" className="linkToProject">

                        <div>
                            <img src={Messenger_home} alt="Not found" className="projectImage"/>
                            <h2>Messenger</h2>
                        </div>

                        </Link>
                        <div className="next">
                            <button className="button" onClick={handleClick} id='messengerButton'>{rightButton}</button>
                        </div>
                    </div>}
                </div>
                </CSSTransition>
            </SwitchTransition>


        </div>
     );
}
 
export default Projects
