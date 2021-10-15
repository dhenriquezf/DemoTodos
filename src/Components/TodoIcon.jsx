import React from 'react'
import { ReactComponent as CheckSVG } from '../Images/check.svg'
import { ReactComponent as DeleteSVG } from '../Images/delete.svg'
import '../Css/TodoIcon.css'

const TodoIcon = ({type, color = 'gray', onClick}) => {
    const iconTypes = {
        "check": color => (
            <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
        ),
        "delete": color => (
            <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
        ),
    }

    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }