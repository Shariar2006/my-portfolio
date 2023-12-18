import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const ContactMe = () => {

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
            <h1 className='text-2xl font-bold'>Contact Me</h1>
            <form className='relative duration-200 backdrop-blur-md rounded-lg mt-5 px-5 py-3  shadow-lg' ref={form} onSubmit={sendEmail}>
                <div className="form-control">
                    <label>Name</label>
                    <input className=" input input-bordered text-[#FFF1B0] w-96 rounded-sm" type="text" name="user_name" />
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input className=" input input-bordered text-[#FFF1B0] w-96 rounded-sm" type="email" name="user_email" />
                </div>

                <div className="form-control">
                    <label>Message</label>
                    <textarea className=" input input-bordered text-[#FFF1B0] w-96 rounded-sm h-24" name="message" />
                </div>



                <input  className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C]  text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold w-full my-4' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactMe;


