import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { deleteUser } from './redux/userSlice'
const Users = () => {
    
    const users=useSelector(state => state.users.users)
   const dispatch=useDispatch()
    const handleDelete=(id)=>{
      axios.delete('http://localhost:3001/deleteuser/'+id)
      .then(res=>{
        dispatch(deleteUser({id}))
        

      }).catch(err=>console.log(err))
    }

  return (
     <div className="d-flex vh-100 vw-100  bg-primary justify-content-center align-items-center" >
      <div className="w-250 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
             {
                users.map(user => {
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/edit/${user.id}`}  className="btn btn-sm btn-success me-2">Update</Link>
                            <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                })
            }
        </table>
      </div>
    </div>
  )
}

export default Users
