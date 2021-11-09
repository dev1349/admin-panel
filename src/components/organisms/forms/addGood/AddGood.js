import React from 'react'
import Header2 from '../../../molecules/headers/header2/Header2'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import Form from '../../../atoms/form/Form'
import PaddingTemplate from '../../../templates/paddingTemplate/PaddingTemplate'
import LabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledFloatField from '../../../molecules/inputs/labeledFloatField/LabeledFloatField'
import IconButton from '../../../molecules/iconButton/IconButton'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import TextAlignRightTemplate from '../../../templates/textAlignRightTemplate/TextAlignRightTemplate'
import LabeledSelectField from '../../../molecules/inputs/labeledSelectField/LabeledSelectField'
import GreyBorderedWrapper from '../../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import HorizontalTabs from '../../../molecules/tabs/horizontalTabs/HorizontalTabs'

const AddGood = props => {
    return (
        <GreyBorderedWrapper>
            <Header2 icon={<AddIcon />}>Добавление товара</Header2>
            <Form>
                <PaddingTemplate>
                    <HorizontalTabs
                        titles={[
                            'Общие',
                            'Данные',
                            'Связи',
                            'Атрибуты',
                            'Опции',
                            'Регулярные платежи',
                            'Скидки',
                            'Акции',
                            'Изображения',
                            'Бонусные балы',
                            'Дизайн',
                            'Дополнительные вкладки',
                        ]}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        aria-label="scrollable auto tabs"
                    >
                        <PaddingTemplate>
                            <LabeledTextField
                                id={'goodField01'}
                                label={'Название'}
                                name={'name'}
                                value={props.values['name'] || ''}
                                onChange={props.handleChange}
                                autoFocus={true}
                            />
                            <LabeledTextField
                                id={'goodField02'}
                                label={'Описание'}
                                name={'description'}
                                value={props.values['description'] || ''}
                                onChange={props.handleChange}
                            />
                            <LabeledSelectField
                                id={'goodField03'}
                                label={'Тип'}
                                name={'type'}
                                value={props.values['type'] || ''}
                                onChange={props.handleChangeSelect}
                                items={props.allGoodType}
                            />
                            <LabeledFloatField
                                id={'goodField04'}
                                label={'Цена'}
                                name={'price'}
                                pattern={
                                    '^(|0|0[.]|0[.][0-9]+|[1-9]|[1-9][0-9]*|[1-9][0-9]*[.]|[1-9][0-9]*[.][0-9]+)$'
                                }
                                value={props.values['price'] || ''}
                                onChange={props.handleChange}
                            />
                            <LabeledFloatField
                                id={'goodField05'}
                                label={'Цена распродажи'}
                                name={'salePrice'}
                                pattern={
                                    '^(|0|0[.]|0[.][0-9]+|[1-9]|[1-9][0-9]*|[1-9][0-9]*[.]|[1-9][0-9]*[.][0-9]+)$'
                                }
                                value={props.values['salePrice'] || ''}
                                onChange={props.handleChange}
                            />
                            <TextAlignRightTemplate>
                                <IconButton
                                    onClick={props.handleSubmit}
                                    disabled={!props.values['name']}
                                >
                                    <SaveIcon />
                                </IconButton>
                            </TextAlignRightTemplate>
                        </PaddingTemplate>
                        <PaddingTemplate>hello</PaddingTemplate>
                        <PaddingTemplate>hello 2</PaddingTemplate>
                    </HorizontalTabs>
                </PaddingTemplate>
            </Form>
        </GreyBorderedWrapper>
    )
}

export default AddGood
