import React from 'react';

const CustomTable = ({orders,handleDelete}) => {
    return (
        <>
            {orders.map((order, index) => (
                <tr key={index}>
                    <th>
                        {order.productName}
                    </th>
                    <td>
                        {order.quantity}
                    </td>
                    <td>
                        {order.price}
                    </td>
                    <th>
                    <button
                  className="ml-1 inline-flex text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Pay Now
                </button>

                    <button
                  className="ml-1 inline-flex text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-lg"
                  onClick={() => handleDelete(order._id)}
                >
                  Cancel Order
                </button>
                    </th>
                </tr>
          ))}
   </>
    );
};


export default CustomTable;