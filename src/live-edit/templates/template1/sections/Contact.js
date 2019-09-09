import React, { Component } from 'react'

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Button from '../../../../components/button/Button'
import FormInputFeald from '../../../../components/formInputFeald/FormInputFeald'

export class Contact extends Component {
    render() {
        return (
            <div className='contact column80'>
                <div className="contact-title">
                    <SecondaryTitle title='GET IN TOUCH TODAY' />
                </div>
                <div className="contact-form column60">
                    <div className="contact-form_input">
                        <FormInputFeald
                            type="name"
                            name='name'
                            placeholder="Name"
                        />
                    </div>
                    <div className="contact-form_input">
                        <FormInputFeald
                            type="email"
                            name='email'
                            placeholder="Email"
                        />
                    </div>
                    <div className="contact-form_btn btn-hover-green">
                        <Button content="Book Appointmant" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
