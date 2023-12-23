/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa6";
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import './project.css'
import { useRef } from "react";


const projects = [
    {
        title: "Chef's Place",
        img: "https://i.ibb.co/b3RZ5bR/chef-place.png",
        demo: "https://chef-place.web.app/",
        client: "https://github.com/Shariar2006/chef-place-client",
        server: "https://github.com/Shariar2006/chef-place-server",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, neque iusto? Placeat ipsam corrupti a dolorem vitae est totam? Tempora nemo laudantium veniam dolorum molestias ullam officiis doloribus omnis fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a officiis magnam fugiat at illo obcaecati perspiciatis pariatur. "
    },
    {
        title: "Stack Jobs",
        img: "https://i.ibb.co/9gV70FW/stack-jobs.png",
        demo: "https://stack-jobs.surge.sh/",
        client: "https://github.com/Shariar2006/stack-jobs-client",
        server: "https://github.com/Shariar2006/stack-jobs-server",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, neque iusto? Placeat ipsam corrupti a dolorem vitae est totam? Tempora nemo laudantium veniam dolorum molestias ullam officiis doloribus omnis fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a officiis magnam fugiat at illo obcaecati perspiciatis pariatur. "
    },
    {
        title: "Tec and Elec",
        img: "https://i.ibb.co/zJRjsFK/tec-and-elec.png",
        demo: "https://technology-and-electronics.surge.sh/",
        client: "https://github.com/Shariar2006/technology-and-electronics-client",
        server: "https://github.com/Shariar2006/technology-and-electronics-server",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, neque iusto? Placeat ipsam corrupti a dolorem vitae est totam? Tempora nemo laudantium veniam dolorum molestias ullam officiis doloribus omnis fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a officiis magnam fugiat at illo obcaecati perspiciatis pariatur. "
    },
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
                <div className="wrapper ">
                    <a href={project?.demo} className="btn mr-4 text-[#FFF1B0] border border-[#FFF1B0]">See Demo</a>
                    <a href={project?.client} className="btn mr-4 text-[#FFF1B0] border border-[#FFF1B0]">Client Site <FaGithub></FaGithub></a>
                    <a href={project?.server} className="btn mr-4 text-[#FFF1B0] border border-[#FFF1B0]">Server Site <FaGithub></FaGithub></a>
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

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                <div className="border p-3 rounded-md border-gray-700 ">
                    <div>
                        <a className="" href="https://chef-place.web.app/">
                            <img className="h-full cursor-pointer" src="https://i.ibb.co/b3RZ5bR/chef-place.png" alt="" />
                        </a>

                        <div className="mt-2 text-xl">
                            <h1 className="flex gap-5 items-center">Client Site Code: <a href="https://github.com/Shariar2006/chef-place-client"><FaUser></FaUser></a></h1>
                            <h1 className="flex gap-5 items-center">Server Site Code: <a href="https://github.com/Shariar2006/chef-place-server"><BsServer></BsServer></a></h1>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="border p-3 rounded-md border-gray-700">
                        <a href="https://stack-jobs.surge.sh/">
                            <img className="h-full cursor-pointer" src="https://i.ibb.co/9gV70FW/stack-jobs.png" alt="" />
                        </a>
                        <div className="mt-2 mb-4 text-xl">
                            <h1 className="flex gap-5 items-center">Client Site Code: <a href="https://github.com/Shariar2006/stack-jobs-client"><FaUser></FaUser></a></h1>
                            <h1 className="flex gap-5 items-center">Server Site Code: <a href="https://github.com/Shariar2006/stack-jobs-server"><BsServer></BsServer></a></h1>
                        </div>
                    </div>
                </div>
                <div className="border p-3 rounded-md border-gray-700">
                    <div>
                        <a href="https://technology-and-electronics.surge.sh/">
                            <img className="h-full cursor-pointer" src="https://i.ibb.co/zJRjsFK/tec-and-elec.png" alt="" />
                        </a>
                        <div className="mt-2 text-xl">
                            <h1 className="flex gap-5 items-center">Client Site Code: <a href="https://github.com/Shariar2006/technology-and-electronics-client"><FaUser></FaUser></a></h1>
                            <h1 className="flex gap-5 items-center">Server Site Code: <a href="https://github.com/Shariar2006/technology-and-electronics-server"><BsServer></BsServer></a></h1>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default Project;