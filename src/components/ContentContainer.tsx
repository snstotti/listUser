import React, { Dispatch, FC, SetStateAction } from "react";
import ListUsers from './ListUsers';
import { Route, Routes } from "react-router-dom";

import '../styles/content.scss';
import ProfileUser from "./ProfileUser";
import { ICuretnUser } from "../types/types";

interface listUsersProps {
    users: ICuretnUser[]
    setlistUsers: Dispatch<SetStateAction<ICuretnUser[]>>
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
}

const ContentContainer: FC<listUsersProps> = ({ users, setlistUsers, onChangeInput }) => {

    return (


        <div className="right-block">

            <Routes>
                <Route path="/" element={<ListUsers listUsers={users} />} />


                <Route path='/moreInfo/:number' element={<ProfileUser onChangeInput={onChangeInput} setlistUsers={setlistUsers} listUsers={users} />} />


            </Routes>
        </div>




    )


}

export default ContentContainer;