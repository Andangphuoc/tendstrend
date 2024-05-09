import React from 'react';
import PropTypes from 'prop-types';
import img__footer from './img/3409297.png'
import './styles.css'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div>
        <div className='footer__content'>
            <img src={img__footer} alt="" />
            <div className='footer__content__main'>
                <div className='footer__content__main__ele'>
                    <h5>Get In Touch</h5>
                    <a href="#" className='slider__subtilte subman__slider__box'>
                        <p>Book a Session </p>
                        <box-icon name='right-arrow-circle' className="box-icon-custom" type='solid' ></box-icon>
                    </a>
                </div>
                <div className='footer__content__main__ele'>
                    <h5>Get In Touch</h5>
                    <ul>
                        <li><a href="">About us</a></li>
                        <li><a href="">About us</a></li>

                        <li><a href="">About us</a></li>

                        <li><a href="">About us</a></li>
                        <li><a href="">About us</a></li>

                    </ul>
                </div>
                <div className='footer__content__main__ele'>
                    <h5>Get In Touch</h5>
                    <ul>
                        <li><a href="">About us</a></li>
                        <li><a href="">About us</a></li>

                        <li><a href="">About us</a></li>

                        <li><a href="">About us</a></li>
                        <li><a href="">About us</a></li>

                    </ul>
                </div>
            </div>
            
        </div>
        <div className='footer__content__submain'>
                <p>Copyright ©2023 UTA Dev Team. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;