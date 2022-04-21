import React, { FC } from "react";
import CardUser from "./CardUser";

import '../styles/listUser.scss';
import { ICuretnUser } from "../types/types";

interface listUsersProps {
    listUsers: ICuretnUser[]
  }

const ListUsers: FC<listUsersProps> = ({listUsers}) => {



    return <>
        <div className="title">Список пользователей</div>
        <div className="user__block">

            {!listUsers.length ? 'Loading...' : listUsers.map(user => {
                return <CardUser
                    key={user.id} id={user.id}
                    address={user.address.city}
                    company={user.company.name}
                    name={user.name} />
            })}

        </div>

    </>
            

}

export default ListUsers;