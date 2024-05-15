import Image from "next/image";
import { Button } from "./ui/button";
import { Link } from "./ui/link";
//TODO: Add a condition to then the user buy a Premium subs, the button turn to 'watch' and the price disapear
export default function AllCourses(){
    return (
        <section className="bg-[#141414] py-12 px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
              <h2 className="text-2xl font-bold mb-6">All Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#222222] rounded-lg overflow-hidden">
                  <Image
                    alt="Course Image"
                    className="w-full h-48 object-cover"
                    height={216}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "384/216",
                      objectFit: "cover",
                    }}
                    width={384}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Introduction to HTML and CSS</h3>
                    <p className="text-gray-400 mb-4">$49.99</p>
                    <Link variant="teal">Enroll</Link>
                  </div>
                </div>
                <div className="bg-[#222222] rounded-lg overflow-hidden">
                  <Image
                    alt="Course Image"
                    className="w-full h-48 object-cover"
                    height={216}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "384/216",
                      objectFit: "cover",
                    }}
                    width={384}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">JavaScript for Beginners</h3>
                    <p className="text-gray-400 mb-4">$59.99</p>
                    <Link variant="teal">Enroll</Link>
                  </div>
                </div>
                <div className="bg-[#222222] rounded-lg overflow-hidden">
                  <Image
                    alt="Course Image"
                    className="w-full h-48 object-cover"
                    height={216}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "384/216",
                      objectFit: "cover",
                    }}
                    width={384}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">React.js for Web Development</h3>
                    <p className="text-gray-400 mb-4">$79.99</p>
                    <Link variant="teal">Enroll</Link>
                  </div>
                </div>
                <div className="bg-[#222222] rounded-lg overflow-hidden">
                  <Image
                    alt="Course Image"
                    className="w-full h-48 object-cover"
                    height={216}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "384/216",
                      objectFit: "cover",
                    }}
                    width={384}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Full-Stack Development with Node.js</h3>
                    <p className="text-gray-400 mb-4">$99.99</p>
                    <Link variant="teal">Enroll</Link>
                  </div>
                </div>
                <div className="bg-[#222222] rounded-lg overflow-hidden">
                  <Image
                    alt="Course Image"
                    className="w-full h-48 object-cover"
                    height={216}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "384/216",
                      objectFit: "cover",
                    }}
                    width={384}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Advanced CSS and Responsive Design</h3>
                    <p className="text-gray-400 mb-4">$69.99</p>
                    <Link variant="teal">Enroll</Link>
                  </div>
                </div>
                <div className="bg-[#222222] rounded-lg overflow-hidden">
                  <Image
                    alt="Course Image"
                    className="w-full h-48 object-cover"
                    height={216}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "384/216",
                      objectFit: "cover",
                    }}
                    width={384}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Mastering TypeScript for Enterprise Applications</h3>
                    <p className="text-gray-400 mb-4">$89.99</p>
                    <Link variant="teal">Enroll</Link>
                  </div>
                </div>
              </div>
            
          </div>
        </section>
    )
}