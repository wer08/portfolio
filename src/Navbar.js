import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Portfolio</h1>
            <div className="links">
                <Link to="/">Main</Link>
                <Link to="/projects">All projects</Link>
                <Link to="/about">About me</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;