import React from 'react'
import './AttributeHeader.sass'

export const AttributeHeader = (props) => (
    <header className={props.showComp}> {/* !!! ПЕРЕДЕЛАТЬ, сделать в дальнейшем на роутах(возможно) */}
        <div className={"AttributeHeader"}>
            <div>
                <h1>Атрибуты</h1>
                <nav>Главная / Атрибуты</nav>
            </div>
            <div>
                <div>{props.firstButton}</div>
                <div>{props.secondButton}</div>
            </div>
        </div>
        <hr/>
        <div>
            <h3>{props.title}</h3>
        </div>

    </header>
)
