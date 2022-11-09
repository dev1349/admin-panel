import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import Switch from '../switch/Switch'
import Container from '../../../templates/container/Container'
import IconWrapperForTooltip from '../../../atoms/wrappers/iconWrapperForTooltip/IconWrapperForTooltip'
import InfoIcon from '../../../atoms/icons/infoIcon/InfoIcon'
import Tooltip from '../../../atoms/tooltips/Tooltip'
import Img from '../../../atoms/img/Img'
import FormControl from '../../../atoms/inputs/formControl/FormControl'

const HorizontalLabeledTooltipImageSwitch = ({ id, label, tooltip, image, altText, ...rest }) => {
    return (
        <FormControl labelSwitchTooltipContainer>
            <Container>
                <InputLabel htmlFor={id} shrink dialogLabel>
                    {label}
                </InputLabel>
                <Tooltip arrow title={tooltip}>
                    <IconWrapperForTooltip>
                        <InfoIcon dialogIcon />
                    </IconWrapperForTooltip>
                </Tooltip>
            </Container>
            <Container>
                <Switch id={id} {...rest} dialogSwitch disableRipple />
            </Container>
            <Container>
                <Img path={image} altText={altText} block />
            </Container>
        </FormControl>
    )
}

export default HorizontalLabeledTooltipImageSwitch
