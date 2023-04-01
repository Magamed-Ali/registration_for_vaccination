import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type dataType = {
    [key: string]: Array<containerLine>
}

type containerLine = {
    "id": number
    "to": string
    "icon": IconProp
    "textBefore": string
    "textAfter": string
}
function ContainerLine() {

    const [data, setData] = useState<dataType>({
        "container-line": [
            {
                "id": 1,
                "to": "/",
                "icon": "map-marker-alt",
                "textBefore": "Our Address",
                "textAfter": "Drive Chicago, IL 60607"
            },

            {
                "id": 2,
                "to": "/",
                "icon": "phone-alt",
                "textBefore": "Call Us",
                "textAfter": "360-779-2228"
            },
            {
                "id": 3,
                "to": "/",
                "icon": "envelope",
                "textBefore": "Our Mail",
                "textAfter": "yourname@mail.com"
            }
        ]
    })

    /*useEffect(() => {
        fetch('/container-line')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])*/

    return (
        <div className="container">
            <div className="row contact-details">
                {
                    data["container-line"].map(todo => {
                        return (
                            <div className="col-lg-4 contact-details__address-line" key={todo.id}>
                                <NavLink to={`${todo.to}`}><FontAwesomeIcon icon={todo.icon}/></NavLink>
                                <div>
                                    <p>{todo.textBefore}</p>
                                    <p>{todo.textAfter}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ContainerLine;