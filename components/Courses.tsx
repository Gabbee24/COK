'use client'
import courseImg1 from "../public/web-design.png";
import courseImg2 from "../public/graphics-design.png";
import courseImg3 from '../public/ui-ux.png';
import CourseCard from "./courseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop,Figma",
    lesson: 17,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Chartered Institute Of Personnel Management Courses",
    lesson: 8,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <div className="courseColl">
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginBottom:'10px'}}>
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae <br />
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div style={{marginTop:'30px'}}>
                <button className="btn">See All</button>
              </div>
            </div>

            <div style={{
                    display:'flex', 
                    flexDirection:'row',
                    justifyContent:'space-between', 
                    marginBottom:'10px',
                    // marginRight: '50px'
                }}>
                {coursesData.map((item) => (
                    <div key={item.id}>
                    <CourseCard item={item} />
                    </div>
                ))}
          </div>
        </div>
    </section>
  );
};

export default Courses;