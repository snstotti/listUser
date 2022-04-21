import React, { FC } from "react";

import '../styles/filterBtn.scss';

interface FilterBtnProps {
    sorting: (field:string,field2:string)=> void
  }

const FilterBtn: FC<FilterBtnProps> = ({sorting}) => {




    return <div className="left-block">
        <div className="filter">
            <div className="filter__btn">
                <p className="filter__title">
                    Сортировка
                </p>
                <button onClick={()=>sorting('address','city')} className="btn btn-blue">по городу</button>
                <button onClick={()=>sorting('company','name')} className="btn btn-blue">по компании</button>
            </div>
        </div>
    </div>
    
}

export default FilterBtn;