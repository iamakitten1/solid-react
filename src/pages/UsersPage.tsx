import React from "react"
import useGetUsers from "../hooks/useGetUsers"
import UsersList from "../components/users/UsersList"



const UsersPage:React.FC = () => {
const {users} = useGetUsers()

  return <UsersList users={users}/>
}

export default UsersPage;
