/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa6";
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import './project.css'
import { useRef } from "react";


const projects = [
    {
        title: "Brainic Mart",
        img: "https://i.ibb.co.com/yFgHD2vV/Screenshot-2025-04-13-192744.png",
        demo: "https://brainicmart.brainicsoft.xyz/",
  desc: "Brainic Mart is a full-featured e-commerce platform developed during my internship. This is my company project. It includes product browsing, cart management, and order handling. Built using Next.js, TypeScript, Redux Toolkit (RTK Query), Node-js, Express-js, MongoDB, Dot-env, Cors, JWT and some npm packages. It offers a seamless shopping experience and a responsive, modern design. This was a company-level project developed under real-world scenarios."
    },
    {
        title: "Insight Forge",
        img: "https://i.ibb.co/smLsc5g/Screenshot-2024-03-05-174845.png",
        demo: "https://insight-forge-psi.vercel.app/",
        client: "https://github.com/shoptorshiria78/insight-forge",
        server: "https://github.com/shoptorshiria78/insight-forge-server",
        desc: " Insight forge is a technical question answering website. This is a team project. There are 3 roles. Next -js, Tailwind CSS, MUi, Node-js, Express-js, Mongoose, Dot-env, Cors, Firebase, JWT, sslcommerz payment methods and some npm packages are used."
    },
    {
        title: "Chef's Place",
        img: "https://i.ibb.co/b3RZ5bR/chef-place.png",
        demo: "https://chef-place.web.app/",
        client: "https://github.com/Shariar2006/chef-place-client",
        server: "https://github.com/Shariar2006/chef-place-server",
        desc: " Chef's Place is a hostel food website. Here hostel food is controlled. There are 2 roles here.Used React-js, Tailwind CSS, Node-js, Express-js, MongoDB, Dot-env, Cors, Firebase, JWT, Stripe-js for payment method, and some npm packages."
    }
];

const Single = ({ project }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, 
        // offset: ['start start', 'end start']
     })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

    return <section className="h-screen mt-4 lg:mt-0 items-center flex" >
        <div className="container w-full h-full overflow-hidden flex-row lg:flex justify-center items-center gap-8 text-[#FFF1B0]">
            <div className="flex-1" ref={ref}>
                <img src={project?.img} alt={project?.title} />
            </div>
            <motion.div className="textContainer flex-1 space-y-5" style={{y}}>
                <h2 className="text-3xl font-bold">{project?.title}</h2>
                <p className="text-[#d8cc94]">{project?.desc}</p>
                <div className="wrapper">
                    <a href={project?.demo} className="btn mr-4 bg-black text-[#FFF1B0] border border-[#FFF1B0]" rel="noreferrer" target="_blank">See Demo</a>
                    {project?.client &&
                    <a href={project?.client} className="btn mr-4 bg-black text-[#FFF1B0] border border-[#FFF1B0]" rel="noreferrer" target="_blank">Client Site <FaGithub></FaGithub></a>
                    }
                    {project?.server && 
                    <a href={project?.server} className="btn mr-4 mt-4 md:mt-0 bg-black text-[#FFF1B0] border border-[#FFF1B0]" rel="noreferrer" target="_blank">Server Site <FaGithub></FaGithub></a>
                    }
                </div>
            </motion.div>
        </div>
    </section>
}

const Project = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div id='projects' className='projects' ref={ref}>
            <div className="progres">
                <h1 className="">My Projects</h1>
                <motion.div style={{ scaleX }} className="progresBar"></motion.div>
            </div>

            {
                projects?.map(project => (
                    <Single project={project} key={project.title}></Single>
                ))
            }

        </div>
    );
};

export default Project;