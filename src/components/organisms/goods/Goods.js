import React, { useState } from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import Container from '../../templates/container/Container'
import TableHead from '../../atoms/table/tableHead/TableHead'
import TableRow from '../../atoms/table/tableRow/TableRow'
import TableCell from '../../atoms/table/tableCell/TableCell'
import TableSortLabel from '../../atoms/table/tableSortLabel/TableSortLabel'
import Box from '../../atoms/wrappers/box/Box'
import { visuallyHidden } from '@mui/utils'
import Table from '../../atoms/table/table/Table'
import TableBody from '../../atoms/table/tableBody/TableBody'
import Checkbox from '../../atoms/inputs/checkbox/Checkbox'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import Img from '../../atoms/img/Img'
import HideImageIcon from '../../atoms/icons/hideImageIcon/HideImageIcon'
import { Fade } from '@mui/material'
import Fragment from '../../atoms/fragment/Fragment'
import Typography from '../../atoms/textElements/typography/Typography'
import ItemsPerPage from '../../molecules/itemsPerPage/ItemsPerPage'
import Pagination from '../../atoms/pagination/Pagination'

const Goods = ({
    icon,
    title,
    buttons,
    headLines,
    order,
    orderBy,
    onRequestSort,
    goods,
    selectedGoods,
    onSelect,
    onEditGood,
    isEditButtonDisabled,
    pathToImage,
    currency = 'UAH',
    minAmount = 5,
    goodStateItems,
    totalPages,
    currentPage,
    onPaginationItemClick,
    isPaginationDisabled,
    itemsPerPage,
    onChangeItemsPerPage,
}) => {
    const [activeRow, setActiveRow] = useState(null)

    const handleSetActiveRow = id => () => setActiveRow(id)

    const handleUnSetActiveRow = () => setActiveRow(null)

    const aligns = headLines.map(headLine => (headLine.align ? headLine.align : 'left'))

    const isSelected = (id, selectedGoods) => selectedGoods.includes(id)

    const isImageInGood = images => images !== null && images.length !== 0

    const hashIdImage = images => {
        const image = images.find(image => image.isMain)
        if (!image) {
            return images[0].image && images[0].image.hashIdImage ? images[0].image.hashIdImage : null
        }
        return image.image && image.image.hashIdImage ? image.image.hashIdImage : null
    }

    return (
        <>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <Container marginTop7>
                    <Table dialogTable>
                        <TableHead dialogTableHead>
                            <TableRow dialogRow>
                                {headLines.map(headLine => (
                                    <TableCell dialogHeadCell key={headLine.id} align={headLine.align}>
                                        {headLine.canSort ? (
                                            <TableSortLabel
                                                dialogSortLabel
                                                active={orderBy === headLine.name}
                                                direction={orderBy === headLine.name ? order : 'asc'}
                                                onClick={onRequestSort(headLine.name)}
                                            >
                                                {headLine.content}
                                                {orderBy === headLine.name ? (
                                                    <Box component="span" sx={visuallyHidden}>
                                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                    </Box>
                                                ) : null}
                                            </TableSortLabel>
                                        ) : (
                                            headLine.content
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {goods !== null &&
                                goods.length !== 0 &&
                                goods.map(good => (
                                    <TableRow
                                        hover
                                        dialogRow
                                        key={good.id}
                                        dialogSelectedRow={isSelected(good.id, selectedGoods)}
                                        onMouseEnter={handleSetActiveRow(good.id)}
                                        onMouseLeave={handleUnSetActiveRow}
                                    >
                                        <TableCell align={aligns[0]} dialogCell>
                                            <Checkbox
                                                dialogCheckbox
                                                disableRipple
                                                checked={isSelected(good.id, selectedGoods)}
                                                onChange={onSelect(good.id)}
                                            />
                                        </TableCell>
                                        <TableCell align={aligns[1]} dialogCell>
                                            {isImageInGood(good.images) && hashIdImage(good.images) ? (
                                                <Container maxWidthImageInGoodListContainer>
                                                    <Container imageInGoodListContainer>
                                                        <Img
                                                            imageInGoodList
                                                            path={`${pathToImage}${hashIdImage(good.images)}`}
                                                            altText={`Main good ${good.id} image`}
                                                        />
                                                    </Container>
                                                </Container>
                                            ) : (
                                                <Container maxWidthImageInGoodListContainer>
                                                    <Container imageInGoodListContainer>
                                                        <Container absolutePositionInCenter>
                                                            <Container flexCenter>
                                                                <HideImageIcon dialogIcon />
                                                            </Container>
                                                        </Container>
                                                    </Container>
                                                </Container>
                                            )}
                                        </TableCell>
                                        <TableCell align={aligns[2]} dialogCell>
                                            {good.name}
                                        </TableCell>
                                        <TableCell align={aligns[3]} dialogCell>
                                            {good.price &&
                                                (good.discountPrice ? (
                                                    <>
                                                        <Container>
                                                            <Fragment goodPriceWithDiscount noWrap>
                                                                {good.price + ' ' + currency}
                                                            </Fragment>
                                                        </Container>
                                                        <Container>
                                                            <Fragment discountPrice noWrap>
                                                                {good.discountPrice + ' ' + currency}
                                                            </Fragment>
                                                        </Container>
                                                    </>
                                                ) : (
                                                    <Fragment noWrap>{good.price + ' ' + currency}</Fragment>
                                                ))}
                                        </TableCell>
                                        <TableCell align={aligns[4]} dialogCell>
                                            {good.category !== null ? good.category.name : ''}
                                        </TableCell>
                                        <TableCell align={aligns[5]} dialogCell>
                                            {good.amount &&
                                                (good.amount <= minAmount ? (
                                                    <Fragment fewGoods>{good.amount}</Fragment>
                                                ) : (
                                                    <Fragment manyGoods>{good.amount}</Fragment>
                                                ))}
                                        </TableCell>
                                        <TableCell align={aligns[6]} dialogCell>
                                            <Fragment
                                                inStock={good.goodState === goodStateItems.find(item => item.id === 0).value}
                                                notInStock={good.goodState === goodStateItems.find(item => item.id === 1).value}
                                                underTheOrder={good.goodState === goodStateItems.find(item => item.id === 2).value}
                                                deliveryIsExpected={good.goodState === goodStateItems.find(item => item.id === 3).value}
                                                isRunningOut={good.goodState === goodStateItems.find(item => item.id === 4).value}
                                            >
                                                {good.goodState && goodStateItems.find(state => state.value === good.goodState).label}
                                            </Fragment>
                                        </TableCell>
                                        <TableCell align={aligns[7]} dialogCell>
                                            <Fade in={good.id === activeRow} timeout={0}>
                                                <IconButton
                                                    dialogButton
                                                    disableRipple
                                                    onClick={onEditGood(good.id)}
                                                    disabled={isEditButtonDisabled}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Fade>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                    {(goods === null || goods.length === 0) && (
                        <Container marginTop7>
                            <Typography mainAdminText textAlignCenter component={'div'}>
                                Список характеристик пуст :(
                            </Typography>
                        </Container>
                    )}

                    <Container marginTop7>
                        <ItemsPerPage
                            title={'Показывать на странице:'}
                            buttonValues={[5, 10, 25]}
                            currentValue={itemsPerPage}
                            onChange={onChangeItemsPerPage}
                            disabled={isPaginationDisabled}
                        />
                    </Container>

                    {totalPages !== null && totalPages !== 1 && (
                        <Container marginTop7>
                            <Pagination
                                dialogPagination
                                count={totalPages}
                                page={currentPage}
                                onChange={onPaginationItemClick}
                                disabled={isPaginationDisabled}
                                // variant="outlined"
                                shape="rounded"
                            />
                        </Container>
                    )}
                </Container>
            </AdminPageBorder>
        </>
    )
}

export default Goods
