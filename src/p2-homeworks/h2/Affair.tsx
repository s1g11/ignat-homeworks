import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affairContainer}>
            <div className={s.affair}>{props.affair.name}</div>
            <div className={s.affair}>{props.affair.priority}</div>

            <div className={s.affair}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
