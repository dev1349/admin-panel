import UsersIcon from '../components/atoms/icons/usersIcon/UsersIcon'
import PackageIcon from '../components/atoms/icons/packageIcon/PackageIcon'
import BuyerIcon from '../components/atoms/icons/buyerIcon/BuyerIcon'
import BasketIcon from '../components/atoms/icons/basketIcon/BasketIcon'

const cards = [
    {
        title: 'Посетители',
        progress: -12,
        count: 240,
        Svg: UsersIcon,
    },
    {
        title: 'Покупки',
        progress: 0,
        count: 240,
        Svg: PackageIcon,
    },
    {
        title: 'Заказы',
        progress: 0,
        count: 240,
        Svg: BasketIcon,
    },
    {
        title: 'Покупатели',
        progress: 12,
        count: 240,
        Svg: BuyerIcon,
    },
]

export default cards
