import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { editUser } from "../redux/userAction";
import { useDispatch } from "react-redux";
const EditUserModal = ({ show, handleClose, user, fetchUser }) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string().required("Contact number is required"),
    address: Yup.string().required("Address is required"),
  });
  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    address: user?.address || "",
    contact: user?.contact || "",
  };
  const onSubmit = async (values) => {
    try {
    //  await axios.put(`http://localhost:8081/api/users/${user.id}`, values);
    dispatch(editUser({...user,...values}))
      fetchUser();
      // Refresh the list of users
      handleClose();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {" "}
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>{" "}
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    !!formik.errors.firstName && formik.touched.firstName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {formik.errors.firstName}
                </Form.Control.Feedback>{" "}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    !!formik.errors.lastName && formik.touched.lastName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {formik.errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {formik.errors.email}
                </Form.Control.Feedback>{" "}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>{" "}
                <Form.Control
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.address && formik.touched.address}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {formik.errors.address}{" "}
                </Form.Control.Feedback>
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>Contact</Form.Label>{" "}
                <Form.Control
                  type="text"
                  name="contact"
                  onChange={formik.handleChange}
                  value={formik.values.contact}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.contact && formik.touched.contact}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {formik.errors.contact}{" "}
                </Form.Control.Feedback>
              </Form.Group>{" "}
              <Button variant="primary" type="submit">
                {" "}
                Save Changes{" "}
              </Button>{" "}
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};
export default EditUserModal;
