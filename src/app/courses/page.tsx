
import AllCourses from "./../../components/all-courses"
import PopularCourses from "./../../components/popular-courses"
import CtaProSub from "./../../components/cta-prosub"
import Layout from "../homeLayout"

export default function CoursesPage() {
  return (
    <Layout>
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-[#141414] text-white">
        <CtaProSub/>
        <PopularCourses/>
        <AllCourses/>
      </main>
    </div>
    </Layout>
  )
}
