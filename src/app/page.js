"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

export default function Home() {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Biruk-bejiga' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/biruk-bejga-456b72289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <FaTwitter />, url: 'https://x.com/biruk2094566534?t=NbBhT9umUsQ9cqV1OH4uLQ&s=35' },
  ];
  const projects = [
    {
      name: 'Portfolio Website',
      description: ' A personal portfolio website built using React.js and Next.js. This site showcases my skills, projects, and experiences, serving as a digital resume for potential employers and clients.',
    },
    {
      name: 'Job Posting Platform',
      description: ' A job posting website specifically designed for developers, built with React.js and Tailwind CSS. This platform allows employers to post job openings and developers to search and apply for jobs seamlessly.',
    },
    {
      name: 'YouTube Clone',
      description: 'A clone of the popular video-sharing platform, created using HTML and CSS. This project demonstrates my understanding of responsive design and front-end development principles.',
    },
    {
      name: 'Amazon Clone',
      description: 'An e-commerce platform inspired by Amazon, developed using HTML, CSS, and JavaScript. This project showcases my ability to create interactive user interfaces and understand e-commerce functionalities.',
    },
  ];
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_xa2u25f', 
        'template_a8nkn2c',
        formRef.current,
        'rq9AqfRTSikKLyk34'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="p-6 fixed w-full bg-gray-800 bg-opacity-90 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Biruk</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-purple-400">About</a></li>
            <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Hi, I'm Biruk Bejiga</h1>
        <p className="text-xl text-gray-400">frontend Developer | React Enthusiast</p>
        
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-gray-400 max-w-2xl">
          I am a passionate software engineering student with a strong focus on web development and emerging technologies.  I am eager to apply my knowledge in programming and web development to build innovative solutions. My goal is to secure freelancing opportunities, gain industry experience, and continuously improve my skills to stay ahead in the tech world.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'Javascript', 'Git/Github', 'Jasmine', 'HTML', 'CSS'].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="p-6 bg-gray-800 rounded-lg text-center"
              >
                <p className="text-lg">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-700 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <form ref={formRef} onSubmit={sendEmail} className="max-w-2xl mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
              rows="5"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
          <div className="flex justify-center gap-4 mt-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl transition-transform transform hover:text-blue-500 hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>
        </div>
      </section>
    </div>
  );
}