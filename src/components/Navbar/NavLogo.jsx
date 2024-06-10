import {PiReadCvLogoFill} from "react-icons/pi";


function NavLogo() {
    return (
        <>
            <div className="text-2xl">
                <a href="/" className="flex items-center gap-2">
                    <PiReadCvLogoFill/>
                    <span className="font-bold">CVit.</span>
                </a>
            </div>
        </>
    );
}

export default NavLogo;