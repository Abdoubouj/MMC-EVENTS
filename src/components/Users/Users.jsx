import "./Users.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { events } from "../../data/events";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import {useDispatch , useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { getUsers } from "../../features/userSlice";
const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const dispatch = useDispatch();
  const users = useSelector((state)=>state.user.users);
  useEffect(()=>{
     dispatch(getUsers());
  },[dispatch ,currentPage, itemsPerPage])
  const totalPages = Math.ceil(users && users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = users.slice(startIndex, endIndex);
  console.log(totalPages);
  return (
    <div className="admin-users">
   <div class="modal fade" id="addUsers" tabindex="-1" aria-labelledby="addUsersLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addUsersLabel">add user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form className="add-user-form">
            
        </form>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-primary p-3">add user</button>
      </div>
    </div>
  </div>
</div>
      <div className="top">
        <h1>Users</h1>
        <button className="add-user-btn" data-bs-toggle="modal" data-bs-target="#addEvent">
          <AddCircleOutlineRoundedIcon /> Add new User
        </button>
      </div>
      <div className="bottom">
        <table className="users-table">
          <thead>
            <tr>
              <th>id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>address</th>
              <th>sexe</th>
              <th>phone</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.adresse}</td>
                <td>{user.sexe === true ? "Men":"Women"}</td>
                <td>{user.telephone}</td>
                <td>
                  <button className="edit-btn">
                    <BorderColorRoundedIcon />
                  </button>
                  <button className="delete-btn">
                    <DeleteOutlineRoundedIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={()=>{setCurrentPage(prev=> prev - 1)}} disabled={startIndex === 0 ? true :false}>prev</button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page)=>(
          <button key={page}>{page}</button>
        ))}
        <button onClick={()=>{setCurrentPage(prev=> prev + 1)}} disabled={endIndex === users.length ? true :false}>next</button>
      </div>
    </div>
  );
};

export default Users;
