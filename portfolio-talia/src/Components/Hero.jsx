import Button from "../Shared/Button/Button"
import Photo from "../Assets/photoperfil.png"
import Figma from "../Assets/figmalogo.png"
import ReactLogo from "../Assets/reactlogo.png"
import JSLogo from "../Assets/jslogo.png"
i


function Hero() {
    

    return (
        <body>
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
                    </div>
                </div>
                <div className="w-[50%] border-4 border-primary flex flex-col justify-end items-end max-md:w-[100%] max-md:absolute max-md:pt-72 max-ms:pt-40">
                    <img src={Photo} alt="Perfil" className="w-[70%] max-ms:w-[30%] max-md:w-[30%]"/>
                    <img src={Figma} className=" max-md:w-5 max-md:h-5 w-20 h-20 object-cover rounded-full border-l-8 border-gray-600 absolute max-md:top-[70%]  top-[30%] right-[5%]"/>
                    <img src={ReactLogo} className="max-md:w-5 max-md:h-5 w-20 h-20 object-cover rounded-full border-l-8 border-gray-500 absolute max-md:top-[75%] top-[25%] right-[32%]"/>
                    <img src={JSLogo} className="max-md:w-5 max-md:h-5 w-20 h-20 object-cover rounded-full border-l-8 border-yellow-200 absolute max-md:top-[85%] top-[70%] right-[35%]"/>
                </div>
            </section>

            <section className="bg-primary mt-20 flex flex-col justify-center items-center rounded-t-3xl text-white p-10">
                <div className="text-white">
                    <h1 className="text-xl m-10 text-center font-mono max-md:m-0">
                        About me
                    </h1>
                    <p className="mb-10 text-center max-sm:text-xs max-sm:m-5">
                        I am a passionate front-end developer and web designer with a creative approach and a passion for creating captivating digital experiences.
                        I love combining my design and development skills to bring to life engaging and functional websites that comply with the latest industry trends and best practices.
                        With years of experience working on challenging projects, I have a solid knowledge of HTML, CSS and JavaScript, as well as experience using modern frameworks and tools like React and Vue.js.
                        I always keep myself updated with the latest technologies and trends in the web development world, which allows me to create innovative and optimized solutions to provide the best user experience.
                        In addition to my passion for programming, I also value collaboration and teamwork. I love working with clients and colleagues to understand their needs and create solutions that exceed their expectations.
                        If you are looking for a committed, creative and highly skilled front-end developer and web designer, I am ready to help you take your ideas to the next level!
                    </p>
                </div>
            </section>

        </body>

        )
}

export default Hero