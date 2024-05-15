import Image from "next/image";
import { Button } from "./ui/button";
import Link from "./ui/link";


//TODO: Add a condition to then the user buy a Premium subs, the button turn to 'watch' and the price disapear
export default function PopularCourses(){
    return(
        <section className="bg-[#222222] py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Courses</h2>
            <div className="flex gap-4 space-x-4 overflow-x-auto">
              <div className="flex-shrink-0 w-64">
                <Image
                  alt="Course Image"
                  className="rounded-lg mb-2"
                  height={144}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "256/144",
                    objectFit: "cover",
                  }}
                  width={256}
                />
                <h3 className="text-lg font-bold mb-1">Mastering JavaScript: From Beginner to Advanced</h3>
                <p className="text-gray-400 mb-2">$49.99</p>
                <Button variant="teal">Enroll</Button>
                <Link variant='teal' href='/courses/javascript' size='default' className={undefined} text='Enroll' />
              </div>
              <div className="flex-shrink-0 w-64">
                <Image
                  alt="Course Image"
                  className="rounded-lg mb-2"
                  height={144}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "256/144",
                    objectFit: "cover",
                  }}
                  width={256}
                />
                <h3 className="text-lg font-bold mb-1">JavaScript for Beginners</h3>
                <p className="text-gray-400 mb-2">$59.99</p>
                <Button variant="teal">Enroll</Button>
              </div>
              <div className="flex-shrink-0 w-64">
                <Image
                  alt="Course Image"
                  className="rounded-lg mb-2"
                  height={144}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "256/144",
                    objectFit: "cover",
                  }}
                  width={256}
                />
                <h3 className="text-lg font-bold mb-1">React.js for Web Development</h3>
                <p className="text-gray-400 mb-2">$79.99</p>
                <Button variant="teal">Enroll</Button>
              </div>
              <div className="flex-shrink-0 w-64">
                <Image
                  alt="Course Image"
                  className="rounded-lg mb-2"
                  height={144}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "256/144",
                    objectFit: "cover",
                  }}
                  width={256}
                />
                <h3 className="text-lg font-bold mb-1">Full-Stack Development with Node.js</h3>
                <p className="text-gray-400 mb-2">$99.99</p>
                <Button variant="teal">Enroll</Button>
              </div>
            </div>
          </div>
        </section>
    )
}