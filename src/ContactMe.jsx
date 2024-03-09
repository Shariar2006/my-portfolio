import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa6';
import Social from './Social';




const ContactMe = () => {

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cfqt9pi', 'template_xvg2sff', form.current, 'CIo5vzBauuJLda17P')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Email send successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (error) => {
                console.log(error.text);
            });
    };
    

    return (
        <div id="contact" className='flex flex-col justify-center items-center mt-96 my-10 mx-auto text-[#FFF1B0]'>
            <h1 className='text-4xl font-bold mb-5'>Contact Me</h1>
            <div className='flex flex-col-reverse lg:flex lg:flex-row-reverse lg:gap-20 items-center'>

                <form data-aos="fade-right" className='relative flex-1 duration-200  rounded-lg mt-5 px-5 py-3  shadow-lg' ref={form} onSubmit={sendEmail}>
                    <div className="form-control gap-1">
                        <label>Name</label>
                        <input className=" input input-bordered text-[#EB671C] w-full lg:w-96 rounded-sm" type="text" name="user_name" />
                    </div>

                    <div className="form-control my-3 gap-1">
                        <label>Email</label>
                        <input className=" input input-bordered text-[#EB671C] w-full lg:w-96 rounded-sm" type="email" name="user_email" />
                    </div>

                    <div className="form-control gap-1">
                        <label>Message</label>
                        <textarea className=" input input-bordered text-[#EB671C] w-full lg:w-96 rounded-sm h-24" name="message" />
                    </div>



                    <input className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C]  text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold w-full mt-5 mb-4' type="submit" value="Send" />
                </form>
                <div className=''>
                    <div className='gap-5'>
                        <MdOutlineLocationOn className='text-2xl border-2 border-[#FFF1B0] w-10 h-10 p-1 rounded-full   ' />
                        <p>Hat Gopalpur, Sadar Jhenidah, Jhenida, <br /> Dhaka, Bangladesh.</p>
                    </div>
                    <div className='my-5'>
                        <MdOutlineMailOutline className='text-2xl border-2 border-[#FFF1B0] w-10 h-10 p-1 rounded-full ' />
                        <p>shariarnafis86@gmail.com</p>
                    </div>
                    <div className='gap-5'>
                        <PiPhoneCallLight className='text-2xl border-2 border-[#FFF1B0] w-10 h-10 p-1 rounded-full  ' />
                        <p>+880 1780-051028</p>
                    </div>
                    <div className="flex gap-10 text-xl cursor-pointer">
                    {
                        socials?.map((social, index) => <Social key={social.id} index={index} social={social}></Social>)
                    }
                </div>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;


