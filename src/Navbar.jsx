import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import { useState } from "react";
import Menu from "./Menu";



const Navbar = () => {


  const menus = [
    {
      id: 'home',
      uri: '#home',
      Icon: <FaHouse></FaHouse>,
      name: "Home",
    },
    {
      id: "about",
      uri: "#about",
      Icon: <FaUser></FaUser>,
      name: "About",
    },
    {
      id: "skills",
      uri: "#skills",
      Icon: <FaRenren></FaRenren>,
      name: "Skills",
    },
    {
      id: "projects",
      uri: "#projects",
      Icon: <FaDiagramProject></FaDiagramProject>,
      name: "Projects",
    },
    {
      id: "contact",
      uri: "#contact",
      Icon: <FaEnvelope></FaEnvelope>,
      name: "Contact",
    },
  ];

  return (
    <div className="fixed bottom-0 right-0 lg:top-0 lg:mr-3 w-full h-32 lg:h-screen lg:w32 flex justify-center lg:justify-end items-end lg:items-center pb-8 lg:pb-0 z-50 ">
      <div className="px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col gap-12 items-center justify-center duration-200 backdrop-blur-md">
        {
          menus?.map((item) => 
          <Menu key={item.id} item={item}></Menu>
          )
        }
      </div>

    </div>
  );
};

export default Navbar;