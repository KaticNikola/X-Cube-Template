import React, { Component } from 'react'

import Template from '../templates/template1/Template1'
import EditMode from '../EditMode/EditMode'

import { Consumer } from '../templateContext/TemplateContext'

import "./Test.scss"

export class Test extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { selectedElement } = value;
                    if (selectedElement) {
                        return (
                            <div className='test'>
                                <div className="test-template">
                                    <Template />
                                </div>
                                <div className="test-edit">
                                    <EditMode selectedElement={selectedElement} />
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="test">
                                <Template />
                            </div>
                        )
                    }
                }}
            </Consumer>

        )
    }
}

export default Test
