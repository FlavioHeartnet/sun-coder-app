//TODO: Make the courses purchaseble in stripe and update database

import CheckoutButton from "@/components/checkoutbutton";

export default function Courses(){
    return(
        <div id="courses">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="grid text-center items-center gap-6 px-4 md:px-6 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Courses</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500/relaxed dark:text-gray-400">
                    Learn how to build the web with our expert-led courses. From frontend design to backend databases, we've
                    got you covered.
                    </p>
                </div>
                <div className="grid mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2">
                    <img
                        alt="Image"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Software Development Foundation</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                        Learn the fundamentals of software development with this easy-to-follow course.
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <img
                        alt="Image"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Web With Typescript</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Learn how to build fast and reliable application with typescript.
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <img
                        alt="Image"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Clean Archtechture</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                        Dive into this architecture pattern with our step-by-step guide.
                        </p>
                    </div>
                    </div>
                </div>
                <div>
                <p className="mx-auto max-w-[700px] text-gray-500/relaxed dark:text-gray-400">
                    Or get access to <b>everything</b> for the best price:
                    </p>
                </div>
                <CheckoutButton/>
                </div>
            </section>
        </div>
    ) 
}