import Swal from 'sweetalert2';
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { useRef } from 'react';

const ContactMe = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(e.target)
    // Send the form
    const form = formRef.current;
    if (form) {
      fetch("https://formspree.io/f/xoverbdv", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })
        .then(response => {
            console.log(response)
          if (response.ok) {
            Swal.fire({
              icon: "success",
              title: "Email sent successfully!",
              showConfirmButton: false,
              timer: 1500
            });
            form.reset();
          } else {
            console.log(response)
            Swal.fire({
              icon: "error",
              title: "Failed to send email!",
              text: "Please try again later.",
            });
          }
        });
    }
  };

  return (
    <div id="contact" className='flex flex-col justify-center items-center mt-96 my-10 mx-auto text-[#FFF1B0]'>
      <h1 className='text-4xl font-bold mb-5'>Contact Me</h1>
      <div className='flex flex-col-reverse lg:flex lg:flex-row-reverse lg:gap-20 items-center'>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          data-aos="fade-right"
          className='relative flex-1 duration-200 rounded-lg mt-5 py-3 shadow-lg'
        >
          <div className="md:form-control gap-1">
            <label>Name</label>
            <input
              className="input input-bordered text-[#EB671C] w-full lg:w-96 rounded-sm"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="md:form-control my-3 gap-1">
            <label>Email</label>
            <input
              className="input input-bordered text-[#EB671C] w-full lg:w-96 rounded-sm"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="md:form-control gap-1">
            <label>Message</label>
            <textarea
              className="input input-bordered text-[#EB671C] w-full lg:w-96 rounded-sm h-24"
              name="message"
              required
            />
          </div>

          <input
            className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C] text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold w-full mt-5 mb-4'
            type="submit"
            value="Send"
          />
        </form>

        <div data-aos="fade-left">
          <div className='gap-5'>
            <MdOutlineLocationOn className='text-2xl border-2 border-[#FFF1B0] w-10 h-10 p-1 rounded-full' />
            <p>Hat Gopalpur, Sadar Jhenidah, Jhenida, <br /> Dhaka, Bangladesh.</p>
          </div>
          <div className='my-5'>
            <MdOutlineMailOutline className='text-2xl border-2 border-[#FFF1B0] w-10 h-10 p-1 rounded-full' />
            <p>shariarnafis86@gmail.com</p>
          </div>
          <div className='gap-5'>
            <PiPhoneCallLight className='text-2xl border-2 border-[#FFF1B0] w-10 h-10 p-1 rounded-full' />
            <p>+880 1780-051028</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactMe;
