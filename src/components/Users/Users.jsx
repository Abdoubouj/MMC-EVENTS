import "./Users.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { events } from "../../data/events";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
const Users = () => {
  return (
    <div className="users">
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
        <button className="add-event-btn" data-bs-toggle="modal" data-bs-target="#addEvent">
          <AddCircleOutlineRoundedIcon /> Add new User
        </button>
      </div>
      <div className="bottom">
        <table className="users-table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>adresse</th>
              <th>city</th>
              <th>category</th>
              <th>image</th>
              <th>start date</th>
              <th>end date</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.adresse}</td>
                <td>{event.city}</td>
                <td>{event.category}</td>
                <td>
                  <img src={event.image} width={50} alt="" />
                </td>
                <td>{event.startDate}</td>
                <td>{event.endDate}</td>
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
      </div>
    </div>
  );
};

export default Users;
