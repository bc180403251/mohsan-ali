"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ArrowRight, ChevronDown } from "lucide-react"
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
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
              className="text-4xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span className="text-emerald-600">Mohsan Ali</span>
            </motion.h1>
            <motion.div
              className="text-2xl md:text-3xl font-medium mt-4 text-gray-700 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TypewriterComponent
                options={{
                  strings: ["Backend Developer", "Laravel Expert", "NestJS Developer", "Full Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.p
              className="mt-6 text-gray-600 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              With 1.5 years of professional experience building robust web applications and APIs using Laravel, NestJS,
              and Next.js.
            </motion.p>
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <ThreeDButton className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-emerald-200 transition-all duration-300"
                onClick={() => window.location.href = "#contact"}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </ThreeDButton>
              <ThreeDButton
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
                onClick={downloadFile}
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
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
            <div className="relative">
              <TiltCard glareEnabled={true} perspective={1500} className="rounded-full">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 shadow-2xl transform hover:rotate-3 transition-all duration-500">
                  <Image
                    src="/mohsan.png?height=320&width=320"
                    alt="Mohsan Ali"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent"></div>
                </div>

                {/* Add rotating cube for 3D effect */}
                <div className="absolute -bottom-10 -right-10 hidden md:block">
                  <RotatingCube size={70} />
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
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate={aboutInView ? "visible" : "hidden"} variants={staggerContainer}>
              <motion.h3 className="text-2xl font-bold mb-4" variants={fadeInUp}>
                Professional Summary
              </motion.h3>
              <motion.p className="text-gray-600 mb-4 leading-relaxed" variants={fadeInUp}>
                I'm a Backend Developer with expertise in Laravel, NestJS, and Next.js. With 1.5 years of professional
                experience, I specialize in building robust APIs, efficient admin panels, and full-stack web
                applications.
              </motion.p>
              <motion.p className="text-gray-600 mb-4 leading-relaxed" variants={fadeInUp}>
                My experience spans from developing RESTful APIs to implementing authentication systems and working with
                databases like MySQL and MongoDB. I'm passionate about creating scalable and maintainable code.
              </motion.p>
              <motion.div className="grid grid-cols-2 gap-4 mt-6" variants={staggerContainer}>
                {[
                  { label: "Name", value: "Mohsan Ali" },
                  { label: "Email", value: "amohsan12345678@gmail.com" },
                  { label: "Phone", value: "+92-3486081173" },
                  { label: "Location", value: "Lahore, Pakistan" },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeInUp}>
                    <p className="font-medium">{item.label}:</p>
                    <p className="text-gray-600">{item.value}</p>
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
                  <TiltCard glareEnabled={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <h3 className="text-4xl font-bold text-emerald-600 mb-2">
                        <AnimatedCounter value={item.value} />
                      </h3>
                      <p className="text-gray-600">{item.label}</p>
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
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </motion.div>
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              {
                title: "Backend Developer",
                company: "CODESTEEM pvt. ltd, Lahore, Pakistan",
                period: "March 2025 - Present",
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
                responsibilities: [
                  "End-to-End Development: Designed and implemented both frontend and backend components to build complete web applications.",
                  "API & Database: Built and consumed RESTful APIs using NestJS for seamless data exchange between frontend and backend.",
                  "Frontend & UI: Developed dynamic user interfaces using modern frameworks like React or Next.js for a smooth user experience.",
                  "Collaboration: Worked closely with UI/UX designers, backend engineers, and stakeholders to ensure cohesive development.",
                  "Performance & Security: Implemented authentication, authorization, and data protection measures to secure applications.",
                  "Testing & Debugging: Maintained code quality with testing.",
                ],
              },
            ].map((job, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <PerspectiveCard>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-emerald-50 to-white">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                        </div>
                        <Badge className="bg-emerald-600 hover:bg-emerald-700 w-fit">{job.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </PerspectiveCard>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </motion.div>
          <motion.div initial="hidden" animate={skillsInView ? "visible" : "hidden"} variants={fadeInUp}>
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-emerald-50 p-1">
                {["languages", "frameworks", "databases", "tools"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="languages" className="mt-6">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {["JavaScript", "TypeScript", "PHP", "HTML/CSS"].map((skill) => (
                    <motion.div key={skill} variants={fadeInUp}>
                      <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                        <div className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                          <p className="font-medium">{skill}</p>
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="frameworks" className="mt-6">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {["Laravel", "Nest.js", "Next.js", "React.js", "Bootstrap", "TailwindCSS", "jQuery", "Ajax"].map(
                    (skill) => (
                      <motion.div key={skill} variants={fadeInUp}>
                        <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                          <div className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                            <p className="font-medium">{skill}</p>
                          </div>
                        </TiltCard>
                      </motion.div>
                    ),
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="databases" className="mt-6">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {["MySQL", "MongoDB", "SQL", "Firebase"].map((skill) => (
                    <motion.div key={skill} variants={fadeInUp}>
                      <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                        <div className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                          <p className="font-medium">{skill}</p>
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="tools" className="mt-6">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {["Git", "GitHub", "Jira", "Postman", "VS Code", "PhpStorm", "Xampp"].map((skill) => (
                    <motion.div key={skill} variants={fadeInUp}>
                      <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                        <div className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                          <p className="font-medium">{skill}</p>
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>

            <motion.div
              className="mt-12"
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-4">Other Skills</h3>
              <motion.div className="flex flex-wrap gap-2" variants={staggerContainer}>
                {[
                  "TypeORM",
                  "EloquentORM",
                  "Mongoose",
                  "JSON Web Token",
                  "Swagger",
                  "Laravel Livewire",
                  "Data Structures",
                  "Algorithms",
                  "OOP Principles",
                  "Authentication",
                  "Authorization",
                  "Responsive Design",
                  "Pixel Perfect",
                  "Email Template Design",
                  "MVC (Laravel)",
                ].map((skill) => (
                  <motion.div key={skill} variants={fadeInUp}>
                    <Badge
                      variant="outline"
                      className="bg-white hover:bg-emerald-50 transition-colors duration-300 border-gray-200 hover:border-emerald-200 py-1.5"
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
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              {
                title: "Internship Screening System (FYP)",
                tech: "Next.js, NestJS, MySQL",
                period: "May 2023 - March 2024",
                description: "For my internship at Virtual University, I developed an Internship Screening System.",
                points: [
                  "Admin Management: Managed user roles, permissions, and admin accounts for efficient system oversight.",
                  "Student Registration: Oversaw student registration, profiles, and internship application tracking.",
                  "Batch Management: Created and assigned student batches for smooth internship coordination.",
                  "Semester Management: Managed scheduling, batch allocation, and internship progress tracking across semesters.",
                ],
              },
              {
                title: "ZOPUS",
                tech: "Laravel, PHP, MySQL",
                period: "August 2024 - October 2024",
                description:
                  "Built a scalable backend with secure RESTful APIs and a user-friendly admin panel for efficient data management.",
              },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard glareEnabled={true} perspective={2000} tiltMaxAngleX={7} tiltMaxAngleY={7}>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="h-48 bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt={project.title}
                        width={400}
                        height={200}
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ThreeDButton variant="outline" className="bg-white/80 hover:bg-white">
                          View Details
                        </ThreeDButton>
                      </div>
                    </div>
                    <CardHeader className="bg-gradient-to-r from-emerald-50 to-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.tech}</CardDescription>
                        </div>
                        <Badge className="bg-emerald-600 hover:bg-emerald-700">{project.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      {project.points && (
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          {project.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-4 flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          <Github className="h-4 w-4" /> Code
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4" /> Live Demo
                        </Button>
                      </div>
                    </CardContent>
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
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </motion.div>
          <motion.div initial="hidden" animate={educationInView ? "visible" : "hidden"} variants={fadeInUp}>
            <PerspectiveCard>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-white">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                      <CardDescription>Virtual University of Pakistan</CardDescription>
                    </div>
                    <Badge className="bg-emerald-600 hover:bg-emerald-700 w-fit">Oct 2018 - April 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600">CGPA: 3.18/4</p>
                </CardContent>
              </Card>
            </PerspectiveCard>
          </motion.div>
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
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial="hidden" animate={contactInView ? "visible" : "hidden"} variants={staggerContainer}>
              <motion.h3 className="text-2xl font-bold mb-6" variants={fadeInUp}>
                Get In Touch
              </motion.h3>
              <motion.p className="text-gray-600 mb-6 leading-relaxed" variants={fadeInUp}>
                Feel free to contact me for any work or suggestions. I'm always open to discussing new projects,
                creative ideas or opportunities to be part of your vision.
              </motion.p>
              <motion.div className="space-y-6" variants={staggerContainer}>
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-emerald-600" />,
                    title: "Email",
                    value: "amohsan12345678@gmail.com",
                  },
                  {
                    icon: (
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
                        className="h-6 w-6 text-emerald-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    title: "Phone",
                    value: "+92-3486081173",
                  },
                  {
                    icon: (
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
                        className="h-6 w-6 text-emerald-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    title: "Location",
                    value: "Lahore, Pakistan",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-emerald-100 p-3 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="mt-8 flex gap-4" variants={fadeInUp}>
                <Link
                  href="https://github.com/bc180403251"
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mohsan-ali-75715a232/"
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </Link> 
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate={contactInView ? "visible" : "hidden"} variants={fadeInUp}>
              <TiltCard glareEnabled={true} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1500}>
                <ContactForm />
              </TiltCard>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-50 to-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Mohsan Ali. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="https://github.com/bc180403251" className="text-gray-600 hover:text-emerald-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohsan-ali-75715a232/" className="text-gray-600 hover:text-emerald-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>

      <FloatingContactButton />
    </div>
  )
}
