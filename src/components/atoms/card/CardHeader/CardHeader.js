import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CardHeaderStyled = createStyled('CardHeaderStyle', 'header', ['green', 'black', 'red'])

const CardHeader = ({ children, progress }) => {
    return (
        <CardHeaderStyled positiveProgress={progress > 0} negativeProgress={progress < 0} neutalProgress={progress === 0}>
            {children}
        </CardHeaderStyled>
    )
}

export default CardHeader
