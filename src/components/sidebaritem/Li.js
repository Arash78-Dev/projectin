import React from 'react'
import './li.css'


const Li = (props) => {
    return (
        <li className="d-flex listss">
            <div className="borderdiv">   
            </div>
            <div className="contentmain">
                <img src={props.icon} width="35px" alt={props.title}/>
                <span className="h4 ms-2">{props.title}</span>
            </div>

        </li>
    )
}

export default Li
