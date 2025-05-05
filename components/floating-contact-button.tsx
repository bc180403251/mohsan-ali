"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-lg shadow-lg mb-4 w-64"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Contact Me</h3>
              <Button variant="ghost" size="icon" onClick={toggleOpen} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-600" />
                <span>amohsan12345678@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
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
                  className="h-4 w-4 text-emerald-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+92-3486081173</span>
              </p>
            </div>
            <div className="mt-4">
              <a href="#contact">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button onClick={toggleOpen} className="rounded-full h-14 w-14 bg-emerald-600 hover:bg-emerald-700 shadow-lg">
          {isOpen ? <X className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
        </Button>
      </motion.div>
    </div>
  )
}
