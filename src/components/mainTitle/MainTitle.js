
import React from 'react'

const MainTitle = ({
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
        <h1 style={style}>{content}</h1>
    )
}

export default MainTitle

