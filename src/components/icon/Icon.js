import React, { Component } from 'react'

export class Icon extends Component {
    render() {
        const { icon } = this.props;
        return (
            <i className={icon} />
        )
    }
}

export default Icon
