
import courseImg01 from '../public/web-development.png';
import courseImg02 from '../public/kids-learning.png';
import courseImg03 from '../public/seo.png';
import courseImg04 from '../public/ui-ux.png';
import FreeCourseCard from "./FreecourseCard";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (    
        <div >
          <div >
            <h2 className="fw-bold">Our Free Courses</h2>
          </div>
          <div  style={{display:'flex', flexDirection:'row'}}>
            {freeCourseData.map((item) => (
                <div key={item.id}>
                <FreeCourseCard item={item} />
                </div>
            ))}
          </div>
        </div>
      
  );
};

export default FreeCourse;