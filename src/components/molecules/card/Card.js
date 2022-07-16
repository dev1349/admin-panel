import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import CardHeader from '../../atoms/card/CardHeader/CardHeader'
import CardContent from '../../atoms/card/CardContent/CardContent'
import CardMain from '../../atoms/card/CardMain/CardMain'
import LeverageIcon from '../../atoms/icons/leverageIcon/LeverageIcon'
import CardFooter from '../../atoms/card/CardFooter/CardFooter'
import CardContainer from '../../atoms/card/CardContainer/CardContainer'

const CardStyled = createStyled('CardStyle', 'section')

const Card = ({ cards }) => {
    return (
        <CardStyled>
            {cards.map((card, index) => (
                <CardContainer key={index}>
                    <CardHeader progress={card.progress}>
                        <h3>{card.title}</h3>
                        <span>{card.progress}%</span>
                    </CardHeader>
                    <CardContent>
                        <CardMain>
                            <card.Svg />
                            <h2>{card.count}</h2>
                        </CardMain>
                        <CardFooter>
                            <LeverageIcon />
                        </CardFooter>
                    </CardContent>
                </CardContainer>
            ))}
        </CardStyled>
    )
}

export default Card
