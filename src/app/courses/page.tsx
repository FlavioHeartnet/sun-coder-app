
import AllCourses from "./../../components/all-courses"
import PopularCourses from "./../../components/popular-courses"
import CtaProSub from "./../../components/cta-prosub"
import Layout from "../homeLayout"
import { getUserInfoAction } from "../actions/getUserInfoAction"

export default async function CoursesPage() {
  const {subscriptions} = await getUserInfoAction(true);
  return (
    <Layout>
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <CtaProSub isPlanActive={subscriptions[0].planActive} />
        <PopularCourses/>
        <AllCourses/>
      </main>
    </div>
    </Layout>
  )
}
