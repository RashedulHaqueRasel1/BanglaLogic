import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-indigo-700 py-4 text-gray-100">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                            Copyright © 2025 Bangla Logic. All Rights Reserved.
                        </div>
                        <div className="flex gap-4 text-2xl px-4 w-full text-center sm:w-auto sm:text-center">
                            <FaFacebook />
                            <FaYoutube />
                            <FaTwitter />
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;