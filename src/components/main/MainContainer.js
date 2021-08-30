import {Main} from './Main'
import React from 'react'

class MainContainer extends React.Component {
    render() {
        return <div>
            {this.props.allGood &&
            <Main allGood={this.props.allGood}/>}
        </div>
    }
}

export default MainContainer