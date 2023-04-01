import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type containerUsLineType = {
    [key: string]: Array<feedbackLoop>
}
type feedbackLoop = {
    "id": number
    "icon":  IconProp
    "title": string
    "slogan": string
}
function ContainerUsLine() {

    const [data, setData] = useState<containerUsLineType>({
        "feedback-loop": [
            {
                "id": 1,
                "icon": "hospital-alt",
                "title": "Our Address",
                "slogan": "PSD  Building,  2 Tower St, United States."
            },
            {
                "id": 2,
                "icon": "phone-alt",
                "title": "Our Phone",
                "slogan": "Telephone: 00291291023 Mobile: 000 2324 39493"
            },
            {
                "id": 3,
                "icon": "envelope",
                "title": "Our Email",
                "slogan": "Email: doc@email.com Inquiries: info@orex.com"
            }
        ]
    });

    /*useEffect(() => {
        fetch("/feedback-loop")
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])*/

    return (
        <div className="feedback">
            <div className="container feedback-loop">
                <div className="row justify-content-center">
                    {
                        data["feedback-loop"].map(todo => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 feedback-loop__case" key={todo.id}>
                                    <div className="info">
                                        <div className="info__icon"><FontAwesomeIcon icon={todo.icon}/></div>
                                        <div>
                                            <h5>{todo.title}</h5>
                                            <p>{todo.slogan}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default ContainerUsLine;