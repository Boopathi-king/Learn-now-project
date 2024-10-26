import React from "react";
import { motion } from "framer-motion";
import FullStackbanner from './../../assets/full-stack-banner-img.jpg';
import DataScience from './../../assets/Data science.png';
import DigitalMarketing from './../../assets/Digital marketing.png';
import GraphicDesign from './../../assets/Graphics design.jpg'
import Phyton from './../../assets/Phyton.webp';
import AiImage from './../../assets/Course-Logo.png'



const courseList = [
  {
    id: 1,
    name: "Full Stack Web Development",
    price: "₹25,000",
    timing: "4 weeks",
    description: "Learn to build dynamic websites using HTML, CSS, and JavaScript.",
    image: FullStackbanner,
  },
  {
    id: 2,
    name: "Data Science Bootcamp",
    price: "₹29,000",
    timing: "6 weeks",
    description: "Master data analysis, visualization, and machine learning.",
    image: DataScience,
  },
  {
    id: 3,
    name: "Digital Marketing Course",
    price: "₹20,000",
    timing: "3 weeks",
    description: "Understand SEO, social media, and online advertising.",
    image: DigitalMarketing,
  },
  {
    id: 4,
    name: "Graphic Design Fundamentals",
    price: "₹30,000",
    timing: "5 weeks",
    description: "Learn the principles of design and use Adobe tools.",
    image: GraphicDesign,
  },
  {
    id: 5,
    name: "Python Programming for Beginners",
    price: "₹19,000",
    timing: "4 weeks",
    description: "Get started with Python and learn programming basics.",
    image: Phyton,
  },
  {
    id: 6,
    name: "AI For Everyone",
    price: "₹35,000",
    timing: "4 weeks",
    description: "Get started with Artificial intelligence basics.",
    image: AiImage,
  },
];

const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">
            Our tutor subjects
          </h1>
          <p className="font-semibold text-3xl">
            Find Online Tutor in Any Subject
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {courseList.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: course.id * 0.1,
            }}
            className="border rounded-lg border-secondary/20 p-4 flex flex-col items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
          >
            <img src={course.image} alt={course.name} className="w-fit h-32 object-cover rounded-md" />
            <h2 className="font-semibold text-lg">{course.name}</h2>
            <p className="text-gray-600">{course.description}</p>
            <div className="flex justify-between w-full">
              <span className="font-bold">{course.price}</span>
              <span className="text-gray-500">{course.timing}</span>
            </div>
            <div className="flex justify-between w-full">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
                View More
              </button>
              <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600">
                Enroll
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default SubjectCard;