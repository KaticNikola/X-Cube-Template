import React, { Component } from 'react'

import { Consumer } from '../../templateContext/TemplateContext';

import Title from "../../components/mainTitle/MainTitle"



export class EditMode extends Component {

	state = {
		header: {
			title: {
				content: "Test title",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

			}
		}
	}

	handleSubmit = (e) =>{
		e.preventDefault()
	} 
	
	handleChange = (dispatch, e) => {
		e.preventDefault();

		const property = e.target.name;
		const value = e.target.value;
		console.log(property)
		console.log(value)

		dispatch({
			type: "EDIT_VALUES",
			payload: {
				property,
				value
			}
		})






		//console.log(this.state.header.title.fontSize)
	}

	render() {
		return (
			<Consumer>
				{value => {
					const { fontSize, title } = value.header;
					const { dispatch } = value;
					return (
						<div className='editMode' onSubmit={this.handleSubmit}>
							<form action="">
								<div className="editMode-field">
									{/* font size */}
									<input
										type="text"
										name='fontSize'
										value={fontSize}
										onChange={this.handleChange.bind(this, dispatch)} />
								</div>


								<div className="editMode-field">
									<select
										name="fontWeight"
										onChange={this.handleChange.bind(this, dispatch)}>
										<option value="200">200</option>
										<option value="300">300</option>
										<option value="400">400</option>
										<option value="500">500</option>
										<option value="600">600</option>
										<option value="700">700</option>
										<option value="800">800</option>
										<option value="900">900</option>
									</select>
								</div>
								<div className="editMode-field">
									<select
										name="textTransform"
										onChange={this.handleChange.bind(this, dispatch)}>
										<option value="default">Default</option>
										<option value="uppercase">Uppercase</option>
										<option value="lowercase">Lowercase</option>
										<option value="capitalize">Dapitalize</option>
										<option value="none">None</option>
									</select>
								</div>
								<div className="editMode-field">
									<select
										name="fontStyle"
										onChange={this.handleChange.bind(this, dispatch)}>
										<option value="default">Default</option>
										<option value="normal">Normal</option>
										<option value="italic">Italic</option>
										<option value="oblique">Oblique</option>
									</select>
								</div>
								<div className="editMode-field">
									<select 
										name="textDecoration"
										onChange={this.handleChange.bind(this, dispatch)}>
										<option value="underline">Underline</option>
										<option value="Oveline">Oveline</option>
										<option value="lineThrouth">Line Throuth</option>
										<option value="none">None</option>
									</select>
								</div>
								<div className="editMode-field">
									<input 
										type="range" 
										name="lineHeight" 
										min="0" 
										max="5" 
										step='0.1'
										onChange={this.handleChange.bind(this, dispatch)}></input>

								</div>
								<div className="editMode-field">
									{/* font color */}
									<input 
										type="color" 
										name="color" 
										id="color"
										onChange={this.handleChange.bind(this, dispatch)} />
								</div>
							</form>

							<div className="test">
								<Title {...title} />
							</div>
						</div>
					)
				}}
			</Consumer>
		)


	}
}

export default EditMode

