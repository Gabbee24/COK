import Image from 'next/image';
import {RiUserLine} from 'react-icons/ri';
import {AiFillStar} from 'react-icons/ai';

const FreeCourseCard = (props:any) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div style={{color: 'black', margin:'30px'}} className="single__free__course">
      <div style={{height:'220px',width:'220px', overflow:'hidden',borderRadius:'10px'}}>
        <Image src={imgUrl} alt=''></Image>
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <span className=" d-flex align-items-center gap-2">
            <RiUserLine/> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
                <AiFillStar/> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;