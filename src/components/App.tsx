import React, { useEffect, useMemo, useState } from "react";
import '../styles/app.scss';
import { ICuretnUser } from "../types/types";
import ContentContainer from "./ContentContainer";
import FilterBtn from "./FilterBtn";


const App = () => {

    const [listUsers, setlistUsers] = useState<ICuretnUser[]>( [] );

    const fetchRequest = async (url: string) => {

        try {
            const res = await fetch(url).then<ICuretnUser[]>(el => el.json())
            setlistUsers(res)
        } catch (e) {
            alert(e)
        }
    }

    const sorting = (key1: string, key2: string) => {
        const newarr = listUsers.concat()

        function SortArray(x: any, y: any) {
            return x[key1][key2].localeCompare(y[key1][key2]);
        }

        let sortArr = newarr.sort(SortArray);
       
        return setlistUsers(sortArr)
    }

    
    

    const onChangeInput =(e:React.ChangeEvent<HTMLInputElement>,id:number)=>{
        const {name,value} = e.target as HTMLButtonElement;

       let newlist = listUsers.map((el:any)=>{
        if(el.id === id){
           return { ...el,[name] : value,address:{...el.address,[name] : value}}
        }

        return el
    })
       
       setlistUsers(newlist)
       
    }

    useEffect(()=>{
        fetchRequest('https://jsonplaceholder.typicode.com/users')
    },[])

    return (
        <div className="main">
            <div className="container">
                <div className="main__content">
                    <FilterBtn sorting={sorting} />

                    < ContentContainer users={listUsers} onChangeInput={onChangeInput} setlistUsers={setlistUsers} />
                </div>
            </div>
        </div>
    );

}

export default App;