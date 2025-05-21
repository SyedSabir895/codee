import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <motion.h1
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      <div className="max-w-3xl p-6 bg-white/20 backdrop-blur-md shadow-lg rounded-2xl">
        <p className="text-lg text-white mb-4">
          Welcome to our platform! We are committed to providing an exceptional
          learning and development experience for individuals at all skill
          levels. </p>
          <p className="text-lg text-white mb-4">Our mission is to make coding not only accessible but also
          engaging, interactive, and enjoyable for everyone. We believe that
          technology and programming have the power to transform lives, open new
          opportunities, and drive innovation. That’s why we have designed our
          platform to cater to beginners, intermediate learners, and experts
          alike, ensuring a seamless and enriching journey. 
          Our platform offers a wide range of resources, including structured courses, hands-on
          projects, coding challenges, and real-world applications. Whether you
          are just starting out or looking to enhance your existing skills, we
          provide the guidance and support you need to succeed.
        </p>
        <p className="text-lg text-white">
          Our team is made up of passionate developers, experienced educators,
          and forward-thinking innovators, all dedicated to empowering learners
          through high-quality educational resources. 
          Our developers bring industry expertise, ensuring that our content stays relevant,
          practical, and aligned with the latest technological advancements.
          They design and build interactive tools, hands-on projects, and
          real-world applications to help learners gain practical coding
          experience. Our educators craft well-structured courses, tutorials,
          and learning paths that cater to different skill levels—from complete
          beginners to advanced programmers. 
          They focus on making complex
          concepts easy to understand, engaging, and accessible to everyone.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="w-full mt-12 p-4 bg-black/30 backdrop-blur-md rounded-t-2xl text-white flex flex-col items-center">
        <p className="text-lg font-semibold mb-3">Connect with us</p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/SyedSabir895"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-sabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/chotu_syed_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}
