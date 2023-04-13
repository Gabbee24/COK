'use client'
import Image from "next/image";
import aboutImg from '../public/about-us.png';
import CountUp from "react-countup";

const AboutPage = () => {
  return (
    <section>
        <div className="container">
            <div style={{display:'flex',flexDirection:'row' }}>
                <div className="aboutCol" style={{marginRight:'25px'}}>
                    <div className="about__image">
                        <Image src={aboutImg} alt="aboutUs" height={500} width={1000}></Image>
                    </div>
                </div>

                <div className="aboutCol">
                    <div className="about_content">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolor quae earum aperiam, obcaecati laborum nostrum officia, praesentium reiciendis unde perspiciatis eos voluptatum consectetur magni voluptatem. Harum ea reprehenderit excepturi!</p>
                        
                        <div className="about__counter">
                          <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                            <div className="single__counter">
                                <span className="counter">
                                    <b style={{color:'black'}}><CountUp start={0} end={25} duration={2} suffix="K"/></b>
                                </span>
                                <p className="counter__title">Available Courses</p>
                            </div>
                            
                            <div className="single__counter">
                                <span className="counter">
                                    <b style={{color:'black'}}><CountUp start={0} end={12} duration={2} suffix="M"/></b>
                                </span>
                                <p className="counter__title">Students around the world</p>
                            </div>
                          </div>
                          
                          
                          <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <div className="single__counter">
                                <span className="counter">
                                    <b style={{color:'black'}}><CountUp start={0} end={25} duration={2} suffix="K"/></b>
                                </span>
                                <p className="counter__title">Available Courses</p>
                            </div>
                            
                            <div className="single__counter">
                                <span className="counter">
                                    <b style={{color:'black'}}><CountUp start={0} end={12} duration={2} suffix="M"/></b>
                                </span>
                                <p className="counter__title">Students around the world</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage