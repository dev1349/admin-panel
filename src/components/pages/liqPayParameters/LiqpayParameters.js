import React, { useEffect, useState } from 'react'
import Container from '../../templates/container/Container'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import PaymentsIcon from '../../atoms/icons/paymentsIcon/PaymentsIcon'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import Img from '../../atoms/img/Img'
import liqPayLogo from './liqpay_logo.png'
import Typography from '../../atoms/textElements/typography/Typography'
import Link from '../../atoms/link/Link'
import Iframe from '../../atoms/iframe/Iframe'
import liqPayKeysImg from './liqpay_keys.png'
import TextFragment from '../../atoms/textElements/textFragment/TextFragment'
import HorizontalLabeledOutlinedInput from '../../molecules/inputs/horizontalLabeledOutlinedInput/HorizontalLabeledOutlinedInput'
import HorizontalLabeledHideShowOutlinedInput from '../../molecules/inputs/horizontalLabeledHideShowOutlinedInput/HorizontalLabeledHideShowOutlinedInput'
import { useHistory } from 'react-router-dom'
import HorizontalLabeledSwitch from '../../molecules/inputs/horizontalLabeledSwitch/HorizontalLabeledSwitch'
import HorizontalLabeledTooltipImageSwitch from '../../molecules/inputs/horizontalLabeledTooltipImageSwitch/HorizontalLabeledTooltipImageSwitch'
import {
    useAddNewLiqPayKeysMutation,
    useDeleteLiqPayKeysMutation,
    useGetLiqPayKeysQuery,
    useUpdateLiqPayKeysMutation,
} from '../../../api/liqpayApi'
import { createValueForUpdating } from '../../../common/preparingDataForSending/preparingDataForSending'
import { toolTipContent } from './toolTipContent'
import Loader from '../../molecules/loader/Loader'
import DeleteModal from '../../molecules/modals/deleteModal/DeleteModal'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'

