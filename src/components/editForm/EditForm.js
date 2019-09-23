
import React, { Component } from 'react'
import { Consumer } from '../../live-edit//templateContext/TemplateContext';
import AdvancedInputField from '../advancedInputField/AdvancedInputField'

export class EditForm extends Component {

    handleChange = (dispatch, e) => {
        e.preventDefault();

        const property = e.target.name;
        const value = e.target.value;
        const selectedElement = this.props.selectedElement;
        console.log(`from edit ${property}`)
        console.log(`from edit ${value}`)
        console.log(`from edit ${selectedElement}`)


        dispatch({
            type: selectedElement,//selectedElement 
            payload: {
                property,
                value
            }
        })
    }



    render() {
        const { elementToEdit, formType } = this.props;
        return (
            <Consumer>
                {value => {
                   const { dispatch } = value;
                    <div className="editForm">
                        {formType.map(input => {
                            <div className="editForm-input">
                                <AdvancedInputField 
                                    {...formType}
                                    {...elementToEdit}
                                    onChange={this.handleChange.bind(this, dispatch)}
                                />
                            </div>
                        })}


                    </div>
                }}
            </Consumer>
        )
    }
}

export default EditForm
