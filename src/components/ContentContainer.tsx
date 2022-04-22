import React, { Dispatch, FC, SetStateAction} from "react";
import ListUsers from './ListUsers';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import '../styles/content.scss';
import ProfileUser from "./ProfileUser";
import { ICuretnUser } from "../types/types";

interface listUsersProps {
    users: ICuretnUser[]
    setlistUsers: Dispatch<SetStateAction<ICuretnUser[]>> 
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, id: number)=>void
  }

const ContentContainer: FC<listUsersProps> = ({users,setlistUsers,onChangeInput}) => {

    return (

        <Router>
            <div className="right-block">

                <Routes>

                    <Route path="/listUser/" element={<ListUsers listUsers={users} />} />

                    <Route path='/listUser/moreInfo/:number' element={<ProfileUser onChangeInput={onChangeInput} setlistUsers={setlistUsers} listUsers={users} />} />


                </Routes>
            </div>

        </Router>
    )


}

export default ContentContainer;