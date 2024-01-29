import React from 'react'
import "./AdminEvents.scss"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
const AdminEvents = () => {
  return (
    <div className='admin-events'>
        <div className="top">
          <h1>Events</h1>
          <button className='add-event-btn'><AddCircleOutlineRoundedIcon/> Add new event</button>
        </div>
    </div>
  )
}

export default AdminEvents