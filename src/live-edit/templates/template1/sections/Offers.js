import React, { Component } from 'react'

import { Consumer } from '../../../templateContext/TemplateContext';

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'
import Icon from '../../../../components/icon/Icon'


export class Offers extends Component {
	state = {

	}

	render() {

		return (
			<Consumer>
				{value => {
					const { title, card1, card2, card3, card4 } = value.offers;
					return (
						<div className='offers'>
							<div className="content column80">
								<div className="title">
									<SecondaryTitle {...title} />
								</div>
								<div className="cards">
									<div className="card column23">
										<div className="card-icon">
											<Icon {...card1.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card1.title} />
										</div>
										<div className="card-description">
											<Description {...card1.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>

									<div className="card column23">
										<div className="card-icon">
											<Icon {...card2.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card2.title} />
										</div>
										<div className="card-description">
											<Description {...card2.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>

									<div className="card column23">
										<div className="card-icon">
											<Icon {...card3.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card3.title} />
										</div>
										<div className="card-description">
											<Description {...card3.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>

									<div className="card column23">
										<div className="card-icon">
											<Icon {...card4.icon} />
										</div>
										<div className="card-title">
											<SecondaryTitle {...card4.title} />
										</div>
										<div className="card-description">
											<Description {...card4.description} />
										</div>
										<div className="card-btn btn-text ">
											< Button content="Learn More &#8594;" />
										</div>

									</div>
								</div>

							</div>
						</div>
					)
				}}
			</Consumer>

		)
	}
}

export default Offers
