import React, { useEffect, useState } from 'react';
import useLoading from '../../Hooks/useLoading';
import axiosPrivate from '../../Utilities/Api';
import { signOut } from "firebase/auth";
import auth from '../../firebase.init';
import CustomTableAdmin from '../../Components/CustomTableAdmin';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const ManageAllOrder = () => {
    const [orders, setOrder] = useState([])
    const [isLoading, setIsLoading] = useLoading();
    const MySwal = withReactContent(Swal);
    useEffect(() => {
        (async () => {
          try {
            const url = `http://localhost:5000/allorder`;
            const { data } = await axiosPrivate.get(url);
            console.log(data);
            setOrder(data);
            setIsLoading(false);
          } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
              signOut(auth);
            }
          }
        })();
      }, [orders]);
  // Delete Product
  const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged === true) {
              toast.success("Your Successfully Cancel ");
              const remaining = orders.filter(
                (orders) => orders._id !== id
              );
              setOrder(remaining);
            }
          });
      }
    });
  };
  // approve order

  const handleApprove=(id)=>{
        
    fetch(`http://localhost:5000/order/approve/${id}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make Approve');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success(`Order Approved`);
            }

        })
}
      if (isLoading) {
        return <LoadingSpinner />;
      }
    return (
        <div className="mt-28 overflow-x-auto w-full">
                    <table className="table w-full">
            {/* head */}
            <thead>
            <tr>
                <th>Product Name</th>
                <th>User</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
                <th />
            </tr>
            </thead>
            <tbody>
            {orders.length > 0 ? (
                  <CustomTableAdmin orders={orders} handleDelete={handleDelete} handleApprove={handleApprove}  />
                ) : (
                  <span className="ml-5">No Order Found</span>
                )}

            </tbody>
         
        </table>



        </div>

    );
};

export default ManageAllOrder;