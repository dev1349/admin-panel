import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import Switch from '../switch/Switch'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import Tooltip from '../../../atoms/tooltips/Tooltip'
import InfoIcon from '../../../atoms/icons/infoIcon/InfoIcon'
import IconWrapperForTooltip from '../../../atoms/wrappers/iconWrapperForTooltip/IconWrapperForTooltip'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledSwitchStyled = createStyled('LabeledSwitchStyle', 'div')

const LabeledSwitch = ({ id, label, tooltip, ...rest }) => {
    return (
        <LabeledSwitchStyled>
            <LabeledInputTemplate alignItemsCenter labelNoMarginTop>
                {tooltip ? (
                    <FlexTemplate alignItemsCenter gap10 justifyContentRight noWrap justifyContentLeftSm>
                        <InputLabel htmlFor={id}>{label}</InputLabel>
                        <Tooltip arrow title={tooltip}>
                            {/*<div>*/}
                            <IconWrapperForTooltip>
                                <InfoIcon dialogIcon />
                            </IconWrapperForTooltip>
                            {/*</div>*/}
                        </Tooltip>
                    </FlexTemplate>
                ) : (
                    <InputLabel htmlFor={id}>{label}</InputLabel>
                )}
                <Switch dialogSwitch id={id} {...rest} disableRipple />
            </LabeledInputTemplate>
        </LabeledSwitchStyled>
    )
}

export default LabeledSwitch
