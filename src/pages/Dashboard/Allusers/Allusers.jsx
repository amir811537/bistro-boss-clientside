import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const Allusers = () => {
  const axiousSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiousSecure.get("/users");
      return res.data;
    },
  });


  const handelMakeAdmin=(user)=>{
    axiousSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${user.name} is an Admin now`,
                showConfirmButton: false,
                timer: 3000
              });
        }
    })
  }




  const handelDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure.delete(`/users/${user._id}`).then((res) => {
          // console.log(res)
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">all users</h2>
        <h2 className="text-3xl">Total users :{users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
               { user.role ==="admin"? "Admin":  <button
                    onClick={() => handelMakeAdmin(user)}
                    className="btn bg-orange-500 btn-lg"
                  >
                    <FaUsers className="text-white text-2xl"></FaUsers>
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handelDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-600"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
