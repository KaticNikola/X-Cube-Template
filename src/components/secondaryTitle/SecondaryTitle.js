import React, { Component } from 'react'

export class SecondaryTitle extends Component {
    render() {
        const { title } = this.props;
        return (
            <h2>{title}</h2>
        )
    }
}

export default SecondaryTitle
