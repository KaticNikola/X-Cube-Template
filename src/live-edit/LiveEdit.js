import React, { Component } from 'react'

import { Provider } from '../templateContext/TemplateContext'

import Template1 from './templates/template1/Template1'

export class LiveEdit extends Component {
    render() {
        return (

            <div>
                <Template1 />
            </div>


        )
    }
}

export default LiveEdit
