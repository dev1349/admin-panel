import React, { useState } from 'react'
import { Fade } from '@mui/material'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import Box from '../../../atoms/wrappers/Box/Box'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import TextField from '../textField/TextField'
import IconButton from '../../buttons/iconButton/IconButton'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import Button from '../../../atoms/button/Button'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledTextFieldsStyled = createStyled('LabeledTextFieldsStyle', 'div')

const LabeledTextFields = ({
    id,
    label,
    characteristicValues,
    changeCharacteristicValue,
    deleteCharacteristicValue,
    addCharacteristicValue,
}) => {
    const [activeField, setActiveField] = useState(null)
    const handleMouseEnter = index => () => setActiveField(index)
    const handleMouseLeave = () => setActiveField(null)

    return (
        <LabeledTextFieldsStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>
                    {characteristicValues.length ? label : ''}
                </InputLabel>
                <Box>
                    {characteristicValues.map((value, index) => (
                        <Box
                            key={index}
                            marginTop7={index !== 0}
                            onMouseEnter={handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <FlexTemplate gap7 alignItemsCenter>
                                <Box flexGrow1>
                                    <TextField
                                        id={id}
                                        fullWidth
                                        name={index.toString()}
                                        value={
                                            characteristicValues[index].value
                                        }
                                        onChange={changeCharacteristicValue}
                                        placeholder={
                                            'Введите значение характеристики'
                                        }
                                        autoFocus={
                                            characteristicValues.length ===
                                            index + 1
                                        }
                                    />
                                </Box>
                                <Fade in={activeField === index} timeout={0}>
                                    <div>
                                        <IconButton
                                            dialogButton
                                            disableRipple
                                            onClick={deleteCharacteristicValue(
                                                index
                                            )}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </Fade>
                            </FlexTemplate>
                        </Box>
                    ))}
                    <Box marginTop7={characteristicValues.length !== 0}>
                        <Button
                            dialogButton
                            disableRipple
                            onClick={addCharacteristicValue}
                            startIcon={<AddIcon dialogIcon />}
                        >
                            Добавить значение характеристики
                        </Button>
                    </Box>
                </Box>
            </LabeledInputTemplate>
        </LabeledTextFieldsStyled>
    )
}

export default LabeledTextFields
