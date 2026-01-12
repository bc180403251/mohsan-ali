"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ArrowRight, ChevronDown, CheckCircle2, User, Phone, MapPin, Code2, Database, Smartphone, Layers, Globe, Briefcase, Calendar, Monitor, Cpu, Wrench, ExternalLink, GraduationCap, MessageSquare, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"
import AnimatedBackground from "@/components/animated-background"
import WaveBackground from "@/components/wave-background"
import TypewriterComponent from "typewriter-effect"
import AnimatedCounter from "@/components/animated-counter"
import FloatingContactButton from "@/components/floating-contact-button"
import RotatingCube from "@/components/rotating-cube"
import TiltCard from "@/components/tilt-card"
import ParallaxLayer from "@/components/parallax-layer"
import ThreeDButton from "@/components/3d-button"
import PerspectiveCard from "@/components/perspective-card"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)


  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/mohsan_ali_resume.pdf'; // path relative to public/
    link.download = 'Mohsan_resume.pdf'; // file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <AnimatedBackground />
      <WaveBackground />

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${scrollY > 50 ? "bg-white/90 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            Mohsan<span className="text-emerald-600">.</span>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-emerald-600 transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <ThreeDButton
              variant="outline"
              className="hidden md:flex border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              onClick={downloadFile}
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </ThreeDButton>
          </motion.div>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative">
        {/* Hero Section */}
        <section
          id="home"
          className="py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10 relative"
          ref={heroRef}
        >
          <ParallaxLayer speed={0.2} className="absolute top-0 right-0 -z-10 w-72 h-72">
            <div className="bg-emerald-100 rounded-full blur-3xl opacity-30 animate-blob w-full h-full"></div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.3} direction="down" className="absolute bottom-0 left-0 -z-10 w-72 h-72">
            <div className="bg-blue-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 w-full h-full"></div>
          </ParallaxLayer>

          <motion.div
            className="md:w-1/2"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.h1
              className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 drop-shadow-sm">Mohsan Ali</span>
            </motion.h1>
            <motion.div
              className="text-2xl md:text-3xl font-medium mt-4 text-gray-700 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <Code2 className="h-6 w-6 text-emerald-500 animate-pulse" />
                <TypewriterComponent
                  options={{
                    strings: ["Backend Developer", "Laravel Expert", "NestJS Developer", "Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-emerald-700 font-semibold",
                    cursorClassName: "text-emerald-500"
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="mt-8 p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-emerald-100/50 shadow-xl shadow-emerald-500/5 max-w-xl leading-relaxed space-y-3 hover:border-emerald-200/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-xl font-medium text-gray-800">Hi, I&apos;m <strong>Mohsan Ali</strong> 👋</p>
              <p className="text-gray-600">
                I help businesses <strong>fix backend issues, build secure APIs, and integrate third-party services</strong> like Stripe, Twilio, and Firebase — without rewriting the whole app.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  ⚡ Clean code
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  ⚡ Fast debugging
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  ⚡ Production-ready
                </span>
              </div>
              <p className="pt-2 text-emerald-700 font-semibold flex items-center gap-2">
                <span className="animate-bounce">👉</span> Need help with an existing web app? Let&apos;s talk.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <ThreeDButton 
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-xl shadow-emerald-200/50 transition-all duration-300 px-8 py-7 text-lg group h-auto"
                onClick={() => window.location.href = "#contact"}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> Hire Me for Backend Work
              </ThreeDButton>
              <ThreeDButton
                variant="outline"
                className="border-2 border-emerald-600/50 text-emerald-600 hover:bg-emerald-50 transition-all duration-300 px-8 py-7 text-lg h-auto"
                onClick={downloadFile}
              >
                <Download className="mr-2 h-5 w-5" /> Download CV
              </ThreeDButton>
            </motion.div>
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                href="https://github.com/bc180403251"
                className="text-gray-600 hover:text-emerald-600 transition-colors transform hover:scale-110 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohsan-ali-75715a232"
                className="text-gray-600 hover:text-emerald-600 transition-colors transform hover:scale-110 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </Link>

            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Decorative background circles */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <TiltCard glareEnabled={true} perspective={1500} className="rounded-full">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 shadow-2xl transform hover:rotate-3 transition-all duration-500 z-10">
                  <Image
                    src="/mohsan.png?height=320&width=320"
                    alt="Mohsan Ali"
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent"></div>
                </div>

                {/* Tech floating icons around the image */}
                <motion.div 
                  className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-xl z-20 border border-emerald-50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Database className="h-6 w-6 text-emerald-600" />
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 -right-6 bg-white p-3 rounded-2xl shadow-xl z-20 border border-emerald-50"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                   <Globe className="h-6 w-6 text-blue-500" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white p-3 rounded-2xl shadow-xl z-20 border border-emerald-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Smartphone className="h-6 w-6 text-emerald-500" />
                </motion.div>

                {/* Add rotating cube for 3D effect */}
                <div className="absolute -bottom-10 -right-10 hidden md:block z-20">
                  <RotatingCube size={85} />
                </div>
              </TiltCard>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <a href="#about" className="text-gray-400 hover:text-emerald-600 transition-colors">
              <ChevronDown className="h-8 w-8" />
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative" ref={aboutRef}>
          <ParallaxLayer speed={0.4} className="absolute top-1/2 right-0 -z-10 w-64 h-64">
            <div className="bg-emerald-100 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 w-full h-full"></div>
          </ParallaxLayer>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">About My Vision</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto italic">Crafting robust backend architectures with a focus on impact and efficiency.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate={aboutInView ? "visible" : "hidden"} variants={staggerContainer}>
              <motion.h3 className="text-2xl font-bold mb-4" variants={fadeInUp}>
                Professional Summary
              </motion.h3>
              {/* <motion.p className="text-gray-600 mb-4 leading-relaxed" variants={fadeInUp}>
                I'm a Backend Developer with expertise in Laravel, NestJS, and Next.js. With 1.5 years of professional
                experience, I specialize in building robust APIs, efficient admin panels, and full-stack web
                applications.
              </motion.p>
              <motion.p className="text-gray-600 mb-4 leading-relaxed" variants={fadeInUp}>
                My experience spans from developing RESTful APIs to implementing authentication systems and working with
                databases like MySQL and MongoDB. I'm passionate about creating scalable and maintainable code.
              </motion.p> */}
              <motion.div className="space-y-6 text-left" variants={fadeInUp}>
                <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/30 rounded-r-lg">
                  I&apos;m a backend-focused software engineer with <strong className="text-emerald-700">1.5+ years of hands-on experience</strong> working on real production systems, while also contributing to frontend and mobile applications when needed.
                </p>
                
                <div className="space-y-4">
                  <p className="font-semibold text-gray-800">Most of my work involves:</p>
                  <ul className="space-y-3">
                    {[
                      { text: "Fixing broken features and improving existing systems" },
                      { text: <>Building and maintaining <strong className="text-emerald-700">secure REST APIs</strong></> },
                      { text: <>Integrating <strong className="text-emerald-700">restaurant apps, mobile applications, and payment systems</strong></> },
                      { text: <>Enhancing application <strong className="text-emerald-700">performance and security</strong></> },
                      { text: <>Supporting frontend development and working with <strong className="text-emerald-700">React Native apps</strong></> },
                    ].map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700 italic border-t border-gray-100 pt-4">
                  I don&apos;t just write code — I <strong className="text-emerald-700">analyze problems, build practical solutions, and help projects move forward smoothly</strong>.
                </p>
              </motion.div>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8" variants={staggerContainer}>
                {[
                  { label: "Name", value: "Mohsan Ali", icon: <User className="h-4 w-4" /> },
                  { label: "Email", value: "amohsan12345678@gmail.com", icon: <Mail className="h-4 w-4" /> },
                  { label: "Phone", value: "+92-3486081173", icon: <Phone className="h-4 w-4" /> },
                  { label: "Location", value: "Lahore, Pakistan", icon: <MapPin className="h-4 w-4" /> },
                ].map((item) => (
                  <motion.div 
                    key={item.label} 
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-50 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-gray-700 font-semibold">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {[
                { value: "1.5+", label: "Years of Experience" },
                { value: "3+", label: "Projects Completed" },
                { value: "2+", label: "Companies Worked" },
                { value: "BS", label: "Computer Science" },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <TiltCard glareEnabled={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-50/50 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-emerald-100 transition-colors duration-500"></div>
                      <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-400 mb-2 relative z-10">
                        <AnimatedCounter value={item.value} />
                      </h3>
                      <p className="text-gray-500 font-medium relative z-10 text-sm uppercase tracking-wide">{item.label}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative" ref={experienceRef}>
          <ParallaxLayer speed={0.3} direction="down" className="absolute bottom-0 left-0 -z-10 w-72 h-72">
            <div className="bg-blue-100 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000 w-full h-full"></div>
          </ParallaxLayer>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Professional Journey</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto italic">Over 1.5 years of experience delivering high-quality production code.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>
          <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-200 to-transparent transform md:-translate-x-1/2 hidden sm:block"></div>

            <motion.div
              className="space-y-12"
              initial="hidden"
              animate={experienceInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Backend Developer",
                  company: "CODESTEEM pvt. ltd, Lahore, Pakistan",
                  period: "March 2025 - Present",
                  icon: <Briefcase className="h-5 w-5" />,
                  responsibilities: [
                    "Building and maintaining backend systems using Laravel, Core PHP, and Node.js.",
                    "Developed RESTful APIs and integrated Firebase for real-time database and image uploads.",
                    "Implemented FCM for push notifications and event-based alerts.",
                    "Collaborated with frontend teams for feature integration and performance optimization.",
                    "Handled database operations using MySQL and MongoDB, with versioning via Git.",
                  ],
                },
                {
                  title: "Backend Developer",
                  company: "ZIMO Group, Remote based UK Company",
                  period: "June 2024 - October 2024",
                  icon: <Briefcase className="h-5 w-5" />,
                  responsibilities: [
                    "API Development (Laravel): Built secure, scalable APIs for web apps with a focus on performance.",
                    "Admin Panels: Developed efficient, user-friendly admin panels in Laravel for system management.",
                    "Email Templates: Designed responsive email templates using HTML/CSS for compatibility across clients.",
                  ],
                },
                {
                  title: "FullStack Developer Internee",
                  company: "Virtual University Software House, Lahore, Pakistan",
                  period: "May 2023 - March 2024",
                  icon: <Layers className="h-5 w-5" />,
                  responsibilities: [
                    "End-to-End Development: Designed and implemented both frontend and backend components to build complete web applications.",
                    "API & Database: Built and consumed RESTful APIs using NestJS for seamless data exchange between frontend and backend.",
                    "Frontend & UI: Developed dynamic user interfaces using modern frameworks like React or Next.js for a smooth user experience.",
                    "Performance & Security: Implemented authentication, authorization, and data protection measures to secure applications.",
                    "Testing & Debugging: Maintained code quality with testing.",
                  ],
                },
              ].map((job, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-36px] md:left-1/2 top-0 w-8 h-8 rounded-full bg-white border-4 border-emerald-500 z-10 transform md:-translate-x-1/2 shadow-lg hidden sm:block"></div>
                  
                  <div className="md:w-1/2">
                    <PerspectiveCard>
                      <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                        <CardHeader className="bg-gradient-to-br from-emerald-50/80 to-white pb-4 border-b border-emerald-100/30">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-300">
                                {job.icon}
                              </div>
                              <div>
                                <CardTitle className="text-xl font-bold text-gray-800">{job.title}</CardTitle>
                                <CardDescription className="text-emerald-700 font-medium">{job.company}</CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-white/50 w-fit px-3 py-1 rounded-full border border-gray-100">
                              <Calendar className="h-3.5 w-3.5" /> {job.period}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <ul className="space-y-3">
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </PerspectiveCard>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center p-4 hidden md:flex">
                     <div className="text-8xl font-black text-gray-50/50 select-none">0{index + 1}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative" ref={skillsRef}>
          <ParallaxLayer speed={0.2} className="absolute top-1/3 right-0 -z-10 w-64 h-64">
            <div className="bg-emerald-100 rounded-full blur-3xl opacity-20 animate-blob w-full h-full"></div>
          </ParallaxLayer>


          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Technical Expertise</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto italic">Specialized in building scalable backend systems and high-performance web applications.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div initial="hidden" animate={skillsInView ? "visible" : "hidden"} variants={fadeInUp}>
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="flex flex-wrap h-auto justify-center gap-4 bg-transparent p-1 mb-12">
                {[
                  { id: "languages", label: "Languages", icon: <Globe className="h-4 w-4" /> },
                  { id: "frameworks", label: "Frameworks", icon: <Cpu className="h-4 w-4" /> },
                  { id: "databases", label: "Databases", icon: <Database className="h-4 w-4" /> },
                  { id: "tools", label: "Tools & Devops", icon: <Wrench className="h-4 w-4" /> }
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-100 bg-white shadow-sm data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:border-emerald-600 transition-all duration-300 hover:shadow-md"
                  >
                    {tab.icon}
                    <span className="font-semibold">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {[
                { 
                  id: "languages", 
                  skills: [
                    { name: "JavaScript", level: 90 },
                    { name: "TypeScript", level: 85 },
                    { name: "PHP", level: 95 },
                    { name: "HTML/CSS", level: 90 }
                  ] 
                },
                { 
                  id: "frameworks", 
                  skills: [
                    { name: "Laravel", level: 95 },
                    { name: "Nest.js", level: 88 },
                    { name: "Next.js", level: 85 },
                    { name: "React.js", level: 80 },
                    { name: "TailwindCSS", level: 90 },
                    { name: "ReactNative", level: 75 },
                    { name: "Bootstrap", level: 85 },
                    { name: "jQuery/Ajax", level: 90 }
                  ] 
                },
                { 
                  id: "databases", 
                  skills: [
                    { name: "MySQL", level: 95 },
                    { name: "MongoDB", level: 80 },
                    { name: "Firebase", level: 85 },
                    { name: "SQL", level: 90 }
                  ] 
                },
                { 
                  id: "tools", 
                  skills: [
                    { name: "Git/GitHub", level: 90 },
                    { name: "Postman", level: 95 },
                    { name: "Docker/Jira", level: 70 },
                    { name: "VS Code", level: 95 },
                    { name: "PhpStorm", level: 90 },
                    { name: "Xampp", level: 90 }
                  ] 
                }
              ].map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0 outline-none">
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {category.skills.map((skill) => (
                      <motion.div key={skill.name} variants={fadeInUp}>
                        <TiltCard glareEnabled={true} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02}>
                          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 relative overflow-hidden group">
                            <div className="flex justify-between items-center mb-4">
                              <p className="font-bold text-gray-800">{skill.name}</p>
                              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{skill.level}%</span>
                            </div>
                            
                            {/* Skill level bar */}
                            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                               <Cpu className="h-12 w-12 text-emerald-600" />
                            </div>
                          </div>
                        </TiltCard>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>

            <motion.div
              className="mt-20 p-8 rounded-3xl bg-gray-900 text-white relative overflow-hidden"
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              {/* Background patterns */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <div className="relative z-10 text-center mb-8">
                <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                  <Layers className="h-6 w-6 text-emerald-400" /> Specialized Competencies
                </h3>
                <p className="text-gray-400 mt-2">Additional technical skills and methodologies</p>
              </div>

              <motion.div className="flex flex-wrap justify-center gap-3 relative z-10" variants={staggerContainer}>
                {[
                  "TypeORM", "EloquentORM", "Mongoose", "JSON Web Token", "Swagger",
                  "Laravel Livewire", "Data Structures", "Algorithms", "OOP Principles",
                  "Authentication", "Authorization", "Responsive Design", "Email Template Design",
                  "MVC Architecture", "RESTful API", "FCM Notifications"
                ].map((skill) => (
                  <motion.div key={skill} variants={fadeInUp}>
                    <Badge
                      variant="outline"
                      className=" text-white bg-white/5 hover:bg-emerald-500 hover:text-white transition-all duration-300 border-white/10 hover:border-emerald-500 py-2 px-4 rounded-full text-sm font-medium cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative" ref={projectsRef}>
          <ParallaxLayer speed={0.4} direction="down" className="absolute bottom-0 left-0 -z-10 w-72 h-72">
            <div className="bg-blue-100 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 w-full h-full"></div>
          </ParallaxLayer>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Featured Projects</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto italic">A selection of my recent work in backend development and full-stack solutions.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              {
                title: "Internship Screening System (FYP)",
                tech: ["Next.js", "NestJS", "MySQL", "TypeScript", "TailwindCSS"],
                period: "2023 - 2024",
                description: "A comprehensive platform developed for Virtual University to manage and screen internship applications efficiently.",
                points: [
                  "Role-based access control for Admins and Students",
                  "Automated student registration and profile tracking",
                  "Semester-wise batch management and scheduling",
                  "Interactive progress tracking dashboards",
                ],
              },
              {
                title: "ZOPUS - Enterprise Solution",
                tech: ["Laravel", "PHP", "MySQL", "REST API", "Admin Panel"],
                period: "Aug 2024 - Oct 2024",
                description:
                  "Designed and implemented a scalable enterprise backend focusing on secure data exchange and administrative efficiency.",
                points: [
                  "Highly secure RESTful API architecture",
                  "Custom-built administrative dashboard",
                  "Integrated real-time data management modules",
                  "Optimized database queries for performance",
                ],
              },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard glareEnabled={true} perspective={2000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <Card className="overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col group bg-white">
                    {/* Project Image/Visual Header */}
                    <div className="relative h-60 overflow-hidden bg-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/40 to-teal-800/40 z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=${project.title}`}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <Badge className="bg-white/90 text-emerald-700 backdrop-blur-sm border-none font-bold py-1 px-3">
                          {project.period}
                        </Badge>
                      </div>
                      
                      {/* Floating Tech Tag */}
                      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-md px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow pt-0 space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed italic">
                        &quot;{project.description}&quot;
                      </p>
                      
                      {project.points && (
                        <ul className="space-y-3">
                          {project.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs text-gray-500">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Full Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100 transition-colors">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <div className="p-6 pt-0 mt-auto border-t border-gray-50 grid grid-cols-2 gap-3">
                      <ThreeDButton 
                        variant="outline" 
                        size="sm" 
                        className="w-full flex items-center justify-center gap-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50 h-10 text-xs font-bold"
                      >
                        <Github className="h-4 w-4" /> REPOSITORY
                      </ThreeDButton>
                      <ThreeDButton 
                        size="sm" 
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-700 h-10 text-xs font-bold shadow-lg shadow-emerald-100"
                      >
                        <ExternalLink className="h-4 w-4" /> LIVE DEMO
                      </ThreeDButton>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 relative" ref={educationRef}>
          <ParallaxLayer speed={0.3} className="absolute top-1/2 right-0 -z-10 w-64 h-64">
            <div className="bg-emerald-100 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000 w-full h-full"></div>
          </ParallaxLayer>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Educational Background</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto italic">My academic foundation in computer science and software engineering principles.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden" 
              animate={educationInView ? "visible" : "hidden"} 
              variants={fadeInUp}
              className="relative"
            >
              {/* Decorative background element */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-[2rem] blur-xl opacity-50"></div>
              
              <PerspectiveCard>
                <Card className="border-none shadow-2xl rounded-[1.5rem] overflow-hidden bg-white/80 backdrop-blur-sm group hover:shadow-emerald-500/10 transition-all duration-500">
                  <div className="flex flex-col md:flex-row">
                    {/* Left Icon/Color Bar */}
                    <div className="md:w-1/4 bg-gradient-to-br from-emerald-600 to-teal-700 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M0 0 L100 100 M0 100 L100 0" stroke="currentColor" strokeWidth="1" fill="none" />
                        </svg>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <GraduationCap className="h-20 w-20 opacity-90" />
                      </motion.div>
                      <p className="mt-4 font-bold tracking-widest text-xs uppercase opacity-80 z-10">Degree</p>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-3/4 p-8 md:p-10 relative">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                        <div>
                          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 mb-3 hover:bg-emerald-100 transition-colors">
                            2018 - 2024
                          </Badge>
                          <CardTitle className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight">
                            Bachelor of Science in <span className="text-emerald-600">Computer Science</span>
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-gray-500 mt-2 flex items-center gap-2">
                             <Globe className="h-4 w-4 text-emerald-400" /> Virtual University of Pakistan
                          </CardDescription>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center min-w-[100px] shadow-sm group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-all duration-500">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">CGPA</p>
                          <p className="text-2xl font-black text-emerald-600">3.18<span className="text-xs text-gray-400">/4</span></p>
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-gray-50">
                        <p className="font-bold text-gray-700 text-sm uppercase tracking-wide">Academic Highlights:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Data Structures & Algorithms",
                            "Object Oriented Programming",
                            "Software Engineering",
                            "Database Management Systems",
                            "Web Development",
                            "Network Security"
                          ].map((subject) => (
                            <div key={subject} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </PerspectiveCard>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative" ref={contactRef}>
          <ParallaxLayer speed={0.2} className="absolute bottom-0 left-0 -z-10 w-72 h-72">
            <div className="bg-blue-100 rounded-full blur-3xl opacity-20 animate-blob w-full h-full"></div>
          </ParallaxLayer>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Let&apos;s Connect</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto italic">Have a project in mind or just want to say hi? My inbox (and WhatsApp) is always open.</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email Me",
                  value: "amohsan12345678@gmail.com",
                  link: "mailto:amohsan12345678@gmail.com",
                  color: "bg-blue-50 text-blue-600 border-blue-100"
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "WhatsApp",
                  value: "+92 348 6081173",
                  link: "https://wa.me/923486081173",
                  color: "bg-emerald-50 text-emerald-600 border-emerald-100"
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Location",
                  value: "Lahore, Pakistan",
                  link: "#",
                  color: "bg-orange-50 text-orange-600 border-orange-100"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`p-8 rounded-3xl border ${item.color} shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group`}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                >
                  <div className="mb-4 p-4 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm font-medium opacity-80">{item.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="text-center space-y-8"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <ThreeDButton 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-8 text-xl h-auto rounded-2xl shadow-xl shadow-emerald-100"
                  onClick={() => window.open("https://wa.me/923486081173", "_blank")}
                >
                  <MessageSquare className="mr-3 h-6 w-6" /> Chat on WhatsApp
                </ThreeDButton>
                <ThreeDButton 
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 px-10 py-8 text-xl h-auto rounded-2xl"
                  onClick={() => window.location.href = "mailto:amohsan12345678@gmail.com"}
                >
                  <Mail className="mr-3 h-6 w-6" /> Send an Email
                </ThreeDButton>
              </div>

              <div className="flex justify-center gap-6 pt-8">
                <Link
                  href="https://github.com/bc180403251"
                  className="bg-white p-4 rounded-2xl border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mohsan-ali-75715a232/"
                  className="bg-white p-4 rounded-2xl border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </motion.div>

            {/* Form hidden as requested */}
            {/* 
            <motion.div initial="hidden" animate={contactInView ? "visible" : "hidden"} variants={fadeInUp} className="mt-16">
              <TiltCard glareEnabled={true} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1500}>
                <ContactForm />
              </TiltCard>
            </motion.div> 
            */}
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-600 text-white rounded-2xl shadow-2xl hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">Mohsan<span className="text-emerald-600">.</span></h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xs">Building scalable backends and high-performance applications with passion.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
               {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-600 transition-colors">
                    {item}
                  </a>
               ))}
            </div>

            <div className="flex gap-4">
              <Link href="https://github.com/bc180403251" target="_blank" className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:text-emerald-600 transition-all">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/mohsan-ali-75715a232" target="_blank" className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:text-emerald-600 transition-all">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-400 text-sm italic">
              &copy; {new Date().getFullYear()} Mohsan Ali. All rights reserved. <br className="md:hidden" />
              Designed with <span className="text-emerald-500 text-lg">♥</span> in Lahore, Pakistan.
            </p>
          </div>
        </div>
      </footer>

      <FloatingContactButton />
    </div>
  )
}
