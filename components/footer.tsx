'use client';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
// import { GoArrowUpRight } from 'react-icons/go';
import {MdOutlineArrowOutward} from 'react-icons/md';

const Footer = () => (
    <footer className="bg-black mt-5 text-white px-5  md:px-10 py-24 pb-10 overflow-hidden relative z-[-2]">

        <div >
            {/* <div>
                                <h2 className="font-black px-1 md:px-3 text-[25px] pb-10 tracking-wider">Geople<span className="text-[#FF0001]">x</span></h2>
                        </div> */}

            <div className="block md:flex justify-between border-b-[1px] pb-7 md:pb-5 border-white">

                <div className='pt-10 flex-col mx-1 p-2 px-3 md:pt-0'>
                    <div>
                        <h2 className="font-black px-1 md:px-3 text-[25px] pb-10 tracking-wider"><span className=" text-blue-700">C</span><span className="text-[#FF0001]">O</span><span className=" text-yellow-700">K</span></h2>
                    </div>

                    <div className="block md:flex">
                        <div className="px-0 md:px-3 py-3 md:py-0">
                            <Link href="/AboutUs" className="hover:border-b-[1px] hover:border-white pb-1 text-[#fff]/[0.7]">Home</Link>
                        </div>
                        <div className="px-0 md:px-3 py-3 md:py-0">
                            <Link href="/ServicesPage" className="hover:border-b-[1px] hover:border-white pb-1 text-[#fff]/[0.7]">All Courses</Link>
                        </div>
                        <div className="px-0 md:px-3 py-3 md:py-0">
                            <Link href="/Career" className="hover:border-b-[1px] hover:border-white pb-1 text-[#fff]/[0.7]">Categories</Link>
                        </div>
                        <div className="px-0 md:px-3 py-3 md:py-0">
                            <Link href="/Blog" className="hover:border-b-[1px] hover:border-white pb-1 text-[#fff]/[0.7]">Account</Link>
                        </div>
                        <div className="px-0 md:px-3 py-3 md:py-0">
                            <Link href="/Resources" className="hover:border-b-[1px] hover:border-white pb-1 text-[#fff]/[0.7]">Cart</Link>
                        </div>
                        <div className="px-0 md:px-3 py-3 md:py-0">
                            <Link href="/Contact" className="hover:border-b-[1px] hover:border-white pb-1 text-[#fff]/[0.7]">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-10 flex-col  mx-1 p-2 px-3  md:pt-0">
                    <p className='text-[#fff]/[0.5] font-bold text-2xl tracking-wider'  >More About <span className=" text-blue-700">C</span><span className="text-[#FF0001]">O</span><span className=" text-yellow-700">K</span> </p>
                    {/* <div className='text-[#fff]/[0.5] pt-5 gap-3' >
                        <div> <Link href="/Management" className=" h-[28px] flex"> <span> Delivery Policy </span>  </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Refund Policy</span>  </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Damaged jewelry policy</span>   </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Staff Profile</span>   </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Tearms And Condition</span>  </Link> </div>
                    </div> */}
                    <div className='text-[#fff]/[0.5] pt-5 gap-3' >
                        <div> <Link href="/Management" className=" h-[28px] flex"> <span> Guidelines </span> <span className="pt-1" ><MdOutlineArrowOutward /> </span> </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Payment Policy</span> <span className="pt-1" ><MdOutlineArrowOutward /> </span> </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Certification policy</span> <span className="pt-1" ><MdOutlineArrowOutward /> </span>  </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Staff Profile</span> <span className="pt-1" ><MdOutlineArrowOutward /> </span>  </Link> </div>
                        <div> <Link href="" className=" h-[28px] flex "> <span>Tearms And Condition</span> <span className="pt-1" ><MdOutlineArrowOutward /> </span> </Link> </div>
                    </div>
                </div>

                <div className="pt-10 flex-col  mx-1 p-2 px-3  md:pt-0">
                    <div>

                        <p className='text-[#fff]/[0.5] font-bold text-2xl tracking-wider'>Socials</p>
                        <div className='flex pt-2 gap-2 '>
                            <span className=" border border-[#fff]/[0.5] p-3 rounded-full text-sm">
                                <FaFacebookF />
                            </span>
                            <span className=" border border-[#fff]/[0.5] p-3 rounded-full text-sm ">
                                <FaTwitter />
                            </span>
                            <span className=" border border-[#fff]/[0.5] p-3 rounded-full text-sm ">
                                <AiFillInstagram />
                            </span>
                            <span className=" border border-[#fff]/[0.5] p-3 rounded-full text-sm ">
                                <AiFillLinkedin />
                            </span>
                            <span className=" border border-[#fff]/[0.5] p-3 rounded-full text-sm ">
                                <AiFillYoutube />
                            </span>
                        </div>

                        <div className='mt-10' >
                            <p className='text-[#fff]/[0.5] font-bold text-2xl tracking-wider'>Contacts</p>
                            <div className='md:flex pt-1 gap-3'>
                                <p className='text-[#fff]/[0.5]' >charles_keshinro@yahoo.com</p>
                                <p className='text-[#fff]/[0.5]' >+2349093829292</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div>
                <p className="text-center pt-8 text-[#D9D9D9] text-[14px] pb-5 relative z-10">© 2023 {' '}<span className=" text-blue-700">C</span><span className="text-[#FF0001]">O</span><span className=" text-yellow-700">K</span>. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;