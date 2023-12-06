import React from 'react'
import '../Scroll/Scroll.css'
import qk from '../Scroll/qk.webp'
import sipay from '../Scroll/spay.webp'
import visa from '../Scroll/visa.webp'
export default function Scroll() {
  return (
    <div className='bann'>
    <h2 className='btop'>Trusted By Top investors</h2>
    <div className="banner">
      <img src={visa} alt="" />
      <img src={sipay} alt="" />
      <img src={qk} alt="" />
      <img src="https://sileon.com/_next/image//?url=https%3A%2F%2Fapi.sileon.com%2Fapp%2Fuploads%2F2022%2F03%2Fblock-partners-sj.png&w=1920&q=80" alt="" />
      <img src="https://sileon.com/_next/image//?url=https%3A%2F%2Fapi.sileon.com%2Fapp%2Fuploads%2F2022%2F03%2FZORRZ_Logo_Sileon-modified-399x106.png&w=1920&q=80" alt="" />
      
    </div>
  </div>
)
}