const LiqPayParameters = () => {
    const [isCashChecked, setCashChecked] = useState(true)

    const handleSetCashChecked = () => {
        setCashChecked(prev => !prev)
    }

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

    const handleShowDeleteModal = () => setDeleteModalOpen(true)

    const handleCloseDeleteModal = () => setDeleteModalOpen(false)

    const [isLiqPayChecked, setLiqPayChecked] = useState(false)

    const {
        data: liqPayKeys,
        isLoading: isLiqPayKeysGetting,
        isFetching: isLiqPayKeysFetching,
        isError: isGetLiqPayKeysError,
    } = useGetLiqPayKeysQuery()

    useEffect(() => {
        if (liqPayKeys === undefined || liqPayKeys?.length === 0) {
            setLiqPayChecked(false)
            return
        }

        setLiqPayChecked(true)
    }, [liqPayKeys])

    const handleSetLiqPayChecked = () => {
        if (isLiqPayChecked && liqPayKeys && liqPayKeys.length > 0) {
            handleShowDeleteModal()
            return
        }
        if (isLiqPayChecked) {
            setLiqPayChecked(false)
            return
        }
        setLiqPayChecked(true)
        setPublicKey(null)
        setPrivateKey(null)
    }

    const [deleteLiqPayKeys, { isLoading: isLiqPayKeysDeleting, idError: isDeleteLiqPayKeysError }] = useDeleteLiqPayKeysMutation()

    const handleDeleteModalYesButtonClick = () => {
        deleteLiqPayKeys(liqPayKeys[0].id)
            .unwrap()
            .then(() => handleCloseDeleteModal())
    }

    const [publicKey, setPublicKey] = useState(null)

    const [privateKey, setPrivateKey] = useState(null)

    const privateKeyMockText = 'Ви не можете переглянути приватний ключ, але можете ввести його нове значення!'

    let history = useHistory()

    const handleGoBack = () => history.goBack()

    const [addNewLiqPayKeys, { isLoading: isNewLiqPayKeysAdding, isError: isAddNewLiqPayKeysError }] = useAddNewLiqPayKeysMutation()

    const [updateLiqPayKeys, { isLoading: isLiqPayKeysUpdating, idError: isUpdateLiqPayKeysError }] = useUpdateLiqPayKeysMutation()

    const handleSaveKeys = () => {
        if (liqPayKeys?.length === 0) {
            addNewLiqPayKeys({
                publicKey: publicKey.trim(),
                privateKey: publicKey.trim(),
            })
            return
        }

        const valueForUpdate =
            privateKey === privateKeyMockText
                ? createValueForUpdating(
                      { id: liqPayKeys[0].id, publicKey: liqPayKeys[0].publicKey },
                      {
                          id: liqPayKeys[0].id,
                          publicKey: publicKey,
                      }
                  )
                : createValueForUpdating(
                      { id: liqPayKeys[0].id, publicKey: liqPayKeys[0].publicKey },
                      {
                          id: liqPayKeys[0].id,
                          publicKey: publicKey,
                          privateKey: privateKey,
                      }
                  )

        updateLiqPayKeys(valueForUpdate)
    }

    useEffect(() => {
        if (liqPayKeys === undefined || liqPayKeys?.length === 0) return

        setPublicKey(liqPayKeys[0].publicKey)
        setPrivateKey(privateKeyMockText)
    }, [liqPayKeys])

    const isLoading = isLiqPayKeysGetting || isLiqPayKeysFetching || isNewLiqPayKeysAdding || isLiqPayKeysUpdating || isLiqPayKeysDeleting

    const isError = isGetLiqPayKeysError || isAddNewLiqPayKeysError || isUpdateLiqPayKeysError || isDeleteLiqPayKeysError

    const [isErrorModalOpen, setErrorModalOpen] = useState(false)

    const handleCloseErrorModal = () => setErrorModalOpen(false)

    useEffect(() => {
        if (!isError) return

        setErrorModalOpen(true)
    }, [isError])

    const handleFocusHorizontalLabeledHideShowOutlinedInput = () => {
        if (liqPayKeys !== undefined && liqPayKeys.length > 0 && privateKey === privateKeyMockText) {
            setPrivateKey(null)
        }
    }

    const handleBlurHorizontalLabeledHideShowOutlinedInput = () => {
        if (liqPayKeys !== undefined && liqPayKeys.length > 0 && privateKey === null) {
            setPrivateKey(privateKeyMockText)
        }
    }

    const isUndoButtonDisabled = isLoading

    const isSaveButtonDisabled =
        isLoading ||
        (liqPayKeys === undefined || liqPayKeys.length === 0
            ? !isLiqPayChecked || publicKey === null || publicKey.trim() === '' || privateKey === null || privateKey.trim() === ''
            : (liqPayKeys[0].publicKey === publicKey && liqPayKeys[0].privateKey === privateKey) ||
              publicKey === null ||
              privateKey === null ||
              (liqPayKeys[0].publicKey === publicKey && privateKey === privateKeyMockText))

    return (
        <>
            <AdminPageHeader
                icon={<PaymentsIcon dialogIcon />}
                title={'Способы оплаты'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleGoBack} disabled={isUndoButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleSaveKeys} disabled={isSaveButtonDisabled}>
                        <SaveIcon />
                    </IconButton>,
                ]}
            />
            <AdminPageBorder>
                <Container marginTop7>
                    <HorizontalLabeledSwitch
                        id={'Cash'}
                        label={'Наличными при получении'}
                        checked={isCashChecked}
                        onChange={handleSetCashChecked}
                    />
                </Container>
                <Container marginTop7>
                    <HorizontalLabeledTooltipImageSwitch
                        id={'LiqPay'}
                        label={'Платежный сервис LiqPay'}
                        tooltip={toolTipContent}
                        image={liqPayLogo}
                        altText={'LiqPay'}
                        checked={isLiqPayChecked}
                        onChange={handleSetLiqPayChecked}
                    />
                </Container>

                {isLiqPayChecked && (
                    <Container instructionsContainer>
                        <Typography instructionsItem>
                            1.&emsp;Зарегистрируйтесь в{' '}
                            <Link href={`https://www.liqpay.ua/`} target={'_blank'}>
                                liqpay.ua
                            </Link>{' '}
                            согласно видеоинструкции
                        </Typography>
                        <Container youtubeResponseContainer560315 marginTop7>
                            <Iframe
                                src="https://www.youtube.com/embed/-WlixDtoPGw"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                response
                            />
                        </Container>
                        <Typography instructionsItem>2.&emsp;Введите публичный и приватный ключи</Typography>
                        <Container marginTop7>
                            <Img src={liqPayKeysImg} alt={'liqpay keys'} block />
                        </Container>
                        <Container marginTop7>
                            <HorizontalLabeledOutlinedInput
                                id={'public_key'}
                                label={
                                    <>
                                        Публичный ключ<TextFragment redStar>*</TextFragment>
                                    </>
                                }
                                value={publicKey}
                                onChange={setPublicKey}
                                placeholder={'Введите публичный ключ'}
                            />
                        </Container>
                        <Container marginTop7>
                            <HorizontalLabeledHideShowOutlinedInput
                                id={'private_key'}
                                label={
                                    <>
                                        Приватный ключ<TextFragment redStar>*</TextFragment>
                                    </>
                                }
                                value={privateKey}
                                onChange={setPrivateKey}
                                placeholder={'Введите приватный ключ'}
                                onFocus={handleFocusHorizontalLabeledHideShowOutlinedInput}
                                onBlur={handleBlurHorizontalLabeledHideShowOutlinedInput}
                            />
                        </Container>
                    </Container>
                )}
            </AdminPageBorder>
            {isLoading && <Loader dialogProgress />}
            <DeleteModal
                open={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                onYes={handleDeleteModalYesButtonClick}
                title={'Підтвердження вимкнення LiqPay'}
                description={'Ви дійсно бажаєте вимкнути платіжну систему LiqPay?'}
                yesButtonTitle={'Так'}
                noButtonTitle={'Ні'}
            />
            <ErrorModal
                open={isErrorModalOpen}
                onClose={handleCloseErrorModal}
                title={'Помилка сервера'}
                description={`Виникла помилка під час з'єднання з сервером!`}
                okButtonTitle={'Зрозуміло'}
            />
        </>
    )
}

export default LiqPayParameters
