import fitnessCommunity from "./media/fitnessCommunity.jpg"
import fitnessDashboard from "./media/fitnessDashboard.jpg"
import fitnessDiet from "./media/fitnessDiet.jpg"
import fitnessExercise from "./media/fitnessExercise.jpg"

const Fitness = () => {
    return ( 
        <div className="details">
            <h1>Fitness</h1>
            <div>This Web application was build using Django and PostgreSQL for the back-end and HTML, CSS and vanilla JS for front-end</div>
            <div className="para">
                <h3>Exercise tab</h3>
                <img src={fitnessExercise} alt="Not found" className="projectImage"></img>
                <div className="paraDesc">
                    Exercise tab of fitnessApp let's user create workout routine best suited for his personal goals.
                    If user doesn't have personal routine, form will be displayed to get all the necessary information.
                </div>
            </div>
            <div className="para">
                <h3>Diet tab</h3>
                <img src={fitnessDiet} alt="Not found" className="projectImage"></img>
                <div className="paraDesc">
                    Diet tab provides user with different menu every day. Celery is generating new set of breakfast, lunch, dinner and snack recipies everyday.
                    If any of the meals doesn't seem tasty to user he can switch it just by clicking a button.
                </div>
            </div>
            <div className="para">
                <h3>Community tab</h3>
                <img src={fitnessCommunity} alt="Not found" className="projectImage"></img>
                <div className="paraDesc">
                    In community tab we are presented with facebook-like page. Users have the ability to add new posts and comment on posts of other users.
                    On this page I've implemented infinite scroll to ease user experience.
                </div>
            </div>
            <div className="para">
                <h3>Dashboard tab</h3>
                <img src={fitnessDashboard} alt="Not found" className="projectImage"></img>
                <div className="paraDesc">
                    Dashboard Page displays current calorie balance as well as lets user add meals or exercise to said balance. There is also a chart 
                    of remaining calories from last 7 days. 
                    Below all that we can see all the posts from user.
                </div>
            </div>
            <a href="https://github.com/wer08/capstone"> GitHub</a>
        </div>
     );
}
 
export default Fitness;