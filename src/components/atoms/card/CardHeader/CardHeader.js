import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CardHeaderStyled = createStyled('CardHeaderStyle', 'header', ['positiveProgress', 'negativeProgress', 'neutralProgress'])

const CardHeader = ({ children, progress }) => {
    return (
        <CardHeaderStyled positiveProgress={progress > 0} negativeProgress={progress < 0} neutralProgress={progress === 0}>
            {children}
        </CardHeaderStyled>
    )
}

export default CardHeader
