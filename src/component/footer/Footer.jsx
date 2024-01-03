import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
        <div className="footer">
            <div>
                <h2>Promoteclips</h2>
                <p>@2023</p>
                <select name="cars" id="cars">
                    <option value="volvo">English</option>
                    <option value="volvo">French</option>
                </select>
            </div>
            <div>
                <h2>Company</h2>
                <ol>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Private Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ol>
            </div>
            <div>
                <h2>Social</h2>
                <ol>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">TikTok</a></li>
                    <li><a href="#">Instagram</a></li>
                </ol>
            </div>
            <div>
                <h2>Support</h2>
                <ol>
                    <li><a href="#">+234 805 354 23</a></li>
                    <li><a href="#">info@Promoteclips.com</a></li>
                    <li><a href="#">Contact form</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Connect with ouframe</a></li>
                </ol>
            </div>
            <div className='address'>
                <h2>Address</h2>
                <p>No 3, Adeboye street,Ikoyi, Lagos 001211,Nigeria</p>
            </div>
        </div>
    </div>
  )
}
