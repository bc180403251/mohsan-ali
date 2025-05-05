import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div className="flex gap-4">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Link href="/">
            <Button variant="outline">Back to Portfolio</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Mohsan Ali</h2>
          <p className="text-gray-600">Backend Developer</p>
          <div className="mt-2 text-sm text-gray-600">
            <p>+92-3486081173 | amohsan12345678@gmail.com</p>
            <p>LinkedIn | GitHub</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">Experience</h3>

          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">Backend Developer</h4>
                <p className="text-gray-600">CODESTEEM pvt. ltd, Lahore, Pakistan</p>
              </div>
              <p className="text-sm text-gray-600">March 2025 – Present</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
              <li>Building and maintaining backend systems using Laravel, Core PHP, and Node.js.</li>
              <li>Developed RESTful APIs and integrated Firebase for real-time database and image uploads.</li>
              <li>Implemented FCM for push notifications and event-based alerts.</li>
              <li>Collaborated with frontend teams for feature integration and performance optimization.</li>
              <li>Handled database operations using MySQL and MongoDB, with versioning via Git.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">Backend Developer</h4>
                <p className="text-gray-600">ZIMO Group, Remote based UK Company</p>
              </div>
              <p className="text-sm text-gray-600">June 2024 – October 2024</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
              <li>API Development (Laravel): Built secure, scalable APIs for web apps with a focus on performance.</li>
              <li>Admin Panels: Developed efficient, user-friendly admin panels in Laravel for system management.</li>
              <li>
                Email Templates: Designed responsive email templates using HTML/CSS for compatibility across clients.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">FullStack Developer Internee</h4>
                <p className="text-gray-600">Virtual University Software House, Lahore, Pakistan</p>
              </div>
              <p className="text-sm text-gray-600">May 2023 – March 2024</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
              <li>End-to-End Development: Designed and implemented both frontend and backend components.</li>
              <li>API & Database: Built and consumed RESTful APIs using NestJS for seamless data exchange.</li>
              <li>Frontend & UI: Developed dynamic user interfaces using modern frameworks like React or Next.js.</li>
              <li>Collaboration: Worked closely with UI/UX designers, backend engineers, and stakeholders.</li>
              <li>Performance & Security: Implemented authentication, authorization, and data protection measures.</li>
              <li>Testing & Debugging: Maintained code quality with testing.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">Skills</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Languages/Frameworks</h4>
              <p className="text-sm text-gray-700">
                JavaScript, TypeScript, Nest.js, Next.js, Bootstrap, Laravel, Ajax & jQuery, TailwindCSS
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Databases</h4>
              <p className="text-sm text-gray-700">SQL, MySQL, MongoDB</p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Libraries/ORM/ODM</h4>
              <p className="text-sm text-gray-700">
                React.js, TypeORM, EloquentORM, Mongoose, JSON Web Token, Swagger, Laravel Livewire
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Tools</h4>
              <p className="text-sm text-gray-700">
                Git Version Control, Github, Jira, Postman, Firebase, PhpStorm, Xampp, VS Code
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold mb-2">Others</h4>
            <p className="text-sm text-gray-700">
              Data Structures, Algorithms, OOP Principles, Authentication, Authorization, Responsive Design, Pixel
              Perfect Email Template Design, MVC (Laravel)
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">Projects</h3>

          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">Internship Screening System (FYP)</h4>
                <p className="text-gray-600">Next.js, NestJS, MySQL</p>
              </div>
              <p className="text-sm text-gray-600">May 2023 – March 2024</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
              <li>
                Admin Management: Managed user roles, permissions, and admin accounts for efficient system oversight.
              </li>
              <li>
                Student Registration: Oversaw student registration, profiles, and internship application tracking.
              </li>
              <li>Batch Management: Created and assigned student batches for smooth internship coordination.</li>
              <li>
                Semester Management: Managed scheduling, batch allocation, and internship progress tracking across
                semesters.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">ZOPUS (Backend Developer)</h4>
                <p className="text-gray-600">Laravel, PHP, MySQL</p>
              </div>
              <p className="text-sm text-gray-600">August 2024 – October 2024</p>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              Built a scalable backend with secure RESTful APIs and a user-friendly admin panel for efficient data
              management.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">Education</h3>

          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600">Virtual University of Pakistan</p>
              <p className="text-sm text-gray-700 mt-1">CGPA: 3.18/4</p>
            </div>
            <p className="text-sm text-gray-600">Oct 2018 – April 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
