
import React from 'react'

const Description = ({
    content,
    fontSize,
    fontType,
    fontWeight,
    color,
    textTransform,
    fontStyle,
    textAlign,
    textDecoration,
    lineHeight,
}) => {
    const style = {
        fontSize,
        fontType: fontType,
        fontWeight: fontWeight,
        color: color,
        textTransform: textTransform,
        fontStyle: fontStyle,
        textAlign: textAlign,
        textDecoration: textDecoration,
        lineHeight: lineHeight,
    }
    return (
        <p style={style}>{content}</p>
    )
}

export default Description

