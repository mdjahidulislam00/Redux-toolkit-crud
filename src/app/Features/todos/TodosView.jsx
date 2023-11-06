import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_user, edit_user, remove_user } from "./todosSlice";

function TodosView() {
  const userList = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: ' ',
    age: ' '
  })
  const[updateUser, setUpdateUser] = useState({
    id: '',
    name: '',
    phone: ' ',
    age: ' '
  })
  console.log(updateUser)
 const [isEdit, setIsEdit]  = useState(false)

  const handleInputChange =(e)=>{
    const {name, value} = e.target
       if(!isEdit){
        setUserInfo({
            ...userInfo,
            [name]: value
        })
       } else{
        setUpdateUser({
            ...updateUser,
            [name]: value
        })
       }
  }
   
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(add_user(userInfo))
    setUserInfo({
        name: '',
        phone: ' ',
        age: ' '
    })
    console.log('Click')
  }

  const handelRemove =(id)=>{
    dispatch(remove_user(id))
  }

  const handelEdit =(user)=>{
    setIsEdit(true)
    console.log(user)
    setUpdateUser({
        id: user.id,
        name: user.name,
        phone: user.phone,
        age: user.age
    })
    // dispatch(remove_user(user))
  }
  const updatUserHandler =(e)=>{
    e.preventDefault()
    dispatch(edit_user(updateUser))
    setIsEdit(false)
    
  }
  return (
    <div className="flex justify-between space-x-10">
      <div className="bg-gray-100 p-5">
        <h2 className="p-3 text-xl font-bold">User Input</h2>
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label htmlFor="name">Name
            <input onChange={handleInputChange} type="text" name="name" id="name" value={userInfo.name} />
          </label>
          <label htmlFor="phone">Phone
            <input onChange={handleInputChange} type="tel" name="phone" id="phone" value={userInfo.phone} />
          </label>
          <label htmlFor="age">Age
            <input onChange={handleInputChange} type="number" name="age" id="age" value={userInfo.age} />
          </label>
          <input className="bg-gray-300 p-1 cursor-pointer hover:bg-gray-400" type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <h2 className="p-3 text-xl font-bold">User Information</h2>
        <ul>
          {userList && userList.length > 0 ? (
            userList.map((user) => (
              <li className="py-2" key={user.id}>Name: {user.name}, number: {user.phone} , age: {user.age} <br /> <button onClick={()=> handelRemove(user.id)} className="bg-red-400 p-1 rounded">remove</button> <button onClick={()=> handelEdit(user)} className="bg-sky-400 p-1 rounded">Edit</button></li>
            ))
          ) : (
            <p>No users available</p>
          )}
        </ul>
      </div>
      {
        isEdit && 
        <form onSubmit={updatUserHandler}  className="flex flex-col space-y-2 bg-gray-200 p-5" >
          <label htmlFor="name">Name
            <input onChange={handleInputChange} type="text" name="name" id="name" value={updateUser.name} />
          </label>
          <label htmlFor="phone">Phone
            <input onChange={handleInputChange} type="tel" name="phone" id="phone" value={updateUser.phone} />
          </label>
          <label htmlFor="age">Age
            <input onChange={handleInputChange} type="number" name="age" id="age" value={updateUser.age} />
          </label>
          <input className="bg-gray-300 p-1 cursor-pointer hover:bg-gray-400" type="submit" value="update" />
        </form>
      }
    </div>
  );
}

export default TodosView;
