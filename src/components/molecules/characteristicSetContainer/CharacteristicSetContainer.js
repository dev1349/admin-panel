import React from 'react'
import Container from '../../templates/container/Container'
import CharacteristicSetBorder from '../../atoms/wrappers/characteristicSetBorder/CharacteristicSetBorder'
import Typography from '../../atoms/textElements/typography/Typography'
import LabeledSelectFieldWithButton from '../inputs/labeledSelectFieldWithButton/LabeledSelectFieldWithButton'
import IconButton from '../buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import { createCharacteristicValueItems } from './createCharacteristicValueItems'

const CharacteristicSetContainer = ({
    setTitle,
    characteristicGroups,
    characteristics,
    setValuesFromCharacteristicSelects,
    valuesFromCharacteristicSelects,
    openAddValueWindow,
}) => {
    return (
        <Container characteristicSetPaddingTop>
            <Container characteristicSetTitle>
                <Typography characteristicSetTitle>{setTitle}</Typography>
            </Container>
            <CharacteristicSetBorder>
                {characteristicGroups?.length !== 0 &&
                    characteristicGroups.map(characteristicGroup => {
                        if (characteristicGroup.characteristics?.length === 0) return null

                        return (
                            <Container key={characteristicGroup.id}>
                                <Container characteristicGroupTitleContainer>
                                    <Typography characteristicGroupTitle component={'h4'}>
                                        {characteristicGroup.name}
                                    </Typography>
                                </Container>
                                {characteristicGroup.characteristics?.length !== 0 &&
                                    characteristicGroup.characteristics.map(characteristic => {
                                        return (
                                            <LabeledSelectFieldWithButton
                                                key={characteristic.id}
                                                id={`characteristic_${characteristic.id}`}
                                                label={characteristic.name}
                                                name={characteristic.id}
                                                value={valuesFromCharacteristicSelects[characteristic.id]}
                                                onChange={setValuesFromCharacteristicSelects}
                                                items={createCharacteristicValueItems(characteristic)}
                                                defaultLabel={'Выберите значение характеристики'}
                                                isStartItemDisabled={true}
                                                button={
                                                    <IconButton dialogButton disableRipple onClick={openAddValueWindow(characteristic)}>
                                                        <AddIcon />
                                                    </IconButton>
                                                }
                                            />
                                        )
                                    })}
                            </Container>
                        )
                    })}
                {characteristics?.length !== 0 && (
                    <Container>
                        <Container characteristicGroupTitleContainer>
                            <Typography characteristicGroupTitle>Характеристики</Typography>
                        </Container>
                        {characteristics.map(characteristic => {
                            return (
                                <LabeledSelectFieldWithButton
                                    key={characteristic.id}
                                    id={`characteristic_${characteristic.id}`}
                                    label={characteristic.name}
                                    name={characteristic.id}
                                    value={valuesFromCharacteristicSelects[characteristic.id]}
                                    onChange={setValuesFromCharacteristicSelects}
                                    items={createCharacteristicValueItems(characteristic)}
                                    defaultLabel={'Выберите значение характеристики'}
                                    isStartItemDisabled={true}
                                    button={
                                        <IconButton dialogButton disableRipple onClick={openAddValueWindow(characteristic)}>
                                            <AddIcon />
                                        </IconButton>
                                    }
                                />
                            )
                        })}
                    </Container>
                )}
            </CharacteristicSetBorder>
        </Container>
    )
}

export default CharacteristicSetContainer
