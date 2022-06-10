import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from '../../../templates/labeledInputTemplate/LabeledInputTemplate'
import Box from '../../../atoms/wrappers/box/Box'
import Button from '../../../atoms/button/Button'
import { totalStringValues } from '../../../../common/commonValueFunction'
import List from '../../../atoms/list/list/List'
import ListItem from '../../../atoms/list/listItem/ListItem'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import { createStyled } from '../../../../services/style/createStyled'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'

const LabeledTextLabelsStyled = createStyled('LabeledTextLabelsStyle', 'div')

const LabeledTextLabels = ({ id, label, items, buttonText, buttonIcon, onClick, valuesLength = 40, itemIcon, propertiesForSting }) => {
    const stringItems = item => totalStringValues(item, propertiesForSting, valuesLength)

    return (
        <LabeledTextLabelsStyled>
            <LabeledInputTemplate>
                <InputLabel htmlFor={id}>{items.length ? label : ''}</InputLabel>
                <Box>
                    {items.length !== 0 ? (
                        <Box marginTop2>
                            <List component={'ol'}>
                                {items.map(item => (
                                    <ListItem key={item.id} dialogItem>
                                        <FlexTemplate alignItemsCenter gap7>
                                            {itemIcon}
                                            <ListItemText
                                                dialogItem
                                                primary={`${item.name}${stringItems(item) ? `: ${stringItems(item)}` : ``}`}
                                            />
                                        </FlexTemplate>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ) : null}
                    <Box marginTop7={items.length !== 0}>
                        <Button dialogButton disableRipple onClick={onClick} startIcon={buttonIcon}>
                            {buttonText}
                        </Button>
                    </Box>
                </Box>
            </LabeledInputTemplate>
        </LabeledTextLabelsStyled>
    )
}

export default LabeledTextLabels
