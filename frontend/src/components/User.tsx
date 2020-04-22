import React from "react"

interface IUser {
  name: string,
  email: string
}

interface Props {
  user: IUser
}

const User: React.FC<Props> = ({ user }) => {
  return (
   <div>
     {console.log(user)}
     <strong>Nome:</strong> {user.name} <br/>
     <strong>Email:</strong> {user.email}
   </div>
  )
}

export default User

