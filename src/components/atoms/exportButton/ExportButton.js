import React from 'react'
import SimpleButton from '../simpleButton/SimpleButton'
import FileDownloadIcon from '../icons/fileDownloadIcon/FileDownloadIcon'
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

const ExportButton = ({
    children = 'Экспорт',
    tableList = null,
    fileName = 'data',
    tableHeader = null,
}) => {
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    const fileExtension = '.xlsx'

    const handleExport = () => {
        if (!tableList) return

        const ws = XLSX.utils.book_new()
        if (tableHeader) {
            XLSX.utils.sheet_add_aoa(ws, [tableHeader])
        }

        XLSX.utils.sheet_add_json(ws, tableList, {
            origin: tableHeader ? 'A2' : 'A1',
            skipHeader: tableHeader,
        })
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, {
            bookType: 'xlsx',
            type: 'array',
            cellStyles: true,
        })
        const data = new Blob([excelBuffer], { type: fileType })
        FileSaver.saveAs(data, fileName + fileExtension)
    }

    return (
        <SimpleButton startIcon={<FileDownloadIcon />} onClick={handleExport}>
            {children}
        </SimpleButton>
    )
}

export default ExportButton
