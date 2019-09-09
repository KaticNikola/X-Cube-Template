import React, { Component } from 'react'

import MainTitle from '../../../../components/mainTitle/MainTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'
import Video from '../../../../components/video/Video'
import SVGHeader from '../../../../components/SVGHeader/SVGHeader'


export class Header extends Component {
    state = {
        header: {
            title: {
                content: "",
                fontSize: "",
                fontWeight: "",
                textTransform: ''
            },
            description: {

            },
            buttonLeft: {},
            buttonRigth: {}
        }
    }

    render() {
        return (
            <div className="header" style={{clipPath: 'url(#svgPath)'}}>
                <div className="content column70">
                    <div className="header-text column50">
                        <div className="header-text_main-title">
                            <MainTitle title='Lorem ipsum dolor sit amet.' />
                        </div>
                        <div className="header-text_description">
                            <Description desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat autem voluptates et, enim numquam.Ipsum repellat autem voluptates et, enim numquam.' />
                        </div>
                        <div className="header-text_button">
                            <div className="btn-green">
                                <Button content='Get Started' />
                            </div>
                            <div className="btn-transparent">
                                <Button content='Learn More' />
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
    }
}

export default Header
