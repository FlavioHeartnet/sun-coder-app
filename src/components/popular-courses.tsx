import CourseItem from "./course-item";

const courses = [
    {
        text: 'Mastering JavaScript: From Beginner to Advanced',
        price: '$49.99',
        image: '/placeholder.svg',
        isPlanActive: false,
        path: '/courses/javascript'
    },
    {
        text: 'JavaScript for Beginners',
        price: '$59.99',
        image: '/placeholder.svg',
        isPlanActive: false,
        path: '/courses/javascript'
    },
    {
        text: 'React.js for Web Development',
        price: '$79.99',
        image: '/placeholder.svg',
        isPlanActive: false,
        path: '/courses/javascript'
    },
    {
        text: 'Full-Stack Development with Node.js',
        price: '$99.99',
        image: '/placeholder.svg',
        isPlanActive: false,
        path: '/courses/javascript'
    },
];
const coursesComponents = courses.map((a, i) => {
    return <CourseItem key={i} title={a.text} image={a.image} price={a.price} isPlanActive={a.isPlanActive} path={a.path} />
})
//TODO: Add a condition to then the user buy a Premium subs, the button turn to 'watch' and the price disapear
export default function PopularCourses(){
    return(
        <section className="bg-[#222222] py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Courses</h2>
            <div className="flex gap-4 space-x-4 overflow-x-auto">
             {coursesComponents} 
            </div>
          </div>
        </section>
    )
}