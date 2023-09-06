import React, { Component } from 'react'
import Navbar from './Navbar'
import '../index.css'
import '../Styles/Contact.css'
import Github from '../Img/github-icon.svg'
import Facebook from '../Img/facebook.svg'
import Linkedin from '../Img/linkedin.svg'
export default class Contact extends Component {
    render() {
        return (
            <div className="contact background_black">
                <Navbar burguer="itIsNotHome " navbar_class="burger_menu " home={true}/>
                <Form />
            </div>
        )
    }
}

function Form(){
    return(
        <div className="contact__container">
            <div className="contact__container__contactame">
                <h2>
                    Contact me
                </h2>
                <div className="contact__background">
                    <div className="contact__info">
                        <p>Jose Cortez</p>
                        <a href="tel:3333495968">333-349-5968</a>
                        <a href="mailto:jose.vazcortez@gmail.com">Jose.VazCortez@gmail.com</a>
                    </div>
                    <div className="contact__social_media">
                        <a target="_blank" rel="noreferrer"  href="https://github.com/JoseCortez1">
                            <img src={Github} alt="Github icon" className="social_media__icon"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/G3LATINA/">
                            <img src={Facebook} alt="Facebook icon" className="social_media__icon"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jose-eduardo-vaz">
                            <img src={Linkedin} alt="Linkedin icon" className="social_media__icon linkedin"/>
                        </a>

                    </div>
                </div>
            </div>
            <form className="contact__container__contactame">
                <h2>
                    Do you want i'll contact with you?
                </h2>
                <div className="contact__background">
                    <div className="contact__form__inputs">

                        <div className="contact__container__input">
                            <label htmlFor="number">
                                Number of cellphone
                            </label>
                            <input type="text" name="number"/>
                        </div>
                        <div className="contact__container__input">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" name="email"/>
                        </div>
                        <div className="contact__container__input">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" name="name"/>
                        </div>

                    </div>
                    <div className="contact__form__containet">
                        <input className="contact__form__submit" type="submit" value="Send" />
                    </div>
                </div>
            </form>
        </div>
    )
}