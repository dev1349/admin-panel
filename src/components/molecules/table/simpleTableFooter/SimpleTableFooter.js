import React from 'react'
import { styled, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import SelectField from '../../inputs/selectField/SelectField'
import FloatField from '../../inputs/floatField/FloatField'

export const SimpleTableFooterStyled = styled(TableRow, {
    name: 'SimpleTableFooterStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SimpleTableFooter = ({
    deliveryTypes,
    deliveryCurrentType,
    changeDelivery,
    deliveryPrice,
    changeDeliveryPrice,
    disabled,
}) => {
    return (
        <SimpleTableFooterStyled>
            <TableCell />
            <TableCell align={'right'}>Доставка</TableCell>
            <TableCell align={'center'}>
                <SelectField
                    name={'deliveryCurrentType'}
                    value={deliveryCurrentType}
                    onChange={changeDelivery}
                    items={deliveryTypes.map(el => ({
                        id: el.id,
                        label: el.name,
                        value: el.name,
                    }))}
                    isStartItemDisabled={false}
                    disabled={disabled}
                    forTable
                />
            </TableCell>
            <TableCell align={'right'}>
                <FloatField
                    value={deliveryPrice}
                    pattern={
                        '^(|0|0[.]|0[.][0-9]|0[.][0-9][1-9]|0[.][1-9][0-9]|[1-9]|[1-9][0-9]+|[1-9][0-9]+[.]|[1-9][0-9]+[.][0-9]|[1-9][0-9]+[.][0-9][1-9]|[1-9][0-9]+[.][1-9][0-9])$'
                    }
                    onChange={changeDeliveryPrice}
                    name={'deliveryPrice'}
                    disabled={disabled}
                    forTable
                />
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell align={'right'}>
                {deliveryPrice && deliveryPrice + ' грн.'}
            </TableCell>
            <TableCell />
        </SimpleTableFooterStyled>
    )
}

export default SimpleTableFooter
