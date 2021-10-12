import styled, { css } from 'styled-components'

export const Container = styled.div`
    padding: 10px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    color: ${props => props.theme.color || 'black'};
    border: 1px solid ${props => props.theme.backgroundTitleColor || 'black'};
`

export const Thead = styled.thead`
    color: ${props => props.theme.fontTitleColor || 'white'};
    background-color: ${props => props.theme.backgroundTitleColor || 'black'};
    border: 1px solid ${props => props.theme.backgroundTitleColor || 'black'};
`

export const Tbody = styled.tbody`
    border: 1px solid ${props => props.theme.backgroundTitleColor || 'black'};
`

export const Tr = styled.tr`
    border: 1px solid ${props => props.theme.backgroundTitleColor || 'black'};
`

export const Th = styled.th`
    padding: ${props => props.theme.captionPadding || '5px'};
    border: 1px solid ${props => props.theme.backgroundTitleColor || 'black'};

    ${props =>
        props.centered &&
        css`
            text-align: center;
        `}
`

export const Td = styled.td`
    padding: 10px 10px;
    border: 1px solid ${props => props.theme.backgroundTitleColor || 'black'};

    ${props =>
        props.centered &&
        css`
            text-align: center;
        `}
`

export const TitleButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.fontTitleColor || 'white'};
`

export const TitleCaption = styled.span`
    margin-right: 5px;
`

export const CellList = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type: none;
`

export const CellListItem = styled.li`
    ${props =>
        props.actual &&
        css`
            color: ${props => props.theme.actualPriceColor}; ;
        `}

    ${props =>
        props.notActual &&
        css`
            text-decoration: line-through;
        `}
`

export const Label = styled.span`
    padding: 5px;
    background-color: green;
    color: white;
    border-radius: 3px;

    ${props =>
        props.attention &&
        css`
            background-color: ${props => props.theme.minCountColor || 'red'};
        `}
`

export const Img = styled.img`
    display: inline;
    border: 1px solid ${props => props.theme.backgroundTitleColor || 'black'};
`
