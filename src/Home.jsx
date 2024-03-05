/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
} from "react-icons/fa6";
import Social from "./Social";
import resume from '/Shariar_Alam_Emon_resume.pdf'

const Home = () => {

    const socials = [
        {
            id: "facebook",
            Icon: <FaFacebookF />,
            url: "https://www.facebook.com/profile.php?id=100093272871863",
            color: "#1877F2",
        },
        {
            id: "insta",
            Icon: <FaInstagram />,
            url: "https://www.instagram.com/shariarnafis97",
            color: "#0072b1",
        },
        {
            id: "github",
            Icon: <FaGithub />,
            url: "https://github.com/Shariar2006",
            color: "#fff",
        },
    ];

    return (

        <div id="home" className="hero min-h-screen relative">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear"
                    }}
                    src="https://i.ibb.co/ScpqWSt/p-10.jpg" className="w-1/2 lg:w-1/4 rounded-full shadow-lg shadow-[#FFF1B0]"
                />


                <div className="lg:p-28">

                    <h1 className="text-2xl font-bold text-gray-300">Hello, It's me <br /> <span className="text-5xl text-gray-300 font-bold">Shariar Alam Emon</span></h1>
                    <h1 className="text-2xl font-bold text-gray-300 mt-3">And I'm a <span className="text-[#FFF1B0]">MERN Stack Developer</span></h1>
                    <p className="py-6 text-gray-300">I am a MERN Stack Developer specializing in frontend development for scalable web apps. I have basic idea of backend. I am committed to creating user friendly websites. Now I'm exploring Next.js. I like to see myself as a full stack developer.</p>

                    <a href={resume} download="Shariar Alam Emon Resume">
                        <button className="btn border border-[#FFF1B0] text-[#FFF1B0] hover:bg-[#FFF1B0] hover:text-[#1D232A] font-semibold bg-black">Download Resume</button>
                    </a>

                    <div className="flex mt-5 gap-10 text-xl cursor-pointer">
                        {
                            socials?.map((social, index) => <Social key={social.id} index={index} social={social}></Social>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;