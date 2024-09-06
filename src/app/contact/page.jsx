'use client'

import React, { useRef } from 'react'
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";



function Page() {
  let phoneRef = useRef(null);
  const emailRef = useRef(null);

  // Copy to clipboard
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

  // Click to mail with Gmail
  function handleEmail() {
    const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailRef.current.innerText)}`
    // Open the mailto URL in a new tab
    window.open(mailtoURL, '_blank');
  }

  return (
    <div className='bg-black h-screen -mt-32 text-white flex gap-5 justify-center items-center flex-col' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"500px",paddingLeft:"6px"}}>

      {/* Phone */}
      <div className='flex justify-center items-center border border-white p-4 rounded-lg' style={{gap:"75px"}}>
          <div
          className='text-green-400'
          style={{fontSize:"24px"}}
          >
            <FaPhone />
          </div>



        <div className='flex flex-col' style={{position:"relative",right:"37px"}}>
          <h2 className='text-green-400 text-xl'>Phone</h2>
          <p ref={phoneRef}>+92-332-3501198</p>
        </div>
          <div
             className='text-green-400 hoverIcons'
             style={{fontSize:"24px"}}
             onClick={handleCopy}
             >
            <FaCopy />
          </div>

      </div>


      {/* Email */}
      <div className='flex justify-center items-center border border-white p-4 rounded-lg' style={{gap:"40px"}}>
          <div
          className='text-green-400'
          style={{fontSize:"24px"}}
          >
            <SiGmail />
          </div>

        <div className='flex flex-col'>
          <h2 className='text-green-400 text-xl'>Email</h2>
          <p style={{fontSize:"15px"}} ref={emailRef}>shahrukhbutt854@gmail.com</p>
        </div>
          <div
             className='text-green-400 hoverIcons'
             style={{fontSize:"24px"}}
             onClick={handleEmail}
             >
            <MdOutgoingMail />
          </div>

      </div>


        {/* Address */}
        <div className='flex justify-start items-center  border border-white p-4 rounded-lg' style={{gap:"45px",width:"370px"}}>
                <div
                className='text-green-400'
                style={{fontSize:"24px"}}
                >
                  <IoLocation />
                </div>

              <div className='flex flex-col'>
                <h2 className='text-green-400 text-xl'>Address</h2>
                <p>Karachi</p>
              </div>
            </div>



    </div>
  )
}

export default Page
