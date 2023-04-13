'use client'
import {RiDraftLine} from 'react-icons/ri';
import {RiDiscussLine} from 'react-icons/ri';
import {RiContactsBookLine} from 'react-icons/ri';

const Features = () => {
  return (
  <div style={{marginTop:'120px'}}>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>

<h5>Our Features include</h5>
    </div>
    <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
            <div className="featureCol">
                <div className="single__feature">
                    <p style={{fontSize:'20px',fontWeight:'800'}}><RiDraftLine/></p>
                    <h6 style={{fontSize:'20px',fontWeight:'800'}}>Quick Learning</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti enim fugiat quod cupiditate possimus corporis cumque amet. Consequuntur, nostrum est!</p>
                </div>
            </div>
            <div className="featureCol">
                <div className="single__feature">
                    <p style={{fontSize:'20px',fontWeight:'800'}}><RiDiscussLine/></p>
                    <h6 style={{fontSize:'20px',fontWeight:'800'}}>All Time Support</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti enim fugiat quod cupiditate possimus corporis cumque amet. Consequuntur, nostrum est!</p>
                </div>
            </div>
            <div className="featureCol">
                <div className="single__feature">
                    <p style={{fontSize:'20px',fontWeight:'800'}}><RiContactsBookLine/></p>
                    <h6 style={{fontSize:'20px',fontWeight:'800'}}>Certification</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti enim fugiat quod cupiditate possimus corporis cumque amet. Consequuntur, nostrum est!</p>
                </div>
            </div>
    </div>
  </div>
  );
};

export default Features;