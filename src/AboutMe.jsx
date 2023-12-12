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

import './App.css'

const AboutMe = () => {
    return (
        <div id="about" className="h-screen">
            <section className="text-gray-600 body-font">
                <div className="container flex flex-wrap  mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <h2 className=" font-bold text-[#EB671C] tracking-wider text-4xl mb-3">About me</h2>

                        <img src="https://nus.edu.sg/osa/images/default-source/osa/1.1/hostel-admission/mealplans.jpg?sfvrsn=ea81ea7a_2" alt="" />
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12 mx-auto">
                        <h2 className=" font-bold text-[#FFF1B0] mx-auto tracking-wider text-4xl mb-20">My Skills</h2>

                        <div className='flex mx-auto gap-5'>
                            <img className='w-16 rounded-full' src={html} alt="" />
                            <img className='w-16 rounded-full' src={css} alt="" />
                            <img className='w-16 rounded-full' src={js} alt="" />
                        </div>
                        <div className='flex mx-auto gap-5 my-5'>
                            <img className='w-16 rounded-full' src={react} alt="" />
                            <img className='w-16 rounded-full' src={firebase} alt="" />
                            <img className='w-16 rounded-full' src={vute} alt="" />
                            <img className='w-16 rounded-full' src={tailwind} alt="" />
                        </div>
                        <div className='flex mx-auto gap-5'>
                        <img className='w-16 rounded-full' src={mongoDB} alt="" />
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