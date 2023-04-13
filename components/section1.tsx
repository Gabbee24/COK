'use client'
import { Container } from "reactstrap";
import Image from "next/image";
import hero from '../public/hero-img1.png'
import {HiOutlineSearch} from 'react-icons/hi'
import './section.css'

const FirstSection = () => {
  return (
    <section >
      <Container>
        <div className="row">
          <div className="col">
            <div className="hero__content">
              <h2>Anytime, Anywhere.  Learn on your suitable schedule</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente delectus quia culpa officiis natus deserunt ducimus quam facilis, ullam blanditiis ea alias dolore asperiores hic perferendis, corporis doloribus harum vero.</p>
            
            <div className="search">
              <input style={{'borderRadius':'10px'}} type="text" placeholder="    Search..."/>
              <button className="btn">Search</button>
            </div>
            </div>
          </div>

          <div className="col" >
            <Image src={hero} alt="Picx" className="w-100" width={500} height={300} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FirstSection