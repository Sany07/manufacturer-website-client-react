import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const CustomTable = ({orders,handleDelete,handleApprove}) => {


    return (
        <>
            {orders.map((order, index) => (
                <tr key={index}>
                    <th>
                        {order.productName}
                    </th>
                    <th>
                        {order.email}
                    </th>
                    <td>
                        {order.quantity}
                    </td>
                    <td>
                        {order.price}
                    </td>
                    <th>
                    {(order.price && !order.paid) && <p><span className='text-error'>Unpaid</span></p>}
                    {(order.price && order.paid && !order.approve) && <div>
                    <p><span className='text-success'>Pending</span></p></div>} 
                    {(order.paid && order.approve) && <div>
                    <p><span className='text-success'>Shipped</span></p></div>} 
                </th> 
                <th>
                    {(!order.paid) &&     <button
                    className="ml-1 inline-flex text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-lg"
                    onClick={() => handleDelete(order._id)}
                    >
                    Cancel Order
                    </button>}
                    {(order.paid && !order.approve) &&     <button
                    className="ml-1 inline-flex text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-lg"
                    onClick={() => handleApprove(order._id)}
                    >
                    Make Approve
                    </button>}
                </th>
                </tr>
          ))}
   </>
    );
};


export default CustomTable;