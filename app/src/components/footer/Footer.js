import React from 'react'
import './Footer.css'

import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
    const today = new Date();
    return (
        <footer id="contact">
            <div className="footer-container">
                <h3 className='get-in-touch'>for further info and clarifications</h3>
            <p className='contact'>CONTACT</p>
                <div className="row">
                    <div className="col">
                      
                     <li><FaPhoneAlt className='icons'/> <a href="tel:+91 9746385253">+91 9746385253</a> </li>
                      <li><FaPhoneAlt className='icons'/>  <a href="tel:+91 9745465290">+91 9745465290</a> </li>
                     <li><MdEmail className='icons'/>   <a href="mailto:womentechnohub@gmail.com">womentechnohub@gmail.com</a> </li>
                       </div>
                    
                        <div className="col">
                        <div className="contact-form">
                            <form action="" id="contact-form" method="post">

                                <input type="text" name="name" placeholder='Your Name' className="form-control" required/>
                                <br></br>
                                <input type="email" name="email" className="form-control" placeholder="Your Email" required/><br/><br/>
                                
                                <textarea name="message" className="form-control" placeholder="Message (include your branch and year of study)"  rows="4" required></textarea> <br></br>
                                <input type="submit" className="form-control submit" value ="SEND" />
                                                    
                            </form>
                        </div>
                        </div>
                       
                </div>
            </div>
            <hr></hr>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer
