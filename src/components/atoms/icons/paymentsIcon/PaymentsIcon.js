import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments'
import { createStyled } from '../../../../services/style/createStyled'

const PaymentsIconStyled = createStyled('PaymentsIconStyle', PaymentsIcon, ['dialogIcon'])

const PaymentsIconAtom = props => {
    return <PaymentsIconStyled {...props} />
}

export default PaymentsIconAtom
