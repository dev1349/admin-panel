import React, { useState } from 'react'
import PaddingBetweenButtonsTemplate from '../../templates/paddingBetweenButtonsTemplate/PaddingBetweenButtonsTemplate'
import ToggleButton from '../../atoms/toggleButton/ToggleButton'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import FlexFirstGrowTemplate from '../../templates/flexFirstGrowTemplate/FlexFirstGrowTemplate'
import TextField from '../../molecules/inputs/textField/TextField'
import FloatField from '../../molecules/inputs/floatField/FloatField'
import SelectField from '../../molecules/inputs/selectField/SelectField'
import Autocomplete from '../../molecules/inputs/autocomplete/Autocomplete'

const OrderAdditionalButtons = ({
    buttons,
    namePriceGoods,
    addGoodFromAutocomplete,
    addGoodFromCatalog,
    addDiscount,
    hasDiscount,
}) => {
    const [positionButtonDown, setPositionButtonDown] = useState(false)
    const [discountButtonDown, setDiscountButtonDown] = useState(false)
    const [autocompleteValue, setAutocompleteValue] = useState(null)
    const [discountComment, setDiscountComment] = useState('')
    const [discountValue, setDiscountValue] = useState('0')
    const [discountType, setDiscountType] = useState('%')

    const handleTogglePositionButton = () => {
        if (autocompleteValue) {
            setAutocompleteValue(null)
        }
        setPositionButtonDown(prev => !prev)
    }

    const handleChangeAutocomplete = payload =>
        setAutocompleteValue(payload.good)

    const handleChangeDiscountComment = payload =>
        setDiscountComment(payload.discountComment)

    const handleChangeDiscountValue = payload => {
        if (discountType === '%' && parseFloat(payload.discountValue) > 100) {
            return
        }
        setDiscountValue(payload.discountValue)
    }

    const handleChangeDiscountType = payload => {
        setDiscountType(payload.discountType)
        setDiscountValue('0')
    }

    const handleAddDiscount = () => {
        setDiscountButtonDown(false)
        setDiscountComment('')
        setDiscountType('%')
        setDiscountValue('0')
        addDiscount({
            type: discountType,
            value: parseFloat(discountValue),
            comment: discountComment,
        })
    }

    return (
        <>
            <PaddingBetweenButtonsTemplate>
                <ToggleButton
                    icon={buttons.position.icon}
                    text={buttons.position.text}
                    selected={positionButtonDown}
                    value={'check'}
                    onClick={handleTogglePositionButton}
                />
                <ToggleButton
                    icon={buttons.discount.icon}
                    text={buttons.discount.text}
                    selected={discountButtonDown}
                    value={'check'}
                    onClick={() => setDiscountButtonDown(!discountButtonDown)}
                />
            </PaddingBetweenButtonsTemplate>
            {positionButtonDown && (
                <FlexFirstGrowTemplate>
                    <Autocomplete
                        autoFocus={true}
                        textFieldId={'addGood'}
                        name={'good'}
                        value={autocompleteValue}
                        changeValue={handleChangeAutocomplete}
                        options={namePriceGoods}
                        getOptionLabel={option => {
                            const optionValuesWithoutNull =
                                Object.values(option).slice(1)
                            return optionValuesWithoutNull.join(', ') + ' грн.'
                        }}
                    />
                    {autocompleteValue && (
                        <SimpleButton
                            onClick={addGoodFromAutocomplete(
                                autocompleteValue.id
                            )}
                        >
                            Добавить заказ
                        </SimpleButton>
                    )}
                    <SimpleButton onClick={addGoodFromCatalog}>
                        Выбрать из каталога
                    </SimpleButton>
                </FlexFirstGrowTemplate>
            )}
            {discountButtonDown && (
                <FlexFirstGrowTemplate>
                    <TextField
                        id={'discountComment'}
                        name={'discountComment'}
                        value={discountComment}
                        onChange={handleChangeDiscountComment}
                        autoFocus={true}
                        fullWidth={true}
                    />
                    <FloatField
                        value={discountValue}
                        pattern={
                            '^(|0|0[.]|0[.][0-9]|0[.][0-9][1-9]|0[.][1-9][0-9]|[1-9]|[1-9][0-9]+|[1-9][0-9]+[.]|[1-9][0-9]+[.][0-9]|[1-9][0-9]+[.][0-9][1-9]|[1-9][0-9]+[.][1-9][0-9])$'
                        }
                        onChange={handleChangeDiscountValue}
                        autoFocus={true}
                        name={'discountValue'}
                        fullWidth={true}
                    />
                    <SelectField
                        name={'discountType'}
                        value={discountType}
                        onChange={handleChangeDiscountType}
                        items={[
                            {
                                id: 0,
                                label: '%',
                                value: '%',
                            },
                            {
                                id: 1,
                                label: 'грн.',
                                value: 'грн.',
                            },
                        ]}
                        fullWidth={true}
                    />
                    <SimpleButton
                        onClick={handleAddDiscount}
                        disabled={!parseFloat(discountValue) || hasDiscount}
                    >
                        Добавить
                    </SimpleButton>
                </FlexFirstGrowTemplate>
            )}
        </>
    )
}

export default OrderAdditionalButtons
