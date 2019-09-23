import React from 'react'

import { Consumer } from '../templateContext/TemplateContext'
import {
	EDIT_HEADER_TITILE,
	EDIT_HEADER_DESCRIPTION
} from '../templateContext/TemplateTypes'

import EditFormText from '../../components/editFormText/EditFormText'

import "./EditMode.scss"

export class EditMode extends React.Component {




	// handleSubmit = (e) => {
	// 	e.preventDefault()
	// }

	// handleChange = (dispatch, e) => {
	// 	e.preventDefault();

	// 	const property = e.target.name;
	// 	const value = e.target.value;
	// 	const selectedElement = this.props.selectedElement;
	// 	console.log(`from edit ${property}`)
	// 	console.log(`from edit ${value}`)
	// 	console.log(`from edit ${selectedElement}`)


	// 	dispatch({
	// 		type: selectedElement,//selectedElement 
	// 		payload: {
	// 			property,
	// 			value
	// 		}
	// 	})
	// }


	render() {
		let elementToEdit = null;
		return (
			<Consumer>
				{value => {
					const { dispatch, selectedElement } = value;
					// let elementToEdit = value.header.title;
					//umesto if probas sa swithc
					if (selectedElement === 'headerTitle') {
						elementToEdit = value.header.title;

					} else if (selectedElement === 'headerDescription') {
						elementToEdit = value.header.description
					}
					return (
						<div className="editMode">
							<EditFormText
								selectedElement={selectedElement}
								elementToEdit={elementToEdit} />
						</div>
					)
				}}
			</Consumer>
		)


	}
}

export default EditMode

{/* <Consumer>
				{value => {
					const { dispatch, selectedElement } = value;
					if (selectedElement === 'headerTitle') {
						let elementToEdit = value.header.title;
						return(
							<div className="editMode">
								<EditFormText 
								selectedElement={selectedElement} 
								elementToEdit = { elementToEdit } />
							</div>
						)
					} else if (selectedElement === 'headerDescription') {
						return(
							<div className="editMode">
								<EditFormText 
								selectedElement={selectedElement} 
								elementToEdit = { value.header.description } />
							</div>
						)
					} 
				}}
			</Consumer> */}