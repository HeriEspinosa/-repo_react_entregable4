import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <section className='footer__info'>
                <section className="info__code">
                    <h3 className="info__code-title">GitHub</h3>
                    <a href="https://github.com/HeriEspinosa/-repo_react_entregable4.git" target='blank'><p>Hecha un Vistazo a mi Codigo <span>Aqui</span></p></a>
                </section>
            </section>
            <section className="footer__bottom">
                <hr />
                <p><i className='bx bxs-copyright'></i> Ing. Espinosa all rigths reserved</p>
            </section>
        </section>
    )
}

export default Footer