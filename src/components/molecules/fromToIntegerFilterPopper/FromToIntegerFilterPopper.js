import React, { useEffect, useState } from 'react'
import Popper from '../../atoms/popper/Popper'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import Box from '../../atoms/wrappers/Box/Box'
import TableFilterContentTemplate from '../../templates/tableFilterContentTemplate/TableFilterContentTemplate'
import Typography from '../../atoms/textElements/typography/Typography'
import NumberField from '../inputs/numberField/NumberField'

const FromToIntegerFilterPopper = ({
    id,
    open,
    anchorEl,
    onClose,
    filter,
    placement = 'bottom-end',
    onApply,
    ...rest
}) => {
    const [fieldsValues, setFieldsValues] = useState(null)
    const handleSetFieldsValues = key => payload => {
        setFieldsValues(prev => {
            const newFieldsValues = { ...prev }
            if (payload[key] === undefined || payload[key] === null) {
                delete newFieldsValues[key]
                if (Object.keys(newFieldsValues).length) {
                    return newFieldsValues
                }
                return null
            }
            return { ...prev, ...payload }
        })
    }

    useEffect(() => {
        if (open) {
            if (!filter || filter[id] === undefined) {
                setFieldsValues(null)
                return
            }
            const filterFieldItems = Object.keys(filter[id])
            const newFieldsValues = {}
            filterFieldItems.forEach(item => {
                if (filter[id][item] !== undefined) {
                    newFieldsValues[item] = filter[id][item]
                }
            })
            setFieldsValues(newFieldsValues)
        }
    }, [open])

    const handleApply = () => {
        if (fieldsValues) {
            onApply({ [id]: fieldsValues })
        } else {
            onApply({ [id]: null })
        }

        onClose()
    }

    const handleCancel = () => {
        onClose()
    }

    const handleResetAll = () => {
        setFieldsValues(null)
    }

    const value = key => {
        if (!fieldsValues || fieldsValues[key] === undefined) {
            return null
        }
        return fieldsValues[key]
    }

    const applyButtonDisabled = () => {
        if (!fieldsValues) {
            return false
        } else if (Object.keys(fieldsValues).length === 1) {
            return true
        } else {
            return Number(fieldsValues.from) >= Number(fieldsValues.to)
        }
    }

    return (
        <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement={placement}
            {...rest}
        >
            <Box>
                <SimpleButton
                    onClick={handleResetAll}
                    variant={'text'}
                    size={'small'}
                    noUppercase
                >
                    Сбросить все
                </SimpleButton>
            </Box>
            <TableFilterContentTemplate>
                <Typography component={'div'} smallFontSize>
                    От&nbsp;
                    <NumberField
                        name={'from'}
                        value={value('from')}
                        pattern={'^[0-9]*$'}
                        onChange={handleSetFieldsValues('from')}
                        forFilter
                    />
                    &nbsp;&nbsp;До&nbsp;
                    <NumberField
                        name={'to'}
                        value={value('to')}
                        pattern={'^[0-9]*$'}
                        onChange={handleSetFieldsValues('to')}
                        forFilter
                    />
                </Typography>
            </TableFilterContentTemplate>
            <Box>
                <SimpleButton
                    onClick={handleApply}
                    size={'small'}
                    disabled={applyButtonDisabled()}
                    noUppercase
                >
                    Применить
                </SimpleButton>
                <SimpleButton
                    onClick={handleCancel}
                    variant={'text'}
                    size={'small'}
                    noUppercase
                >
                    Отменить
                </SimpleButton>
            </Box>
        </Popper>
    )
}

export default FromToIntegerFilterPopper
