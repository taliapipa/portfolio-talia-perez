import Asgaya from "../Assets/mockAsgaya.jpg"
import MockUp from "../Assets/Mockup2.jpg"
import Wireframes from "../Assets/mockWireframes.jpg"
import Button from "../Shared/Button/Button"
import CV from "../Assets/CV-Talia_Perez.pdf"


const Portfolio =()=>{


    return(
        <div className="portfolio">
            <div className="m-20 flex flex-col justify-center items-center">
                <h1 className="text-xl font-mono">Portfolio</h1>
                <p className="text-center m-5">Some of my most exciting projects, along with the challenges I faced.</p>
            </div>
            <div>
                <div className="m-10 flex flex-row border-4 border-primary">
                    <img src={MockUp} alt="code" className="w-[50%]"/>
                    <div className="p-10 flex flex-col items-center justify-center">
                        <h3 className="text-base font-monor p-5">Front-End Developer</h3>
                        <p className="text-justify">In my Github you will find projects with technologies and tools that I am passionate about, from HTML5, CSS3 and modern JavaScript to frameworks like React and Angular.</p>
                        <a href="https://github.com/taliapipa" target="_blank" rel="noopener noreferrer">
                        <Button text="Watch my Github" />
                        </a>
                    </div>
                </div>

                <div className="m-10 flex flex-row border-4 border-primary">
                    <div className="p-10 flex flex-col items-center justify-center">
                        <h3 className="text-base font-mono p-5">Asgaya</h3>
                        <p className="text-justify">My creative web designs that highlight beauty and functionality. Each project has been created with the user experience in mind and with the client's goals in mind. The most outstanding is Asgaya, a professional project about an Online Farm.</p>
                        <a href="https://www.figma.com/proto/mTMFCWV07F9p2V0bGuOO3l/TFM_TALIA-PEREZ?node-id=77-925&starting-point-node-id=77%3A925&mode=design&t=JlL5sVhO8OMif4j4-1" target="_blank" rel="noopener noreferrer">
                        <Button text="Watch Asgaya Prototype" />
                        </a>
                    </div>
                    <img src={Asgaya} alt="Asgaya" className="w-[50%]"/>
                </div>

                <div className="m-10 flex flex-row border-4 border-primary">
                    <img src={Wireframes} alt="wireframes" className="w-[50%]"/>
                    <div className="p-10 flex flex-col items-center justify-center">
                        <h3 className="text-base font-mono p-5">Wireframes</h3>
                        <p className="text-justify">Skills to plan and structure web projects through wireframes and mockups. These diagrams will allow you to visualize the information architecture before starting the construction.</p>
                        <a
                            href={CV}
                            download="CV-Talia_Perez.pdf"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Button className="boton-descarga" text="Download my CV"/>
                        </a>
                                    </div>
                </div>

            </div>
        </div>

    )
}

export default Portfolio