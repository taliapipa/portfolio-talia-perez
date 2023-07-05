import Button from "../Shared/Button/Button"
import Photo from "../Assets/photoperfil.png"
import Figma from "../Assets/figmalogo.png"
import ReactLogo from "../Assets/reactlogo.png"
import JSLogo from "../Assets/jslogo.png"



function Hero() {

    return (
        <section className="flex flex-row mt-10 max-md:flex-col">
            <div className="flex flex-col w-[50%] align-center items-center m-10 p-10 max-md:w-[100%] max-md:p-3 max-md:m-0 max-lg:p-0">
                <h1 className="text-xl m-10 text-center font-mono max-md:m-0">
                Creating captivating digital experiences
                </h1>
                <p className="mb-10 text-center max-sm:text-xs max-sm:m-5">
                In my digital world, I fuse the elegance of design with the magic of code to create captivating and functional web experiences. With every line of code and every carefully designed pixel, I build a bridge between imagination and digital reality. 
                </p>
                <div className="max-ms:">
                <Button text="Contact me" />
                <Button text="More about me" />
                </div>
            </div>
            <div className="w-[50%] border-4 border-primary flex flex-col justify-end items-end max-md:w-[100%] max-sm: max-md:absolute max-md:pt-48 max-ms:pt-40">
                <img src={Photo} alt="Perfil" className="w-[70%] max-ms:w-[30%] max-md:w-[30%]"/>
                <img src={Figma} className="w-20 h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[30%] right-[5%]"/>
                <img src={ReactLogo} className="w-20 h-20 object-cover rounded-full border-l-8 border-gray-500 absolute top-[25%] right-[32%]"/>
                <img src={JSLogo} className="w-20 h-20 object-cover rounded-full border-l-8 border-yellow-200 absolute top-[70%] right-[35%]"/>
            </div>

        </section>

        )
}

export default Hero