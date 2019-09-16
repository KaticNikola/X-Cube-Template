
import React from 'react'

const Button = ({
    //bg styles
    background,
    border,
    borderThiknes,
    borderType,
    borderColor,
    borderRadius,

    //contentn i fonts 
    content,
    fontSize,
    fontType,
    fontWeight,
    color,
    textTransform,
    fontStyle,
    textAlign,
    textDecoration,

    //box shadoww
    boxShadowColor,
    boxShadowBlurRadius,
    boxShadowSpreadRadius,
    boxShadowHorizontal,
    boxShadowVertical,

    //Hover
    hover


}) => {
    const style = {
        //bg color
        background,
        //border
        // border,
        border: `${borderThiknes} ${borderType} ${borderColor}`,
        borderRadius,
        //fonts and content
        fontSize,
        fontType: fontType,
        fontWeight: fontWeight,
        color: color,
        textTransform: textTransform,
        fontStyle: fontStyle,
        textAlign: textAlign,
        textDecoration: textDecoration,
        //box shadow
        boxShadow: `${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlurRadius} ${boxShadowSpreadRadius} ${boxShadowColor}`,

        // hover:{
        //     color:"red"
        // }

    }
    
    return (
        <button style={style} >{content}</button>
    )
}

export default Button

