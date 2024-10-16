import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";


const Layout = () => {
    return (
        <div>
            <div className="mb-8">
            <Nav></Nav>
            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;