import mongoDB from './assets/mongoDB.png'
import nodeJs from './assets/node-js.png'
import vsCode from './assets/vsCode.png'
import vute from './assets/vute.png'
import tailwind from './assets/tailwind.png'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import react from './assets/react-js.png'
import firebase from './assets/firebase.png'
import mongoose from './assets/mongoose.png'
import mui from './assets/mui.png'

import './App.css'

const AboutMe = () => {
    return (
        <div id="about" className=" my-16">
            <section className="text-gray-600 body-font">
                <div className="container flex flex-wrap  mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <h2 className=" font-bold text-[#FFF1B0] tracking-wider text-4xl mb-10">About me</h2>

                        <p className='text-xl text-[#bab080]'>
                        I am a MERN stack developer specializing in frontend development for scalable web apps. I have some idea of backend. I am committed to creating user friendly websites. I use html, css, tailwind css, daisy ui, MUi, react-js, firebase, vite, react-router-dom etc for frontend development. For backend development use express-js, mongoDB, mongoose, cors, dot-env, JWT etc. My next aim is to learn Next-js, 3-js, SQL, Material Ui etc. I like to see myself as a full stack developer.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12 mx-auto">
                        <h2 className=" font-bold text-[#FFF1B0] mx-auto tracking-wider text-4xl mb-20">My Skills</h2>

                        <div className='flex mx-auto gap-5'>
                            <img className='w-16 rounded-full' src={html} alt="" />
                            <img className='w-16 rounded-full' src={css} alt="" />
                            <img className='w-16 rounded-full' src={js} alt="" />
                            <img className='w-16 rounded-full' src={react} alt="" />
                        </div>
                        <div className='flex mx-auto gap-5 my-5'>
                            <img className='w-16 rounded-full' src={firebase} alt="" />
                            <img className='w-16 rounded-full' src={vute} alt="" />
                            <img className='w-16 rounded-full' src={tailwind} alt="" />
                            <img className='w-16 rounded-full bg-[#232937]' src={mui} alt="" />
                        </div>
                        <div className='flex mx-auto gap-5'>
                        <img className='w-16 rounded-full' src={mongoDB} alt="" />
                        <img className='w-16 rounded-full bg-[#232937]' src={mongoose} alt="" />
                            <img className='w-16 rounded-full' src={nodeJs} alt="" />
                            <img className='w-16 rounded-full' src={vsCode} alt="" />
                        </div>




                    </div>
                </div>
            </section>
            

        </div>
    );
};

export default AboutMe;