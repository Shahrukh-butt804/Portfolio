// components/SpinnerImage.js
import React from 'react';
import Image from 'next/image';

// import myPic from "/public"
import { motion } from 'framer-motion';


const SpinnerImage = () => {
  return (
    <div className="relative flex justify-center">
      {/* Spinning Border */}
      <div
      className="spinner-border absolute z-10"></div>

      {/* Static Image */}
      <motion.div
        initial={{opacity:0,}}
        animate={{opacity: 1 }}
        transition={{ duration:1,delay: 0.1, ease:"easeIn"}}
        className='sm:w-[20px] xs:w-[20px] lg:w-[300px]'>
        <Image
          src="/images/myPic.jpeg"
          alt="Static Image"
          width={230}
          height={230}
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
}

export default SpinnerImage;
