import Social from "./Social";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
} from "react-icons/fa6";

const Footer = () => {

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
        <div>
            <hr />
            <footer className="footer footer-center p-10 text-primary-content">
                <img src="https://i.ibb.co/ScpqWSt/p-10.jpg" className="w-28 rounded-full " alt="" />
                <h1 className="text-2xl text-gray-300 font-bold">Shariar Nafis</h1>

                <div className="flex gap-10 text-xl cursor-pointer">
                    {
                        socials?.map((social, index) => <Social key={social.id} index={index} social={social}></Social>)
                    }
                </div>

            </footer>
        </div>
    );
};

export default Footer;