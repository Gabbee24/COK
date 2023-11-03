'use client'
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlinePlayCircle } from 'react-icons/ai'

// import chooseImg from '../public/why-choose-us.png';
// import "./choose-us.css";

import ReactPlayer from "react-player";

const HomeSection2 = () => {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <div style={{ marginTop: '70px' }}>

            <div style={{ display: 'flex', flexDirection: 'row' }}>


                <div className="usCol">
                    <Image src='/undraw1.svg' alt="undraw" width={600} height={600} />
                </div>


                <div className="container">
                    <div className="choose__content">
                        <h2>Our Vision</h2>
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

            </div>
        </div>
    );
};

export default HomeSection2;