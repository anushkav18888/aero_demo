import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center">
      <Head>
       
        <link rel="icon" href="/plane5.png" />
      </Head>
        <motion.div
          className="max-w-full lg:max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="md:flex">
            <div className="w-full p-20" style={{ backgroundColor: "#18181B" }}>
              <h1 className="textColor font-bold text-4xl mb-8 text-center">
                Contact Us
              </h1>
              <motion.div
                className="flex items-center mb-8"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-blue-600 mr-3 w-16 h-16" />
                <a
                  href="mailto: dgsec@aero.iitb.ac.in"
                  className="textColor text-xl hover:text-blue-600 transition-colors"
                  target="_blank"
                >
                 Mail Us
                </a>
              </motion.div>
              <motion.div
                className="flex items-center mb-8"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaInstagram className="text-pink-600 mr-3 w-16 h-16" />
                <a
                  href="https://www.instagram.com/aea_iitb/"
                  target="_blank"
                  className="textColor text-xl hover:text-pink-600 transition-colors"
                >
                  Follow us on Instagram
                </a>
              </motion.div>
              <motion.div
                className="flex items-center mb-8"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedin className="text-blue-600 mr-3 w-16 h-16" />
                <a
                  href="https://www.linkedin.com/in/aerospace-engineering-association-iit-bombay-9a8052263/"
                  className="textColor text-xl hover:text-blue-600 transition-colors"
                  target="_blank"
                >
                  Join our Linkedin
                </a>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaFacebook className="text-blue-600 mr-3 w-16 h-16" />
                <a
                  href="https://www.facebook.com/aero.iitb.ac.in"
                  className="textColor text-xl hover:text-blue-600 transition-colors"
                  target="_blank"
                >
                  Facebook
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
