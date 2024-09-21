import { useEffect, useState } from "react"
import { IUser } from "../interfaces/user.interface"
import {getUsers} from '../api/users/getUsers'


const useGetUsers = () => {
    const [users, setUsers] = useState<IUser[]>([])


    useEffect(() => {
        getUsers().then(data => setUsers(data))
    }, [])
    
    return { users }

}

export default useGetUsers
