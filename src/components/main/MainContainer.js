import {Main} from './Main'
import React from 'react'

class MainContainer extends React.Component {
    render() {
        return <div>
            {this.props.allGoods &&
            <Main allGood={this.props.allGoods}/>}
        </div>
    }
}

export default MainContainer