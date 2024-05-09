import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import img__slider from './img/3409297.png'
import img__slider__child from './img/93186.png'
import img__profiles from './img/IMAGE.png'
import img__ourparner from './img/Frame 52.png'



MainBody.propTypes = {
    
};

function MainBody(props) {
    return (
        <div className='slider'>
            <img className='main__slider__img' src={img__slider} alt=""/>
            {/* <img src={img__slider}  className="main__slider__child" alt=""/> */}
            <div className='main__slider'>
                <div className='slider__content'>
                    <p className='slider_tilte'>...Your one stop shop for
                     <span> digital identity </span>, 
                     <span> verification </span>  & <span> cutting  </span>
                     <span> edge technology </span> 
                     solutions</p>
                    <a href="#" className='slider__subtilte'>
                        <p>Book a Session </p>
                        <box-icon name='right-arrow-circle' className="box-icon-custom" type='solid' ></box-icon>
                    </a>
                </div>
                <img src={img__slider__child} alt="" />
            </div>
            <div className='submain__slider'>
                <div className='subman__slider__title'>
                    <h3>Services we offer</h3>
                    <p>Our solutions are all about simlification and optimisation</p>
                    <a href="#" className='slider__subtilte subman__slider__box'>
                        <p>Book a Session </p>
                        <box-icon name='right-arrow-circle' className="box-icon-custom" type='solid' ></box-icon>
                    </a>
                </div>
                <div className='subman__slider__ele'>
                    <div className='subman__slider__ele__tab'>
                        <div className='subman__slider__ele__tab__boxicon'>
                            <box-icon name='file-archive' type='solid' ></box-icon>
                        </div>          
                        <h6>Identity based solutions</h6>
                        <div className='line'></div>
                        <p>A strong identification system relies on an integrated robust ID verification solution:...</p>
                    </div>
                    <div className='subman__slider__ele__tab'>
                        <div className='subman__slider__ele__tab__boxicon'>
                            <box-icon name='file-archive' type='solid' ></box-icon>
                        </div>          
                        <h6>Identity based solutions</h6>
                        <div className='line'></div>
                        <p>A strong identification system relies on an integrated robust ID verification solution:...</p>
                    </div>
                    <div className='subman__slider__ele__tab'>
                        <div className='subman__slider__ele__tab__boxicon'>
                            <box-icon name='file-archive' type='solid' ></box-icon>
                        </div>          
                        <h6>Identity based solutions</h6>
                        <div className='line'></div>
                        <p>A strong identification system relies on an integrated robust ID verification solution:...</p>
                    </div>
                    <div className='subman__slider__ele__tab'>
                        <div className='subman__slider__ele__tab__boxicon'>
                            <box-icon name='file-archive' type='solid' ></box-icon>
                        </div>          
                        <h6>Identity based solutions</h6>
                        <div className='line'></div>
                        <p>A strong identification system relies on an integrated robust ID verification solution:...</p>
                    </div>
                </div>
            </div>
            <div className='slider__who_are_we'>
                <div className='subman__slider__title slider__who_are_we__center'>
                        <h3>Who Are We</h3>
                        <p>Tech strend is a leading player in the Information and Communications Technology space. We have in depth experience in the design, development, implementation and management of Identity management systems and have developed deep partnerships with the best of class companies in the world including NEC, Veridos, Microsoft, Oracle, EMC, IBM, HP and others. We bring together all this experience to create world class solutions that meet the needs of our clients today and enable them to lead in the emerging knowledge driven society of tomorrow</p>
                        <a href="#" className='slider__subtilte subman__slider__box'>
                            <p>Book a Session </p>
                            <box-icon name='right-arrow-circle' className="box-icon-custom" type='solid' ></box-icon>
                        </a>
                </div>
                <div className='subman__slider__ele quanlity'>
                    <div className='subman__slider__ele__tab quanlity__important quanlity__line__title'>
                        <h5>Quanlity Solutions</h5>
                        <ul>
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />
                         
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />

                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                        </ul> 
                    </div>
                    <div className='subman__slider__ele__tab quanlity__mid'>
                    <h5>Quanlity Solutions</h5>
                        <ul>
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />
                         
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />

                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                        </ul> 
                    </div>
                    <div className='subman__slider__ele__tab quanlity__important quanlity__line__title'>
                        <h5>Quanlity Solutions</h5>
                        <ul>
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />
                         
                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                            <hr />

                            <li>
                                <p>reliality</p>
                                <box-icon name='check-circle' type='solid' ></box-icon>
                            </li>
                        </ul> 
                    </div>
                </div>
                
            </div>    
            <div className='out__partners'>
            <div className='out__partners__nav'>
                <h2>Each and every client is importand</h2>
                <p className='sub__title_heading'>Our Success Stories</p>
                <div className='out__partners__main__subnav'>
                    <div className='out__partners__subnav'>
                        <h4>Where else can you get this fantastic and magical service?</h4>
                        <p>“The application was delivered before the expected day and the quality was magic. Where else can you get this fantastic and magical service?”</p>
                        <div className='out__partners__subnav__profiles'>
                            <img src={img__profiles} alt="logi" srcset="" />
                            <div className='profiles'>
                                <strong>Seun Adeta</strong>
                                <p className='small_text'>Co-fkdsal</p>
                                <span>Apple</span>
                            </div>
                        </div>
                    </div>
                    <div className='out__partners__subnav'>
                        <h4>Where else can you get this fantastic and magical service?</h4>
                        <p>“The application was delivered you get this fantastic and magical service?”</p>
                        <div className='out__partners__subnav__profiles'>
                            <img src={img__profiles} alt="logi" srcset="" />
                            <div className='profiles'>
                                <strong>Seun Adeta</strong>
                                <p className='small_text'>Co-fkdsal</p>
                                <span>Apple</span>
                            </div>
                        </div>
                    </div>
                    <div className='out__partners__subnav'>
                        <h4>Where else can you get this fantastic and magical service?</h4>
                        <p>“The application was delivered before the expected day and the quality was magic. Where else can you get this fantastic and magical service?”</p>
                        <div className='out__partners__subnav__profiles'>
                            <img src={img__profiles} alt="logi" srcset="" />
                            <div className='profiles'>
                                <strong>Seun Adeta</strong>
                                <p className='small_text'>Co-fkdsal</p>
                                <span>Apple</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='out__partners__nav out__partners__nav__second'>
                <h2>Each and every client is importand</h2>
                <p className='sub__title_heading'>Our Success Stories</p>
                <div className=''>
                    <div className='out__partners__subnav__img'>
                        <img src={img__ourparner} alt="" />
                        <img src={img__ourparner} alt="" />
                        <img src={img__ourparner} alt="" />
                        <img src={img__ourparner} alt="" />
                        <img src={img__ourparner} alt="" />
                        <img src={img__ourparner} alt="" />
                        <img src={img__ourparner} alt="" />
                        <img src={img__ourparner} alt="" />
                    </div>
                   
                </div>
            </div>
            </div>
        </div>
    );
}

export default MainBody;