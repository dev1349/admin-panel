import React, { useEffect, useState } from 'react'
import Popper from '../../atoms/popper/Popper'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import Box from '../../atoms/wrappers/Box/Box'
import Checkbox from '../inputs/checkbox/Checkbox'
import TableFilterContentTemplate from '../../templates/tableFilterContentTemplate/TableFilterContentTemplate'

const CheckboxFilterPopper = ({
    id,
    open,
    anchorEl,
    onClose,
    filter,
    placement = 'bottom-end',
    checkItems,
    onApply,
    ...rest
}) => {
    const [checkboxesChecked, setCheckboxesChecked] = useState(null)
    const handleSetCheckboxesChecked = checkboxId => () => {
        setCheckboxesChecked(prev => {
            if (!prev || !prev[checkboxId]) {
                return { ...prev, [checkboxId]: true }
            }

            const newCheckboxesChecked = { ...prev }
            delete newCheckboxesChecked[checkboxId]
            if (Object.keys(newCheckboxesChecked).length === 0) {
                return null
            }
            return newCheckboxesChecked
        })
    }

    useEffect(() => {
        if (open) {
            if (!filter || !filter[id]) {
                setCheckboxesChecked(null)
                return
            }
            const filterFieldItems = Object.keys(filter[id])
            const newCheckboxesChecked = {}
            filterFieldItems.forEach(item => {
                if (filter[id][item]) {
                    newCheckboxesChecked[item] = filter[id][item]
                }
            })
            setCheckboxesChecked(newCheckboxesChecked)
        }
    }, [open])

    const handleApply = () => {
        if (checkboxesChecked) {
            onApply({ [id]: checkboxesChecked })
        } else {
            onApply({ [id]: null })
        }

        onClose()
    }

    const handleCancel = () => {
        onClose()
    }

    const handleCheckAll = () => {
        const checkboxesNames = checkItems.map(el => el.id)
        const checkboxesChecked = {}
        checkboxesNames.forEach(el => {
            checkboxesChecked[el] = true
        })
        setCheckboxesChecked(checkboxesChecked)
    }

    const handleResetAll = () => {
        setCheckboxesChecked(null)
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
                    onClick={handleCheckAll}
                    variant={'text'}
                    size={'small'}
                    noUppercase
                >
                    Выбрать все
                </SimpleButton>
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
                {checkItems?.map((el, index) => (
                    <Box key={index}>
                        <Checkbox
                            label={el.title}
                            checked={
                                checkboxesChecked
                                    ? checkboxesChecked[el.id] === undefined
                                        ? false
                                        : checkboxesChecked[el.id]
                                    : false
                            }
                            onChange={handleSetCheckboxesChecked(el.id)}
                            labelPlacement={'end'}
                            forFilter
                        />
                    </Box>
                ))}
            </TableFilterContentTemplate>
            <Box>
                <SimpleButton onClick={handleApply} size={'small'} noUppercase>
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

export default CheckboxFilterPopper
