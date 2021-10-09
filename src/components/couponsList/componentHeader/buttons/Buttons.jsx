import React from 'react'
import styled from 'styled-components'
import Button from '../../Button'


const ButtonGroup = styled.div`
  display: flex;
`


const Buttons = ({viewMode, setListMode, setAddMode, saveCoupon}) => {

    return (
        <ButtonGroup>

            {viewMode === 'list' && <Button
                icon={'#plus'}
                onClick={setAddMode}
            />}

            {(viewMode === 'add' || viewMode === 'edit') && (<>
                <Button
                    icon={'#save'}
                    onClick={saveCoupon}
                />
                <Button
                    icon={'#reply'}
                    onClick={setListMode}
                />
            </>)}

        </ButtonGroup>
    )
}


export default Buttons