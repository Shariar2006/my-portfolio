import {
    FaUser,
} from "react-icons/fa6";
import { BsServer } from "react-icons/bs";


const Project = () => {
    return (
        <div id='projects' className=' relative text-[#FFF1B0] my-10'>
            <h1 className="text-2xl font-bold text-center mt-10">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
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
                    <div className="mt-2 mb-3 text-xl">
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
                
            </div>
        </div>
    );
};

export default Project;