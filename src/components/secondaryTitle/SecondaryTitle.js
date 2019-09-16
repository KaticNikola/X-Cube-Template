
import React from 'react'

const SecondaryTitle = ({
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
        <h2 style={style}>{content}</h2>
    )
}

export default SecondaryTitle

