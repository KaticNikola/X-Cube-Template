import React, { Component } from 'react'

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'
import FormInputFeald from '../../../../components/formInputFeald/FormInputFeald'

export class Footer extends Component {
    

    render() {
        return (
            <div className='footer column80'>
                <div className="footer-txt">
                    <div className="footer-txt_title">
                        <SecondaryTitle title="COMPANY NAME" />
                    </div>
                    <div className="footer-txt_description">
                        <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    </div>
                </div>
                <div className="footer-company">
                    <div className="footer-company_title">
                        <SecondaryTitle title="COMPANY" />
                    </div>
                    <div className="footer-company_links">
                        <ul>
                            <li className="footer-company_link-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="footer-company_link-item">
                                <a href="#">About</a>
                            </li>
                            <li className="footer-company_link-item">
                                <a href="#">Testimonials</a>
                            </li>
                            <li className="footer-company_link-item">
                                <a href="#">Services</a>
                            </li>
                            <li className="footer-company_link-item">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="footer-services">
                    <div className="footer-services_title">
                        <SecondaryTitle title="SERVICES" />
                    </div>
                    <div className="footer-services_links">
                        <ul>
                            <li className="footer-services_link-item">
                                <a href="#"> Primary Care</a>
                            </li>
                            <li className="footer-services_link-item">
                                <a href="#">Pharmacy</a>
                            </li>
                            <li className="footer-services_link-item">
                                <a href="#">Emergency</a>
                            </li>
                            <li className="footer-services_link-item">
                                <a href="#">Pediatrics</a>
                            </li>
                            <li className="footer-services_link-item">
                                <a href="#">Urgent Care</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <div className="footer-subscribe_title">
                        <SecondaryTitle title="SUBSCRIBE" />
                    </div>
                    <div className="footer-subscribe_form">
                        <div className="footer-subscribe_input">
                            <FormInputFeald
                                type="email"
                                name='email'
                                placeholder="Email"
                            />
                        </div>

                        <div className="footer-subscribe_btn btn-hover-green">
                            <Button content="Send" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer
