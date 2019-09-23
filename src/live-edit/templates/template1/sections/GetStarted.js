import React, { Component } from 'react'

import { Consumer } from '../../../templateContext/TemplateContext';

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'

export class GetStarted extends Component {

	state = {

	}
	render() {
		
		return (
			<Consumer>
				{value => {
					const { title, description, button } = value.getStarted;
					return (
						<div className="getStarted">
							<div className="getStarted-txt">
								<div className="getStarted-txt_title">
									<SecondaryTitle {...title} />
								</div>
								<div className="getStarted-txt_description">
									<Description {...description} />
								</div>

							</div>
							<div className="getStarted-btn btn-white">
								<Button {...button} />
							</div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default GetStarted;
