'use client'
import React, { useState } from "react";
import Image from "next/image";
import {AiOutlinePlayCircle} from 'react-icons/ai'

// import chooseImg from '../public/why-choose-us.png';
// import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div style={{marginTop:'70px'}}>
        
    <div style={{display:'flex', flexDirection:'row'}}>
      <div className="container">
            <div className="choose__content">
              <h2>Why Choose Us?</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt mollitia <br /> nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor <br /> sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi <br /> inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div>
          </div>

          <div className="usCol">
            <div style={{'position':'relative','top': '0','left':'0','width':'100%','height':'100%','zIndex':'777'}}>
              {showVideo ? (
                <ReactPlayer
                url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                controls
                width="100%"
                height="350px"
                />
                ) : (
                    <Image style={{borderRadius:'10px'}} src={'/why-choose-us.png'} alt="choose us"  height={400} width={1000} ></Image>
                    // <Image style={{borderRadius:'10px'}} src={chooseImg} alt="choose us"  height={400} width={1000} ></Image>
                    )}

              {!showVideo && (
                  <span style={{
                        position:'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#fff',
                        zIndex: '7777',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',}} className="play__icon">
                    <p>
                        <AiOutlinePlayCircle style={{fontSize:'40px',fontWeight:'500'}} onClick={() => setShowVideo(!showVideo)} />
                    </p>
                </span>
              )}
            </div>
          </div>
    </div>
              </div>
  );
};

export default ChooseUs;