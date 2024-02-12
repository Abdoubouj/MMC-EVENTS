import "./Users.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ReactPaginate from "react-paginate";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  AddNewUser,
  UpdateUser,
  DeleteUsers,
  getUsers,
} from "../../features/userSlice";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
const Users = () => {
  const [page, setPage] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [refresh, setRefresh] = useState("");
  const itemsPerPage = 8;
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    phone: "",
    city: "",
    gender: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDeleteUser = (userID) => {
    dispatch(DeleteUsers(userID));
  };

  const handleInputChange = (fieldName, value) => {
    setNewUser((newUser) => ({
      ...newUser,
      [fieldName]: value,
    }));
  };
  const handleAddNewUser = () => {
    if (isUpdate !== true) {
      dispatch(AddNewUser(newUser));
    } else {
      console.log("====================newUser================");
      console.log(newUser);
      console.log("====================================");
      dispatch(UpdateUser(newUser));
      setIsUpdate(false);
    }
  
    setNewUser({
      firstName: "",
      lastName: "",
      userEmail: "",
      userPassword: "",
      phone: "",
      city: "",
      gender: "",
    });
  };

  const handleEditUser = (userID) => {
    const user = users.find((user) => user.userID === userID);
    setNewUser(user);
    setIsUpdate(true);
  };
  return (
    <div className="admin-users">
      <div
        className="modal fade"
        id="addUser"
        tabIndex="-1"
        aria-labelledby="addUsersLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addUsersLabel">
                  add User
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="add-event-form">
                  <div className="field event-city">
                    <label htmlFor="firstName">firstName</label>
                    <input
                      type="text"
                      id="firstName"
                      value={newUser.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="firstName..."
                    />
                  </div>

                  <div className="field event-city">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={newUser.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="lastName..."
                    />
                  </div>

                  <div className="field event-city">
                    <label htmlFor="userEmail">userEmail</label>
                    <input
                      type="text"
                      id="userEmail"
                      value={newUser.userEmail}
                      onChange={(e) =>
                        handleInputChange("userEmail", e.target.value)
                      }
                      placeholder="userEmail..."
                    />
                  </div>
                  <div className="field event-city">
                    <label htmlFor="userPassword">Password</label>
                    <input
                      type="text"
                      id="userPassword"
                      value={newUser.userPassword}
                      onChange={(e) =>
                        handleInputChange("userPassword", e.target.value)
                      }
                      placeholder="userPassword..."
                    />
                  </div>
                  <div className="field event-city">
                    <label htmlFor="phone">phone</label>
                    <input
                      type="text"
                      id="phone"
                      value={newUser.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="phone..."
                    />
                  </div>
                  <div className="field event-city">
                    <label htmlFor="city">city</label>
                    <input
                      type="text"
                      id="city"
                      value={newUser.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      placeholder="city..."
                    />
                  </div>
                  <div className="field event-city">
                    <label htmlFor="city">gender</label>
                    <input
                      type="text"
                      id="gender"
                      value={newUser.gender}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      placeholder="gender..."
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  //Add new user button
                  onClick={handleAddNewUser}
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                  type="button"
                  className="btn btn-primary p-3"
                >
                  {isUpdate === false ? "Add new User" : "Update Speaker"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top">
        <h1>Users</h1>
        <button
          className="add-user-btn"
          data-bs-toggle="modal"
          data-bs-target="#addUser"
        >
          <AddCircleOutlineRoundedIcon /> Add new User
        </button>
      </div>
      <div className="bottom">
        <table className="users-table">
          <thead>
            <tr>
              {/* <th>UserId</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>City</th>
              <th>Gender</th>

              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((item, index) => {
                return (
                  (index >= page * itemsPerPage) &
                  (index < (page + 1) * itemsPerPage)
                );
              })
              .map((user) => (
                <tr key={user.userID}>
                  {/* <td>{user.id}</td> */}
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.userPassword}</td>
                  <td>{user.phone}</td>
                  <td>{user.city}</td>
                  <td>{user.userID}</td>
                  <td>
                    <button
                      onClick={() => handleEditUser(user.userID)}
                      data-bs-toggle="modal"
                      data-bs-target="#addUser"
                      className="edit-btn"
                    >
                      <BorderColorRoundedIcon />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.userID)}
                      className="delete-btn"
                    >
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
          previousLabel={<KeyboardArrowLeftRoundedIcon />}
          nextLabel={<KeyboardArrowRightRoundedIcon />}
        />
      </div>
    </div>
  );
};

export default Users;
