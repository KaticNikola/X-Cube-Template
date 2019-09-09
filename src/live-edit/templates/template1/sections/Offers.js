import React, { Component } from 'react'


import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'
import Icon from '../../../../components/icon/Icon'


export class Offers extends Component {
    render() {
        return (
            <div className='offers'>
                <div className="content column80">
                    <div className="title">
                        <SecondaryTitle title="DISCOVER BETTER CARE" />
                    </div>
                    <div className="cards">
                        <div className="card column23">
                            <div className="card-icon">
                                <Icon icon='fas fa-leaf' />
                            </div>
                            <div className="card-title">
                                <SecondaryTitle title="Natural Medicine" />
                            </div>
                            <div className="card-description">
                                <Description desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                            </div>
                            <div className="card-btn btn-text ">
                                < Button content="Learn More &#8594;" />
                            </div>

                        </div>

                        <div className="card column23">
                            <div className="card-icon">
                                <Icon icon='fas fa-user-md' />
                            </div>
                            <div className="card-title">
                                <SecondaryTitle title="Best Doctors" />
                            </div>
                            <div className="card-description">
                                <Description desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                            </div>
                            <div className="card-btn btn-text ">
                                < Button content="Learn More &#8594;" />
                            </div>

                        </div>

                        <div className="card column23">
                            <div className="card-icon">
                                <Icon icon='fas fa-briefcase-medical' />
                            </div>
                            <div className="card-title">
                                <SecondaryTitle title="Health Care" />
                            </div>
                            <div className="card-description">
                                <Description desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                            </div>
                            <div className="card-btn btn-text ">
                                < Button content="Learn More &#8594;" />
                            </div>

                        </div>


                        <div className="card column23">
                            <div className="card-icon">
                                <Icon icon='fas fa-notes-medical' />
                            </div>
                            <div className="card-title">
                                <SecondaryTitle title="Insurance" />
                            </div>
                            <div className="card-description">
                                <Description desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                            </div>
                            <div className="card-btn btn-text ">
                                < Button content="Learn More &#8594;" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Offers
