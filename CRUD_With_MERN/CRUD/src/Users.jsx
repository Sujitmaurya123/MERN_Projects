import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  {useEffect}  from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { getUser } from './redux/userSlice'
const Users = () => {
    const dispatch =useDispatch()
    const users=useSelector(state => state.users.users)
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const response =await axios.get('http://localhost:3001');
                dispatch(getUser(response.data));
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])
  return (
     <div className="d-flex vh-100 vw-100  bg-primary justify-content-center align-items-center" >
      <div className="w-250 bg-white rounded p-3">
        <button  className="btn btn-success btn-sm">
          Add +
        </button>
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
                            <button  className="btn btn-sm btn-success me-2">Update</button>
                            <button  className="btn btn-sm btn-danger">Delete</button>
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
