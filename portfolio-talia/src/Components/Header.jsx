import Logo from "../Assets/Ilustración_sin_título.png"
import {RiMenu3Fill, RiCloseLine} from "react-icons/ri";
import { useState } from "react";

const Header =()=>{

    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <header className="flex items-center justify-between xl:justify-start w-full p-2 h-[10vh] font-mono z-50">
            <div className="w-1/3">
                <img src={Logo} alt="logo" className="w-[85%] xl:w-1/3  ml-20"/>
            </div>
            <nav className={`fixed bg-whit w-[80%] xl:w-full h-full ${
                showMenu ? "left-0" : "-left-full"}
                top-0 xl:static flex-1 flex flex-col xl:flex-row justify-center items-center gap-10 text-sm text-gray-400 transition-all`}>
                <a href="">
                    Home
                </a>
                <a href="">
                    About me
                </a>
                <a href="">
                    Projects
                </a>
            </nav>
            <button className="text-2xl p-2 xl:hidden" onClick={()=> setShowMenu(!showMenu)}> 
                {showMenu ? <RiCloseLine/> : <RiMenu3Fill/> };
            </button>
        </header>
    )
}

export default Header