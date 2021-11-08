import React from 'react'
import HorizontalTabs from '../../../molecules/tabs/horizontalTabs/HorizontalTabs'
import LabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledTextFieldMultiline from '../../../molecules/inputs/labeledTextFieldMultiline/LabeledTextFieldMultiline'
import Form from '../../../atoms/form/Form'
import PaddingTemplate from '../../../templates/paddingTemplate/PaddingTemplate'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import Header2 from '../../../molecules/headers/header2/Header2'
import SimpleHeader1SaveReturn from '../../../molecules/headers/simpleHeader1SaveReturn/SimpleHeader1SaveReturn'
import InfoModals from '../../infoModals/InfoModals'
import GreyBorderedWrapper from '../../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'

const AddAttributesCategory = ({
    fieldsValues,
    setFieldsValue,
    onSave,
    onReturn,
    fetchStatus,
    isSaveButtonDisabled,
    isReturnButtonDisabled,
    modalsData,
}) => {
    return (
        <>
            <SimpleHeader1SaveReturn
                onSave={onSave}
                onReturn={onReturn}
                isSaveButtonDisabled={isSaveButtonDisabled}
                isReturnButtonDisabled={isReturnButtonDisabled}
            >
                Категории
            </SimpleHeader1SaveReturn>
            <GreyBorderedWrapper>
                <Header2 icon={<AddIcon />}>Добавление категории</Header2>
                <PaddingTemplate>
                    <Form>
                        <HorizontalTabs titles={['Общие', 'Дизайн', 'Данные']}>
                            <>
                                <HorizontalTabs
                                    titles={['Русский', 'Украинский']}
                                >
                                    <>
                                        <LabeledTextField
                                            id={'name'}
                                            label={'*Название категории'}
                                            name={'name'}
                                            value={fieldsValues['name']}
                                            onChange={setFieldsValue}
                                            autoFocus
                                        />
                                        <LabeledTextFieldMultiline
                                            id={'description'}
                                            label={'Описание категории'}
                                            name={'description'}
                                            value={fieldsValues['description']}
                                            onChange={setFieldsValue}
                                        />
                                    </>
                                    <>
                                        <LabeledTextField
                                            id={'englishName'}
                                            label={'Название категории'}
                                            name={'englishName'}
                                            value={fieldsValues['englishName']}
                                            onChange={setFieldsValue}
                                            autoFocus
                                        />
                                        <LabeledTextFieldMultiline
                                            id={'englishDescription'}
                                            label={'Описание категории'}
                                            name={'englishDescription'}
                                            value={
                                                fieldsValues[
                                                    'englishDescription'
                                                ]
                                            }
                                            onChange={setFieldsValue}
                                        />
                                    </>
                                </HorizontalTabs>
                            </>
                            <>and fields</>
                            <>and fields again</>
                        </HorizontalTabs>
                    </Form>
                </PaddingTemplate>
            </GreyBorderedWrapper>
            <InfoModals fetchStatus={fetchStatus} modalData={modalsData} />
        </>
    )
}

export default AddAttributesCategory
