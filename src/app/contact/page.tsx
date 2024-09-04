'use client'

import React, { useRef } from 'react'
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";






function page() {
  let phoneRef = useRef(null);
  const emailRef = useRef(null);


  function handleCopy() {
    if (phoneRef.current) {
      // Get the range of the text within the paragraph
      const range = document.createRange();
      range.selectNode(phoneRef.current);

      // Clear any previous selection
      const selection = window.getSelection();
      selection.removeAllRanges();

      // Add the new range to the selection
      selection.addRange(range);

      navigator.clipboard.writeText(phoneRef.current.innerText)
    }



  }
  function handleEmail() {

    const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailRef.current.innerText)}`
    // Open the mailto URL in a new tab
    window.open(mailtoURL, '_blank');
  }

  return (
    <div className='bg-black h-screen -mt-32 text-white flex gap-5 justify-center items-center flex-col'>

      {/* Phone */}
      <div className='flex gap-10 justify-between items-center border border-white  min-w-96 p-3'>
        <div
          className='text-green-400 text-2xl ps-2'><FaPhone /></div>

        <div className='flex justify-start min-w-72 items-start flex-col'>
          <h2 className='text-xl font-bold text-green-400 my-1'>Phone</h2>
          <p ref={phoneRef} className='text-xl'>+92-332-3501198</p>
        </div>

        <div
          onClick={() => handleCopy()}
          className='text-green-400 text-2xl hover:text-green-800'><FaCopy /></div>
      </div>

      {/* Email */}
      <div className='flex gap-10 justify-between items-center border border-white  min-w-96 p-3'>
        <div className='text-green-400 text-2xl ps-2'><SiGmail /></div>

        <div className='flex justify-start min-w-72 items-start flex-col'>
          <h2 className='text-xl font-bold text-green-400 my-1'>Email</h2>
          <p  className='text-xl' ref={emailRef}>shahrukhbutt854@gmail.com</p>
        </div>
        <div
          onClick={handleEmail}
          className='text-green-400 text-2xl hover:text-green-800'><MdOutgoingMail /></div>
      </div>

      {/* Addres */}
      <div className='flex gap-10 justify-between items-center border border-white  min-w-96 p-3'>
        <div className='text-green-400 text-2xl ps-2'><IoLocation /></div>

        <div className='flex justify-start min-w-72 items-start flex-col'>
          <h2 className='text-xl font-bold text-green-400 my-1'>Address</h2>
          <p className='text-xl'>Karachi</p>
        </div>

        <div
          className='text-black text-2xl'>
          <FaCopy /></div>
      </div>




    </div>
  )
}

export default page
