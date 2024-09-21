import React from 'react'
import { IUser } from '../../interfaces/user.interface'

interface UserItemProps {
    user: IUser
}
const UserItem:React.FC<UserItemProps> = ({user: {name}}) => {
  return (
    
      <li> {name}</li>
    
  )
}

export default UserItem
