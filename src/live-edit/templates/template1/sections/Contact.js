import React, { Component } from 'react'

import { Consumer } from '../../../templateContext/TemplateContext';

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Button from '../../../../components/button/Button'
import FormInputFeald from '../../../../components/formInputFeald/FormInputFeald'

export class Contact extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { title, button } = value.contact;
					return (
						<div className='contact column80'>
							<div className="contact-title">
								<SecondaryTitle {...title} />
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
									<Button {...button} />
								</div>
							</div>
						</div>
					)
				}}
			</Consumer>

		)




	}
}

export default Contact
