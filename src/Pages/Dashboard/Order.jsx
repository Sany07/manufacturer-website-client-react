import React, { useEffect, useState } from 'react';
import useLoading from '../../Hooks/useLoading';
import axiosPrivate from '../../Utilities/Api';
import { signOut } from "firebase/auth";
import auth from '../../firebase.init';
import CustomTable from '../../Components/CustomTable';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
const Order = () => {
    const [orders, setOrder] = useState([])
    const [isLoading, setIsLoading] = useLoading();
    const MySwal = withReactContent(Swal);
    useEffect(() => {
        (async () => {
          try {
            const url = `https://ss-manu09.herokuapp.com/myorder`;
            const { data } = await axiosPrivate.get(url);
            console.log(data);
            setOrder(data);
            setIsLoading(false);
          } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
              signOut(auth);
              localStorage.removeItem('accessToken');
            }
          }
        })();
      }, []);
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
        const url = `https://ss-manu09.herokuapp.com/order/${id}`;
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
      if (isLoading) {
        return <LoadingSpinner />;
      }
    return (
        <div className="mt-28 text-gray-900 overflow-x-auto w-full">
                    <table className="table w-full">
            {/* head */}
            <thead>
            <tr>
                <th className='text-gray-900'>Product Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th />
            </tr>
            </thead>
            <tbody>
            {orders.length > 0 ? (
                  <CustomTable orders={orders} handleDelete={handleDelete}  />
                ) : (
                  <span className="ml-5">No Order Found</span>
                )}

            </tbody>
         
        </table>



        </div>

    );
};

export default Order;