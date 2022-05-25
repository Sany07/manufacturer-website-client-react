import React from 'react';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import useLoading from '../Hooks/useLoading';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const ProductTable = ({ product,index, refetch }) => {

    const [isLoading, setIsLoading] = useLoading();
    const MySwal = withReactContent(Swal);

    const handleDelete = (id) => {
        MySwal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const url = `https://ss-manu09.herokuapp.com/product/${id}`;
            fetch(url, {
              method: "DELETE",
              headers: {
                
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged === true) {
                  toast.success("Your Successfully Deleted ");
                  refetch()
                }
              });
          }
        });
      };

    return (
        <tr>
            <th>{index+1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.minimumorder}</td>
            <td>{product.stock}</td>
            <td>
                <button  onClick={()=>handleDelete(product._id)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </td>
        </tr>
    );
};


export default ProductTable;