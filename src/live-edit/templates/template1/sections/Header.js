import React, { Component } from 'react'

import { Consumer } from '../../../../templateContext/TemplateContext';

import MainTitle from '../../../../components/mainTitle/MainTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'
import Video from '../../../../components/video/Video'
import SVGHeader from '../../../../components/SVGHeader/SVGHeader'


export class Header extends Component {
	state = {
		
	}

	render() {
		return (
			<Consumer>
				{value => {
					const { title, description, buttonLeft,buttonRight } = value.header;
					return (
						<div className="header" style={{ clipPath: 'url(#svgPath)' }}>
							<div className="content column70">
								<div className="header-text column50">
									<div className="header-text_main-title">
										<MainTitle {...title} />
									</div>
									<div className="header-text_description">
										<Description {...description} />
									</div>
									<div className="header-text_button">
										<div className="btn-green">
											<Button {...buttonLeft} />
										</div>
										<div className="btn-transparent">
											<Button {...buttonRight} />
										</div>

									</div>
								</div>
								<div className="header-video column50">
									<Video />
								</div>
							</div>

							<div className="header-svg">
								<SVGHeader />
							</div>
						</div>
					)
				}}
			</Consumer>
		)

	}
}

export default Header
