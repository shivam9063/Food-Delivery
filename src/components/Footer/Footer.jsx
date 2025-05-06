import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, magni. Nobis blanditiis molestias totam sapiente corrupti adipisci est cum deserunt, dignissimos vitae consequuntur nisi unde cumque similique, veniam praesentium nostrum!</p>
               <div className='footer-social-icon'>
                  <a href="https://www.facebook.com/profile.php?id=100089081652092" target="_blank" rel="noopener noreferrer">
                      <img src={assets.facebook_icon} alt="" />
                  </a>
                  <a href="https://x.com/ShivamPath93725" target="_blank" rel="noopener noreferrer">
                      <img src={assets.twitter_icon} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/shivam9076/" target="_blank" rel="noopener noreferrer">
                      <img src={assets.linkedin_icon} alt="" />
                  </a>
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                   <h2>GET IN TOUCH</h2>
                   <ul>
                    <li>+91-907-698-5876</li>
                    <li>tomato@gmail.com</li>
                   </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 @ Shivam Pathak - All Right Reserved
        </p>
    </div>
  )
}

export default Footer
