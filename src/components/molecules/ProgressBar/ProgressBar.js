import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import Scroll from '../../atoms/scroll/Scroll'

const ProgressStyled = createStyled('ProgressBarStyle', 'div')

const ProgressBar = ({ progress }) => {
    return (
        <ProgressStyled>
            <Scroll progress={progress} />
        </ProgressStyled>
    )
}
export default ProgressBar
