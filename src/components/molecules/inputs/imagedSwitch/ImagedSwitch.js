import React from 'react'
import Container from '../../../templates/container/Container'
import Img from '../../../atoms/img/Img'
import Switch from '../../../atoms/inputs/switch/Switch'

const ImagedSwitch = ({ src, altText, checked, onChange }) => {
    return (
        <Container imagedSwitchContainer>
            <Container>
                <Img path={src} altText={altText} block />
            </Container>
            <Container>
                <Switch checked={checked} onChange={onChange} dialogSwitch />
            </Container>
        </Container>
    )
}

export default ImagedSwitch
