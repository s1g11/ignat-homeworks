import React, {useState} from 'react'
import Greeting from './Greeting'
import {userType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<userType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (name: string) => { // need to fix any
        let trimmedName = name.trim()

        if (trimmedName !== '') {
            setName(trimmedName)
            setError('')
        }
        else {
            setError('incorrect name')
            setName('')
        }
    }
    const addUser = () => {
        if (name === '') {
            setError('incorrect name')
        }
        else {
            setError('')
            alert(`Hello, ${name.trim()}!`)
            setTotalUsers(totalUsers + 1)
            setName('')
        }
    }
    const onEnter = () => {

    }

    let [totalUsers, setTotalUsers] = useState<number>(0) // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
