import { motion } from 'framer-motion';
import ContactImage from '../assets/Contact.png'; // Image for the contact section

export default function Contact() {
    return (
        <motion.div
            className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
                <img
                    src={ContactImage}
                    alt="Contact Us"
                    className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full object-cover mx-auto animate-fade-in"
                />

                <div className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full text-center font-medium">
                    <h1 className="text-4xl font-bold mb-6">
                        Contact <span className="text-blue-600">SwapSkills</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Have questions or need help? Fill out the form below, and we'll get back to you as soon as possible.
                    </p>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md hover:from-blue-600 hover:to-blue-700 transform transition-transform duration-200 hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}
