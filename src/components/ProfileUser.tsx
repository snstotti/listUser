import React, { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { useParams } from "react-router-dom";


import '../styles/profileUser.scss';
import { ICuretnUser } from "../types/types";
import FormLayout from "./FormLayout";

interface listUsersProps {
    listUsers: ICuretnUser[]
    setlistUsers: Dispatch<SetStateAction<ICuretnUser[]>> 
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, id: number)=>void
  }

const ProfileUser: FC<listUsersProps>= ({listUsers,setlistUsers,onChangeInput}) => {

  

    const { number } = useParams<{ number: string }>();
    const [edit, setEdit] = useState(false);
    
    const filterListUser = listUsers.filter(user=>user.id === Number(number))

    const emptyFiled =(arr:any)=>{
        
        for(let prop in arr){
            if(typeof arr[prop] === 'object' ){
                emptyFiled(arr[prop])
            }
            if(!arr[prop]){
                return alert("Не все поля заполнены")
            }
            
        }
        return console.log(filterListUser);
        
    } 

   

    return (
        <div className="profile">
            <div className="profile__header">
                <div className="title">Профиль пользоваетля</div>
                <button onClick={() => setEdit(!edit)} className="btn btn-blue">Редактировать</button>
            </div>


            <div className="profile__forms">

                {filterListUser.map(user => {
                    const { id, name, username, email, phone, website, address } = user
                    return (<div key={id}>
                        <FormLayout flag={edit} change={onChangeInput} name={'name'} title={'Name'} type={'text'} value={name} />
                        <FormLayout flag={edit} change={onChangeInput} name={'username'} title={'User name'} type={'text'} value={username} />
                        <FormLayout flag={edit} change={onChangeInput} name={'email'} title={'E-mail'} type={'email'} value={email} />
                        <FormLayout flag={edit} change={onChangeInput} name={'street'} title={'Street'} type={'text'} value={address.street} />
                        <FormLayout flag={edit} change={onChangeInput} name={'city'} title={'City'} type={'text'} value={address.city} />
                        <FormLayout flag={edit} change={onChangeInput} name={'zipcode'} title={'Zip code'} type={'text'} value={address.zipcode} />
                        <FormLayout flag={edit} change={onChangeInput} name={'phone'} title={'Phone'} type={'text'} value={phone} />
                        <FormLayout flag={edit} change={onChangeInput} name={'website'} title={'Website'} type={'text'} value={website} />
                        <FormLayout flag={edit} change={onChangeInput} name={'comment'} title={'Comment'} type={''} value={''} />
                    </div>
                    )
                })}


            </div>
            <div className="profile__footer">

                <button onClick={()=>emptyFiled(filterListUser[0])} disabled={!edit} className={!edit ? "btn btn-secondary" : "btn btn-success"}>Отправить</button>
            </div>
        </div>)
}

export default ProfileUser;