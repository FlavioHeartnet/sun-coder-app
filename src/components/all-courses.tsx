import CourseCard from "./course-card";
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
    {
        text: 'Advanced CSS and Responsive Design',
        price: '$69.99',
        image: '/placeholder.svg',
        isPlanActive: false,
        path: '/courses/javascript'

    },
    {
        text: 'Mastering TypeScript for Enterprise Applications',
        price: '$89.99',
        image: '/placeholder.svg',
        isPlanActive: false,
        path: '/courses/javascript'
    },
];
const coursesComponents = courses.map((a, i) => {
    return <CourseCard key={i} title={a.text} image={a.image} price={a.price} isPlanActive={a.isPlanActive} path={a.path} />
})
//TODO: Add a condition to then the user buy a Premium subs, the button turn to 'watch' and the price disapear
export default function AllCourses(){
    return (
        <section className="bg-[#141414] py-12 px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
              <h2 className="text-2xl font-bold mb-6">All Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesComponents}
              </div>
            
          </div>
        </section>
    )
}