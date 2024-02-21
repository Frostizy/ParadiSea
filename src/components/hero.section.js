import React from 'react';
import {TypeAnimation} from "react-type-animation";
import IMAGE from "../assets/portfolio_image.png";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 mb-5 lg:mb-0">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-700">
                            Hello, I'm {" "}
                        </span>
                        <br/>
                        <TypeAnimation sequence={[
                            "Frostizy", 1000,
                            "Web Developer", 1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}/>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Je suis Étudiant en informatique en Web@cadémie à Epitech Lille.
                        <br/>
                        Je suis en première année, en recherche d'une alternance pour Septembre 2024.
                    </p>
                    <div>
                        <button
                            className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-900 to-red-700 hover:bg-slate-200 text-white">
                            Contactez-moi
                        </button>
                    <button className="px-1 py-1 rounded-full sm:w-fit bg-gradient-to-br from-blue-900 to-red-700 text-white mt-3">
                        <span className="block bg-[#101720] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </button>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#0C0C0C] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative z-20">
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
                            {/*<AnimatedAstronaut />*/}
                            <img width={300} height={300} src={IMAGE} alt={"Profil"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
