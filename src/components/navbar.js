import React, { useState } from "react";
import IMAGE from "../assets/logo.png";

const navLinks = [
    {
        title: "About",
        path: 1,
    },
    {
        title: "Projects",
        path: 2,
    },
    {
        title: "Contact",
        path: 3,
    },
];

const MenuOverlay = ({ links, ParallaxRef }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <p onClick={() => ParallaxRef.scrollTo(link.path)}>
                        {link.title}
                    </p>
                </li>
            ))}
        </ul>
    );
};

const Navbar = ({ParallaxRef}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-30 bg-[#0C0C0C]">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <button href={"/"} >
                    <img src={IMAGE} alt={"logo"} width={50} height={50}/>
                </button>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <p>|||</p>
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <p>X</p>
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <p className="text-white" onClick={() => ParallaxRef.scrollTo(link.path)}>
                                    {link.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} ParallaxRef={ParallaxRef} /> : null}
        </nav>
    );
};

export default Navbar;
