import React, { Component } from 'react'

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'
import Icon from '../../../../components/icon/Icon'
import SVGBoxies from '../../../../components/SVGBoxies/SVGBoxies'



export class Boxies extends Component {
    render() {
        return (
            <div className="boxies" style={{clipPath: 'url(#svgBox)'}}>
                <div className="boxies-title column60">
                    <div className="boxies-title_description">
                        <Description desc="WHY TRUST US ?" />
                    </div>
                    <div className="boxies-title_title">
                        <SecondaryTitle title='HIGH QUALITY STANDARDS THAT SET US APART' />
                    </div>
                </div>

                <div className="boxies-content">
                    <div className="boxies-content_cards column80">
                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Excepteur sint" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            </div>

                        </div>

                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Consectetur adipiscing" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                            </div>

                        </div>

                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Eiusmod tempor" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                            </div>

                        </div>

                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Proident esit" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                            </div>

                        </div>

                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Dolore magna" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            </div>

                        </div>

                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Mollit anim id" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                            </div>

                        </div>

                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Duis aute irure" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                            </div>

                        </div>

                        <div className="boxies-card">
                            <div className="boxies-card_icon">
                                <Icon icon='far fa-check-circle' />
                            </div>
                            <div className="boxies-card_title">
                                <SecondaryTitle title="Velit esse" />
                            </div>
                            <div className="boxies-card_descripiton">
                                <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                            </div>

                        </div>



                    </div>
                </div>
                <div className="boxies-btn btn-white">
                    <Button content="Learn More" />
                </div>

                <div className="boxies-svg">
                    <SVGBoxies />
                </div>
            </div>
        )
    }
}

export default Boxies
