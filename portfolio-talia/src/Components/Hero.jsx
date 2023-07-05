import Button from "../Shared/Button/Button"
import Photo from "../Assets/photoperfil.png"

function Hero() {

    return (
        <section className="flex flex-row mt-10">
            <div className="flex flex-col w-[50%] align-center items-center m-10 p-10">
                <h1 className="text-xl m-10 text-center font-mono">
                Creating captivating digital experiences
                </h1>
                <p className="mb-10 text-center">
                In my digital world, I fuse the elegance of design with the magic of code to create captivating and functional web experiences. With every line of code and every carefully designed pixel, I build a bridge between imagination and digital reality. 
                </p>
                <div>
                <Button text="Contact me" />
                <Button text="More about me" />
                </div>
            </div>
            <div className="w-[50%] border-4 border-primary flex flex-col justify-end items-end">
                <img src={Photo} alt="Perfil" className="w-[70%]"/>
            </div>

        </section>

        )
}

export default Hero