import React, { FC } from "react";
import { Link } from "react-router-dom";

import '../styles/currentUser.scss';

interface ICardUser {
    id:number
    name: string
    address: string
    company: string
}

const CardUser:FC<ICardUser> = ({name,address, company,id}) => {

    return (
       
            <div className="curentUser" >
                <div className="curentUser__block">
                    <div className="curentUser__desc">
                        <span className="keyName">ФИО:</span> {name}
                    </div>
                    <div className="curentUser__desc">
                        <span className="keyName">город:</span> {address}
                    </div>
                    <div className="curentUser__desc">
                        <span className="keyName">компания:</span> {company}
                    </div>
                </div>
                <Link to={"/moreInfo"+ '/' + id} className="more-btn">Подробнее</Link >
            </div>
        
    )
}

export default CardUser;