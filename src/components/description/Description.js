import React, { Component } from 'react'

export class Description extends Component {
    render() {
        const { desc } = this.props;
        return (
            <p>{desc}</p>
        )
    }
}

export default Description
