import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { JSX, SVGProps } from "react"
//TODO: add BR info and make reusable components for other pages
export default function Javascript() {
  return (
    <div className="w-full dark:bg-[#141414] dark:text-white">
      <main>
        <section className="relative h-[80vh] min-h-screen overflow-hidden">
          <span className="w-full h-full object-cover rounded-md bg-gray-100 dark:bg-gray-800" />
          <div className="absolute inset-0 bg-gradient-to-t dark:from-[#141414] to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold">Mastering JavaScript: From Beginner to Advanced</h1>
            <p className="text-lg sm:text-xl max-w-[800px]">
              Unlock your full potential with our comprehensive JavaScript training program. Dive deep into the
              language, explore cutting-edge frameworks, and become a JavaScript expert.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="outline">Enroll Now</Button>
              <Link className="dark:text-gray-300 hover:text-gray-400" href="#more">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section id="more" className="py-20 max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              <p className="dark:text-gray-300 mb-8">
                Our JavaScript training program is designed to take you from beginner to advanced, covering a wide range
                of topics and techniques. Whether youre just starting out or looking to enhance your existing skills,
                this course has something for everyone.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Curriculum</h3>
                  <p className="dark:text-gray-300">
                  <CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" /> Fundamentals of JavaScript: syntax, data types, variables, operators, and control flow
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Advanced JavaScript: functions, objects, arrays, and prototypes
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Modern JavaScript: ES6+ features, modules, and asynchronous programming
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Web development with JavaScript: DOM manipulation, event handling, and browser APIs
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  JavaScript frameworks and libraries: React, Angular, Vue.js, and more
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Best practices, testing, and deployment
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Learning Outcomes</h3>
                  <p className="dark:text-gray-300">
                  <CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Become proficient in JavaScript syntax and language features
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Develop a deep understanding of modern JavaScript frameworks and libraries
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Build dynamic and responsive web applications
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Learn best practices for writing clean, maintainable, and scalable JavaScript code
                    <br /><CircleCheckIcon className="mr-2 inline h-5 w-5 text-green-500" />  Gain practical experience through hands-on projects and coding challenges
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Who is this for?</h3>
                  <p className="dark:text-gray-300">
                    This course is designed for anyone interested in learning JavaScript, from complete beginners to
                    experienced developers looking to expand their skills. Whether youre a web developer, software
                    engineer, or aspiring programmer, this comprehensive training program will help you master
                    JavaScript and unlock new career opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="JavaScript Training Course"
                className="rounded-lg shadow-lg"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <Button
                className="mt-6 sssspx-8 py-3 rounded-lg text-lg font-medium"
                variant="teal"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  
