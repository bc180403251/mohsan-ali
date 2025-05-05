import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Mohsan Ali - Backend Developer",
  icons: {
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC40lEQVR4nO2azWsTQRiHH1BJooKtoKl6akRE/AusJ2+WWo2gF9se1WulehEvXjUgfiDiUVS8eKkEa6vechFFb9ZWBUUrlLZ6bG10ZOANLGGyyc7MZtfQH/zo7uw703nY+c7CmjpXW4EiUALKwDSwBKyI9fV7eXZVYrtJibLACDAF/AFURFeBZ8CwlNV25YDzwJxF5RtZlzUmZbdFR4DPHgHq/QkYiBNAv/rrMQLU+x6w0TfEDuBtGyGU+DXQ4wuiIK9bJeSPUgcnbQdmEoRQgX5j/WZyCTUn1cBvbIfouymovKrzbZshVqXU/VGaVJKdW7XQ+VtqYhdSUFnVxOeaQWSA7ymoqGriH82WMiMWhfYGhurlCPl07DbJW7D4v0NhIFMOIFr3Iy5BcACZCNtPVB1BDkbI1+cIUgW6TCDHLdtrEASZuJrleVeXxwZEAUdNICVHkAPy92wLec5IbJ8jyBUTSNkR5BGwDtgM/AqJ1882SexDR5BxE8iMI0gFOCbXN0Pib0hMUfK4gEybQBY9gEzK9T7gb4P4/RLz3APIvAlkxQOIrvxeuX9piH0hz/ZIrCvIclwg+v6a3J80xJ6QZ7Utcywgi55AfkpnXg98qzsl2SD78CVPIPNxdfZa2mlJuxxI09fI0FtLi6Wzlz2C1Ca8ncBvYBXYZZgwK3EMvyWPICow2T0Wm5YwlTgmxKJnEL2A1Dok1nrgGWTQBNLtuGisGEYUvbSvKW8YGV1AVoEtNNCkRxDti4GyLxmeu4A8JUTDnkG+ALvFXz2DnOqEre5cKwcQYymoqGriUTrgOGg2yonjQAoqrBr4MBF1JwWVVnW+hYWy8vuESolfyWBkJX3u9CElx6R5HFWQgpKE6MWTelo85omjOeXxrEwCP4bmiFH9MTe1WZsh1lZZOdr3uZzRZY0m9QVERhaaE5ZbgKqsYodchlbf6pKzWL1reyIf0CwEPqpZkLRxiRkM20+sif9c/wBEv+igZcHiigAAAABJRU5ErkJggg==",
  },
  description:
    "Professional portfolio of Mohsan Ali, a Backend Developer with expertise in Laravel, NestJS, and Next.js.",
}

{/* <img src="" alt="circled-m"> */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
