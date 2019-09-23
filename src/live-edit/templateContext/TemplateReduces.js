import {
    EDIT_HEADER_TITILE,
    EDIT_HEADER_DESCRIPTION

} from './TemplateTypes';


export default reducer = (state, action) => {
	switch (action.type) {
		case EDIT_HEADER_TITILE:
            case "":
			return {
				...state.header.title,
				title: [state.header.title].map( key =>{
					key[`${action.payload.property}`] = action.payload.value
					console.log( key[`${action.payload.property}`])
				})
					
			
				
			}
		default:
			break;
	}
}