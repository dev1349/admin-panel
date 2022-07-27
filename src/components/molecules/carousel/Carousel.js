import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import ArrowRightIcon from '../../atoms/icons/arrowIcon/ArrowRight/ArrowRightIcon'
import ArrowLeftIcon from '../../atoms/icons/arrowIcon/ArrowLeft/ArrowLeftIcon'
import CarouselContainer from '../../atoms/carousel/CarouselContainer/CarouselContainer'
import ProgressBar from '../ProgressBar/ProgressBar'
import Pagination from './Pagination'

const CarouselStyled = createStyled('CarouselStyle', 'div')

const Carousel = ({ list }) => {
    const [progress, setProgress] = React.useState(0)
    const [step, setStep] = React.useState(0)

    const pagination = new Pagination({
        quantity: list.length - 1,
        progress: progress,
        setProgress: setProgress,
        step: step,
        setStep: setStep,
    })

    return (
        <CarouselStyled>
            <CarouselContainer>
                <ArrowLeftIcon onClick={() => pagination.backStep()} />
                {list[step]}
                <ArrowRightIcon onClick={() => pagination.nextStep()} />
            </CarouselContainer>
            <ProgressBar progress={progress + '%'} />
        </CarouselStyled>
    )
}
export default Carousel
