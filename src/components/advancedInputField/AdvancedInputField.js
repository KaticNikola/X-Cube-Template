import React, { Component } from 'react'

export class AdvancedInputField extends Component {
    render() {
        const { type, name, label, htmlFor, cols, rows} = this.props.formType;
        const { content, fontSize, lineHeight, letterSpacing } = this.props.elementToEdit;
        if (type === 'textArea') {
            //textarea
            return (
                <textarea name={name} cols={cols} rows={rows}></textarea>
            )
        } else if (type === 'select') {
            //select
            return (
                <select name="" >

                </select>
            )
        } else {
            return (
                <div className="inputFeld">
                    <label htmlFor={htmlFor}>{label}</label>
                    <input
                    type={type}
                    name={name}
                    value={ } />
                </div>
                
            )
        }
    }
}

export default AdvancedInputField
