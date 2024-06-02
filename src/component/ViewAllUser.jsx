import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, editUser } from "../redux/userAction";
import EditUserModal from "./EditUserModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const ViewAllUser = () => {
  const users = useSelector((state) => state.users); 
 // const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
     //   const response = await axios.get("http://localhost:8081/api/users");
      //setUsers(response.data);
//      setUsers(user)
      toast.success("User fecthed Successfully!", { autoClose: 2000 });
    } catch (error) {
      toast.success("Api failed !", { autoClose: 2000 });
      console.log("Error while fecting users", error);
    }
  };
  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  const handleSaveEdit = (user) => {
    dispatch(editUser(user));
    setShowModal(false);
  };
  const handleClose = useCallback(() => {
    setShowModal(false);
    setSelectedUser(null);
  });
  const handleDelete = async (userId) => {
    try {
      //  await axios.delete(`http://localhost:8081/api/users/${userId}`);
      fetchUsers();
      dispatch(deleteUser(userId));
      toast.error("User delete successfully !", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
    console.log("check-1", userId);
  };
  return (
    <div className="container">
      {" "}
      <h3>All Users</h3> <ToastContainer />{" "}
      <table className="table">
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>First Name</th> <th>Last Name</th> <th>Email</th>{" "}
            <th>Address</th> <th>Contact</th> <th>Actions</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {users.map((user) => (
            <tr key={user.id}>
              {" "}
              <td>{user.firstName}</td> <td>{user.lastName}</td>{" "}
              <td>{user.email}</td> <td>{user.address}</td>{" "}
              <td>{user.contact}</td>{" "}
              <td>
                {" "}
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleEdit(user)}
                >
                  {" "}
                  Edit{" "}
                </button>{" "}
                <button onClick={() => handleDelete(user.id)}>
                  Delete
                </button>{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>{" "}
      {selectedUser && (
        <EditUserModal
          show={showModal}
          handleClose={handleClose}
          user={selectedUser}
          handleEdit={handleSaveEdit}
          fetchUser={fetchUsers}
        />
      )}{" "}
    </div>
  );
};
export default ViewAllUser;
