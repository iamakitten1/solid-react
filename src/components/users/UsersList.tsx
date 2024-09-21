import React from 'react'
import { IUser } from '../../interfaces/user.interface'
import UserItem from './UserItem'

interface UserSlistProps{
    users: IUser[]
}
const UsersList:React.FC<UserSlistProps> = ({users}) => {
  return (
    <ul>
      {users.map(user => <UserItem key={user.id} user={user} />)}
        
    </ul>
  )
}

export default UsersList;
