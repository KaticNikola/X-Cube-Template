import React, { Component } from 'react'

import SecondaryTitle from '../../../../components/secondaryTitle/SecondaryTitle'
import Description from '../../../../components/description/Description'
import Button from '../../../../components/button/Button'

export class GetStarted extends Component {
    render() {
        return (
            <div className="getStarted">
                <div className="getStarted-txt">
                    <div className="getStarted-txt_title">
                        <SecondaryTitle title=" GET STARTED TODAY" />
                    </div>
                    <div className="getStarted-txt_description">
                        <Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    </div>


                </div>
                <div className="getStarted-btn btn-white">
                    <Button content="Get Started" />
                </div>
            </div>
        )
    }
}

export default GetStarted;
