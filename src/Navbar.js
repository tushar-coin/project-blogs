



import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>the Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link className="padder" to="/">Home</Link>
                {/* <a href="/create">New Blog</a> */}
                <Link className="padder" to="/create">create</Link>
            </div>
        </nav>
    );
}

export default Navbar;