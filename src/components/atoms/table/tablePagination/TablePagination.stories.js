import React from 'react'
import TablePagination from './TablePagination'
import NextIcon from '../../icons/nextIcon/NextIcon'
import BackIcon from '../../icons/backIcon/BackIcon'

export default {
    title: 'atoms/table/TablePagination',
    component: TablePagination,
}

const Template = args => <TablePagination {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogTablePagination: true,
    component: 'div',
    labelRowsPerPage: 'К-во на странице:',
    rowsPerPageOptions: [5, 10, 25],
    count: 16,
    labelDisplayedRows: ({ from, to, count }) => {
        return `${from}–${to} из ${count !== -1 ? count : `больше чем ${to}`}`
    },
    rowsPerPage: 5,
    page: 0,
    onPageChange: () => console.log('change page'),
    onRowsPerPageChange: () => console.log('change rows per page'),
    nextIconButtonProps: {
        children: <NextIcon />,
        disableRipple: true,
    },
    backIconButtonProps: {
        children: <BackIcon />,
        disableRipple: true,
    },
}
