import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import Box from '../../../atoms/wrappers/box/Box'
import Button from '../../../atoms/button/Button'
import { stringValues } from '../../../../common/commonValueFunction'
import List from '../../../atoms/list/list/List'
import ListItem from '../../../atoms/list/listItem/ListItem'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import { createStyled } from '../../../../services/style/createStyled'
const LabeledTextLabelsStyled = createStyled('LabeledTextLabelsStyle', 'div')

const LabeledTextLabels = ({ id, label, characteristics, buttonText, buttonIcon, onClick, characteristicValuesLength = 40 }) => {
    return (
        <LabeledTextLabelsStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{characteristics.length ? label : ''}</InputLabel>
                <Box marginTop2>
                    <List component={'ol'}>
                        {characteristics.map((characteristic, index) => (
                            <ListItem key={index} dialogItem>
                                <ListItemText
                                    dialogItem
                                    primary={`${index + 1}) ${characteristic.name}: ${stringValues(
                                        characteristic.characteristicValues,
                                        characteristicValuesLength,
                                        'value'
                                    )}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Box marginTop7={characteristics.length !== 0}>
                        <Button dialogButton disableRipple onClick={onClick} startIcon={buttonIcon}>
                            {buttonText}
                        </Button>
                    </Box>
                </Box>
            </LabeledInputTemplate>
        </LabeledTextLabelsStyled>
    )
}

export default LabeledTextLabels
