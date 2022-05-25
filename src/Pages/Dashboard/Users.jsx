import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import TableRow from '../../Components/TableRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://ss-manu09.herokuapp.com/users', {
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
      <h2 className="text-2xl text-gray-900 mt-10 ml-20">Total Orders: {users?.length}</h2>
            <div class="overflow-x-auto mt-10">
                <table class="table  text-gray-900 overflow-x-auto w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            {/* <th>Remove</th> */}
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