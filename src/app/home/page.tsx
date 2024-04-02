'use client';
import CheckoutButton from "@/components/checkoutbutton";
import Layout from "../homeLayout";
import Courses from "./courses";
export default function HomePage(){
    

    return (
      <Layout>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                The complete platform to learn Web development
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Give yourself a platform to learn web development from scratch. 
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <a href="#courses" className="btn btn-accent text-xl mt-2 w-64">Let's cook</a>
            </div>
          </div>
        </section>
        <Courses/>
      </Layout>
    );
}

