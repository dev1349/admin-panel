import React from 'react'
import {Link} from 'react-router-dom'


const HeaderSubMenu = ({title, subMenuItems}) => {
    return (
        <div className="header--subMenu">
            <p className="header--subMenuTitle">{title}</p>
            <ul className="header--subMenuItems">

                {subMenuItems.map(({id, title}) => {
                    return (
                        <li className="header--subMenuItem" key={id}>
                            <Link to={''} className="header--subMenuLink">
                                {title}
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}


export default HeaderSubMenu