// components/SpinnerImage.js
import React from 'react';
import Image from 'next/image';

import myPic from "../../../public/images/myPic.jpeg"
import { motion } from 'framer-motion';


const SpinnerImage = () => {
  return (
    <div className="relative flex justify-center">
      {/* Spinning Border */}
      <div
      className="spinner-border absolute z-10"></div>

      {/* Static Image */}
      <motion.div
        initial={{opacity:0,y: 200}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration:0.6,delay: 0.1, ease:"easeIn"}}
        className='sm:w-[20px] xs:w-[20px] lg:w-[300px]'>
        <Image
          src={myPic}
          alt="Static Image"
          width={230}
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
}

export default SpinnerImage;
