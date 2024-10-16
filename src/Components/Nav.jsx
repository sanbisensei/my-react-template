import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex justify-center items-center gap-4">
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Nav;