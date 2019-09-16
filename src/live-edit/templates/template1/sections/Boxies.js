import React, { Component } from 'react'

import { Consumer } from '../../../../templateContext/TemplateContext';

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'
import Icon from '../../../../components/icon/Icon'
import SVGBoxies from '../../../../components/SVGBoxies/SVGBoxies'



export class Boxies extends Component {


	state = {
		
	}
	render() {
		

		return (
			<Consumer>
				{value => {
					const { title, description, box1, box2, box3, box4, box5, box6, box7, box8, button } = value.boxies;
					return (
						<div className="boxies" style={{ clipPath: 'url(#svgBox)' }}>
							<div className="boxies-title column60">
								<div className="boxies-title_description">
									<Description {...description} />
								</div>
								<div className="boxies-title_title">
									<SecondaryTitle {...title} />
								</div>
							</div>

							<div className="boxies-content">
								<div className="boxies-content_cards column80">
									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box1.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box1.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box1.description} />
										</div>
									</div>
									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box2.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box2.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box2.description} />
										</div>
									</div>

									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box3.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box3.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box3.description} />
										</div>
									</div>
									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box4.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box4.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box4.description} />
										</div>
									</div>

									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box5.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box5.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box5.description} />
										</div>
									</div>

									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box6.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box6.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box6.description} />
										</div>
									</div>
									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box7.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box7.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box7.description} />
										</div>
									</div>
									<div className="boxies-card">
										<div className="boxies-card_icon">
											<Icon  {...box8.icon} />
										</div>
										<div className="boxies-card_title">
											<SecondaryTitle {...box8.title} />
										</div>
										<div className="boxies-card_descripiton">
											<Description {...box8.description} />
										</div>
									</div>
								</div>
							</div>
							<div className="boxies-btn btn-white">
								<Button {...button} />
							</div>

							<div className="boxies-svg">
								<SVGBoxies />
							</div>
						</div>
					)
				}}
			</Consumer>
		)

	}
}

export default Boxies
