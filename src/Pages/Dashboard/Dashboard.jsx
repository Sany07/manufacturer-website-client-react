import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    return (
    <div class="m-28">
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
            <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink to="/dashboard/home">Dashboard</NavLink></li>
            <li><NavLink to="/dashboard/orders">My Orders</NavLink></li>
            <li><NavLink to="/dashboard/review">Add A Review</NavLink></li>
            <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
            {/* { admin && <>
                <li><NavLink to="/dashboard/users">All Users</NavLink></li>
                <li><NavLink to="/dashboard/addDoctor">Add a Doctor</NavLink></li>
                <li><NavLink to="/dashboard/manageDoctor">Manage Doctors</NavLink></li>
            </>} */}
        </ul>

        </div>
        </div>
    </div>
    );
};

export default Dashboard;