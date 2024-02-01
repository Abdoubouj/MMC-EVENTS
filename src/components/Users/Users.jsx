import "./Users.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import {useDispatch , useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { getUsers } from "../../features/userSlice";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
const Users = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;

  const dispatch = useDispatch();
  const users = useSelector((state)=>state.user.users);
  useEffect(()=>{
     dispatch(getUsers());
  },[dispatch])
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
            {users.filter((item, index) => {
         return (index >= page * itemsPerPage) & (index < (page + 1) * itemsPerPage);
        }).map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.LastName}</td>
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
        <ReactPaginate
  containerClassName={"pagination"}
  pageClassName={"page-item"}
  activeClassName={"active"}
  onPageChange={(event) => setPage(event.selected)}
  pageCount={Math.ceil(users.length / itemsPerPage)}
  breakLabel="..."
  previousLabel={
    <KeyboardArrowLeftRoundedIcon/>
  }
  nextLabel={
    <KeyboardArrowRightRoundedIcon/>
  }
/>
      </div>
    </div>
  );
};

export default Users;
