'use client'
import Link from "next/link"
import { Container } from "reactstrap"
import 'remixicon/fonts/remixicon.css'
import {RiPantoneLine} from 'react-icons/ri'
import {BsTelephone} from 'react-icons/bs'
import './header.css'


const Header: any = () => {
  return (
    <header style={{'borderBottom' : 'green solid 2px'}}>
      <div>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center" style={{display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%"}}>
              <RiPantoneLine style={{'margin':'0px','color':' #0a2b1e'}} /> COK 
            <p style={{'color':'rgb(37, 20, 20)'}}>Academy</p>
            </h2>
          </div>

          <div className="nav d-flex align-item-center gap-5">
            <div className="nav__menu nav_ul">
              <div className="nav__list nav_li">

              <div className="nav__item nav_a">
                    <Link href='/' >Home</Link>
              </div>
              <div className="nav__item nav_a">
                    <Link href='about' >About</Link>
              </div>
              <div className="nav__item nav_a">
                    <Link href='courses' >Courses</Link>
              </div>
              <div className="nav__item nav_a">
                    <Link href='signin' >SignIn</Link>
              </div>              
              <p>
              <BsTelephone/>
              </p>

              </div>
            </div>

            <div className="nav__right">
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;