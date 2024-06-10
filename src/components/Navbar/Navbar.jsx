import NavLogo from "./NavLogo.jsx";
import NavLinks from "./NavLinks.jsx";


function Navbar() {
    return (
        <>
            <nav className="bg-gray-50 shadow">
                <div className="container py-4 flex items-center justify-between">
                    <NavLogo/>
                    <NavLinks/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;