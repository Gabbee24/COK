'use client'
import { Container, Row, Col } from "reactstrap";
import {TbBrandVimeo} from 'react-icons/tb';
import {ImPinterest2} from 'react-icons/im';
import {BsDribbble} from 'react-icons/bs';
import {BsApple} from 'react-icons/bs';
import {ImFinder} from 'react-icons/im';
import {AiOutlineGoogle} from 'react-icons/ai';

const Company = () => {
  return (
    <section>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Col lg='2' md='3'>
                <h4 style={{ display:'flex'}}>
                    <TbBrandVimeo/><p>Vimoe</p>
                </h4>
            </Col>

            <Col lg='2' md='3'>
                <h4  style={{ display:'flex'}}>
                    <ImPinterest2/> <p>Pinterest</p>
                </h4>
            </Col>

            <Col lg='2' md='3'>
                <h4  style={{ display:'flex'}}>
                    <BsDribbble/><p>Dribbble</p>
                </h4>
            </Col>

            <Col lg='2' md='3'>
                <h4  style={{ display:'flex'}}>
                    <BsApple/><p>Apple</p>
                </h4>
            </Col>
            
            <Col lg='2' md='3'>
                <h4  style={{ display:'flex'}}>
                    <ImFinder/><p>Finder</p>
                </h4>
            </Col>

            <Col lg='2' md='3'>
                <h4  style={{ display:'flex'}}>
                    <AiOutlineGoogle/> <p>google</p>
                </h4>
            </Col>
        </div>
    </section>
  )
}

export default Company