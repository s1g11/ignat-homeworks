import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (filter:FilterType) => {
        props.setFilter(filter)
    }

    return (
        <div className={s.affairsContainer}>

            {mappedAffairs}

            <button onClick={()=> setFilter('all')}>All</button>
            <button className={s.high} onClick={()=> setFilter('high')}>High</button>
            <button className={s.middle} onClick={()=> setFilter('middle')}>Middle</button>
            <button className={s.low} onClick={()=> setFilter('low')}>Low</button>
        </div>
    )
}

export default Affairs
