import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import TableRow from '../../Components/TableRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <LoadingSpinner/>
    }
    return (
        <div>
            <h2 className="text-2xl">Total Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index)=><TableRow
                           key={user._id}
                           index={index}
                           user={user}
                           refetch={refetch}
                           ></TableRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;