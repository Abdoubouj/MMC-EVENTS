import React from 'react'
import "./AdminDashboard.scss"
import mmcLogo from "../../assets/mmcLogo.svg"
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
        <aside className="dashboard-sidebare">
           <div className="logo">
            <img className='logo-img' src={mmcLogo} width={90} alt="#" />
            <h1 className='logo-title'>Morocco Microsoft Community</h1>
           </div>
           <ul className="dashboard-menu">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Partners</a></li>
           </ul>
        </aside>
    </div>
  )
}

export default AdminDashboard