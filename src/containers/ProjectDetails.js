import { useParams } from "react-router-dom";
import Fitness from "../components/Fitness";
import Airplane from "../components/Airplane";
import Messenger from "../components/Messenger";

const ProjectDetails = () => {
    const toTop = ()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    const {name} = useParams();

    return ( 
        <div className="projectDetails">
            {name === 'fitness' && 
            <Fitness />}
            {name === 'airplane' && 
            <Airplane />}
            {name === 'messenger' &&
            <Messenger />}
        <button className="top" onClick={toTop}>Back to top</button>
        </div>
     );
}
 
export default ProjectDetails;