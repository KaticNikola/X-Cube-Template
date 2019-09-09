import React, { Component } from 'react'

export class Button extends Component {
    render() {
        const { content } = this.props;
        return (
            <button> {content} </button>
        )
    }
}

export default Button
