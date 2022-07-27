import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import CardContainer from '../../atoms/card/CardContainer/CardContainer'
import CardHeader from '../../atoms/card/CardHeader/CardHeader'
import CardContent from '../../atoms/card/CardContent/CardContent'
import CardMain from '../../atoms/card/CardMain/CardMain'
import CardText from '../../atoms/card/CardText/CardText'
import Timer from '../../atoms/cardStock/сlasses/Timer'

const CardStockStyled = createStyled('CardStockStyle', 'div')

const CardStock = ({ title, url, timer }) => {
    const time = new Timer({ timer: timer })
    const [countDown, setCountDown] = React.useState(time.time)

    setInterval(() => {
        setCountDown(time.time)
    }, 1000)

    return (
        <CardStockStyled>
            <CardContainer>
                <CardHeader>
                    <h3>{title}</h3>
                </CardHeader>
                <CardContent>
                    <CardMain>
                        <img src={url} alt={title} />
                        <CardText stock={true}>
                            <h3>{time.days} дней</h3>
                            <time>{countDown}</time>
                        </CardText>
                    </CardMain>
                </CardContent>
            </CardContainer>
        </CardStockStyled>
    )
}

export default CardStock
