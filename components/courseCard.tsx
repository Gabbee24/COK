import Link from 'next/link';
import Image from 'next/image';
import {BsBook} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'

const CourseCard = (props: any) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div style={{margin:'10px'}} >
      <div style={{height:'220px', overflow:'hidden',borderRadius:'10px'}}>
        <Image src={imgUrl} alt='img' height={350} width={500}></Image>
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}} >
          <p className="lesson d-flex align-items-center gap-1">
            <BsBook/> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <AiOutlineUser/> {students}K
          </p>
        </div>

        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}} >
          <p className="rating d-flex align-items-center gap-1">
            <AiFillStar/> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <button className='btn'>
                <Link href='/signin'>Enroll Now</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;