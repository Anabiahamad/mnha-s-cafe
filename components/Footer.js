import React from 'react'

function Footer() {
  return (
<footer className='items-center mb-0 pb-0 bottom-0 bg-alt2'>
<div className="footer-container flex justify-around wrap">
    <div className="footer-content m-10">
        <h3 className='mb-10'>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 234 567 890</p>
    </div>
    <div className="footer-content m-10">
        <h3 className='mb-10'>Follow Us</h3>
        <ul className="social-media">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
    </div>
    <div className="footer-content m-10">
        <h3 className='mb-10'>Quick Links</h3>
        <ul className="quick-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#soups">Menu</a></li>
        </ul>
    </div>
</div>
<div className="footer-bottom flex justify-center">
    <p>&copy; 2024 MNHA's Bakery. All Rights Reserved.</p>
</div>
</footer>
  )
}

export default Footer