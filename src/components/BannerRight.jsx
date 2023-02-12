import React from 'react'
import '../styles/bannerright.css'

const BannerRight = () => {
    return (
        <div className='banner__right'>
            <img src="/animation.gif" alt="Animation" />
            <div className="banner__letter">
                <h3 className='babylonica'>Ing. Espinosa</h3>
            </div>
            <hr />
            <section className="info__redes">
                <h3 className="footer__information-title">Social</h3>
                <section className="info__redes_social">
                    <p className="footer__information-info"><a href="http://facebook.com" target="_blank"><i className='bx bxl-facebook-circle'></i></a></p>
                    <p className="footer__information-info"><a href="http://instagram.com/hr_espinosa" target="_blank"><i className='bx bxl-instagram-alt' ></i></a></p>
                    <p className="footer__information-info"><a href="https://www.linkedin.com/in/heri-espinosa/" target="_blank"><i className='bx bxl-linkedin' ></i></a></p>
                </section>
            </section>

        </div>
    )
}

export default BannerRight