import React, {Dispatch, SetStateAction} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name:string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClassError = s.error
    const inputClassCorrect = s.correct

    const onKeyPressHandler = (key:string) => {
        if (key === 'Enter') addUser()
    }

    return (
        <div className={s.formContainer}>
            <div className={s.inputContainer}>
                <input onKeyUp={(e)=> onKeyPressHandler(e.key)} value={name} onChange={(e) =>setNameCallback(e.currentTarget.value)} onBlur={(e) =>setNameCallback(e.currentTarget.value)} className={error !== '' ? inputClassError : inputClassCorrect}/>
                <div className={s.errorText}>{error}</div>
            </div>
            <div>
                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting