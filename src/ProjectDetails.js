import { useParams } from "react-router-dom";
import Fitness from "./Fitness";
import Airplane from "./Airplane";
import Mail from "./Mail";

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
            {name === 'mail' && 
            <Mail />}
        <button className="top" onClick={toTop}>Back to top</button>
        </div>
     );
}
 
export default ProjectDetails;