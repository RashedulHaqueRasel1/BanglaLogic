import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    // Track form field values
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_subject: '',
        message: ''
    });

    // Track the form validity (whether the button should be enabled or not)
    const [isFormValid, setIsFormValid] = useState(false);

    // Handle input change and update formData
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Check if form is valid
    useEffect(() => {
        const { user_name, user_email, user_subject, message } = formData;
        // Button is enabled only if all fields are filled
        setIsFormValid(user_name.trim() !== '' && user_email.trim() !== '' && user_subject.trim() !== '' && message.trim() !== '');
    }, [formData]);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dfao6gg', 'template_xmnepga', form.current, {
                publicKey: 'YyAdJZw79vJHyAvQB',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    toast.success("Email Send Successfully!")
                    // Reset form fields after successful submission
                    setFormData({
                        user_name: '',
                        user_email: '',
                        message: ''
                    });
                    // Optionally, reset the form UI (in case you want to clear inputs visually)
                    form.current.reset();
                },
                (error) => {
                    toast.error("Email Not Send Successfully!")
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div>
            <section className="bg-blue-50  " id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-black">
                                Contact
                            </p>
                            <h2
                                className="font-heading mb-4 font-bold tracking-tight text-black text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                                dictumst
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                    className aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                    sagittis ante, ac tincidunt sem venenatis ut.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Our Address
                                            </h3>
                                            <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                                            <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contact
                                            </h3>
                                            <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                            <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-">Working
                                                hours</h3>
                                            <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                            <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold  text-gray-900">Ready to Get Started?</h2>
                                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="user_name" required onChange={handleInputChange} value={formData.user_name} />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" placeholder="example@gmail.com" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="user_email" required onChange={handleInputChange} value={formData.user_email} />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" placeholder="Subject" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="user_subject" required onChange={handleInputChange} value={formData.Subject} />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" required onChange={handleInputChange} value={formData.message}></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit"
                                            className={`text-black bg-blue-600 border-0 py-2 px-6 focus:outline-none rounded text-lg mt-2 text-center ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                                            disabled={!isFormValid}>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Toaster />
            </section>
        </div>
    );
};

export default Contact;