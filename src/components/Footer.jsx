import React from 'react';
import bayaselFooterImg from '../assets/bayasel-footer-logo.svg';
import X from '../assets/footerLogo/X.svg';
import faceBook from '../assets/footerLogo/facebook.svg'
import instagram from '../assets/footerLogo/instagram.svg'
import './Styles/footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer-grid">
            <div className='bayasel-socials'>
                <img src={bayaselFooterImg} alt="BayaSel Logo" />
                <p>
                    An emerging ecommerce platform offering a wide range of products, aims to enhance its user experience to increase customer satisfaction and drive business growth.
                </p>
                <ul>
                    <li><a href="#"><img src={faceBook} alt="facebook" /></a></li>
                    <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
                    <li><a href="#"><img src={X} alt="x" /></a></li>
                </ul>
            </div>
            <div className='bayasel-about footer-info'>
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Journal</a></li>
                </ul>
            </div>
            <div className='bayasel-help footer-info'>
                <h3>Help</h3>
                <ul>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className='bayasel-categories footer-info'>
                <h3>Categories</h3>
                <ul>
                    <li><a href="#">Crops</a></li>
                    <li><a href="#">Livestock</a></li>
                    <li><a href="#">Poultry Product</a></li>
                    <li><a href="#">Aqua culture</a></li>
                </ul>
            </div>
            <div className='bayasel-contacts footer-info'>
                <h3>Contact</h3>
                <ul>
                    <li>No. 123 adebayor street</li>
                    <li><a href="tel:++2345678910">+2345678910</a></li>
                    <li><a href="mailto:info@bayasel.com">info@bayasel.com</a></li>
                </ul>
            </div>
        </div>
        
        <p>Copyright © {new Date().getFullYear()} bayacel.com. All rights reserved</p>
    </footer>
  )
}

export default Footer