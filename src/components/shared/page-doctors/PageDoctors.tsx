import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

type pageDoctors = {
    [key: string]: Array<doctors>
}
type doctors = {
    "id": number
    "photo": string
    "name": string
    "assessmentQuality": number
    "vocation": string
    "location": string
}
function PageDoctors() {

    const [data, setData] = useState<pageDoctors>({
        "doctors": [
            {
                "id": 1,
                "photo": "./assets/images/doctor1.jpg",
                "name": "Matthew Reyes",
                "assessmentQuality": 5,
                "vocation": "Obstetrics & Gynaecology",
                "location": "Hong Kong "
            },
            {
                "id": 2,
                "photo": "./assets/images/doctor2.jpg",
                "name": "Rebecca Gilbert",
                "assessmentQuality": 5,
                "vocation": "Obstetrics & Gynaecology",
                "location": "Hong Kong "
            },
            {
                "id": 3,
                "photo": "./assets/images/doctor3.jpg",
                "name": "Bobby Stanley",
                "assessmentQuality": 4,
                "vocation": "Obstetrics & Gynaecology",
                "location": "Hong Kong "
            },
            {
                "id": 4,
                "photo": "./assets/images/doctor4.jpg",
                "name": "Kathryn Cooper",
                "assessmentQuality": 5,
                "vocation": "Obstetrics & Gynaecology",
                "location": "Hong Kong "
            },
            {
                "id": 5,
                "photo": "./assets/images/doctor5.jpg",
                "name": "Carmen Nelson",
                "assessmentQuality": 5,
                "vocation": "Obstetrics & Gynaecology",
                "location": "Hong Kong "
            },
            {
                "id": 6,
                "photo": "./assets/images/doctor6.jpg",
                "name": "Janice Hughes",
                "assessmentQuality": 4,
                "vocation": "Obstetrics & Gynaecology",
                "location": "Hong Kong "
            }
        ]
    });

    function getStatusTrue(arg: number) {

        let item=[];
        for (let i = 0; i <= arg-1; i++) {
            item.push(<span>&#9733;</span>)
        }
        return item
    }

    function getStatusFalse(arg: number) {

        let item=[];
        for (let i = arg; i <= 4; i++) {
            item.push(<span>&#9734;</span>)
        }
        return item
    }

    /*useEffect(() => {
        fetch('/doctors')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])*/

    return (
        <div className="section-page-doctors">
            <div className="container ">
                <div className="row">
                    {data["doctors"].map(todo => {
                            return (
                                <div className="col-lg-4 col-sm-6 doctor" >
                                    <div className="doctor__wrapper">
                                        <div className="doctor__wrapper-image">
                                            <img src={todo.photo}/>
                                        </div>
                                        <div className="doctor__wrapper-detail">
                                            <h5><a href="">{todo.name}</a></h5>
                                            <span className="complete">{
                                                getStatusTrue(todo.assessmentQuality)
                                            }</span>
                                            <span className="blank">
                                            {
                                                getStatusFalse(todo.assessmentQuality)
                                            }</span>
                                            <p className="profession">
                                                <NavLink to="/">{todo.vocation}</NavLink></p>
                                            <p className="icon">
                                                <FontAwesomeIcon icon="search-location"/>{todo.location}</p>
                                            <button className="btn btn-primary">View More</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>

    );
}

export default PageDoctors;