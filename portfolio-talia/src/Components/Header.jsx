import Logo from "../Assets/Ilustración_sin_título 4.png"
import {RiMenu3Fill, RiCloseLine} from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =()=>{

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="relative top-0 left-0 right-0 z-50 flex items-center justify-between xl:justify-start w-full p-2 h-[10vh] font-mono">
            <div className="w-1/3">
                <Link to='/'><img src={Logo} alt="logo" className="w-[85%] xl:w-1/3  ml-20"/></Link>
            </div>
            <nav className={`fixed bg-white w-[80%] xl:w-full h-full ${
                showMenu ? "left-0" : "-left-full"}
                top-0 xl:static flex-1 flex flex-col xl:flex-row justify-center items-center gap-10 text-sm text-gray-400 transition-all`}>

                    <Link to='/' className="hover:text-gray-600">Home</Link>
    

                    <Link to='/portfolio' className="hover:text-gray-600">Portfolio</Link>
    

                    <Link to='/contact' className="hover:text-gray-600">Contact</Link>
    
            </nav>
            <button className="text-2xl p-2 xl:hidden" onClick={()=> setShowMenu(!showMenu)}> 
                {showMenu ? <RiCloseLine/> : <RiMenu3Fill/> }
            </button>
        </header>
    )
}

export default Header