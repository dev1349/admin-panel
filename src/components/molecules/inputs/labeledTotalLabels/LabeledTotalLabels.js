import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import Box from '../../../atoms/wrappers/box/Box'
import Button from '../../../atoms/button/Button'
import { createStyled } from '../../../../services/style/createStyled'
import Typography from '../../../atoms/textElements/typography/Typography'

const LabeledTotalLabelsStyled = createStyled('LabeledTotalLabelsStyle', 'div')

const LabeledTotalLabels = ({ id, label, totalCount, placeholder = '', buttonText, buttonIcon, onClick }) => {
    return (
        <LabeledTotalLabelsStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{totalCount > 0 ? label : ''}</InputLabel>
                <Box>
                    {totalCount !== 0 ? (
                        <Box marginTop10>
                            <Typography component={'div'} mainAdminText bold>
                                {totalCount}&nbsp;{placeholder}
                            </Typography>
                        </Box>
                    ) : null}

                    <Box marginTop7={totalCount !== 0}>
                        <Button dialogButton disableRipple onClick={onClick} startIcon={buttonIcon}>
                            {buttonText}
                        </Button>
                    </Box>
                </Box>
            </LabeledInputTemplate>
        </LabeledTotalLabelsStyled>
    )
}

export default LabeledTotalLabels
