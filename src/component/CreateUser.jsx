import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify'
import { addUser } from '../redux/userAction'
import { useDispatch } from 'react-redux'
import {v4 as uuidv4} from 'uuid'
const CreateUser = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        contact: ''
    })

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        contact: ''
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        contact: Yup.string().required("Contact number is required"),
        address: Yup.string().required("Address is required"),
    })

    const handleChange = (event, formik) => {
        formik.handleChange(event);
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const dispatch = useDispatch()
    const onSubmit = async (values, { resetForm }) => {
        try {
            const newUser = { ...values, id: uuidv4() }
            dispatch(addUser(newUser))
        } catch (error) {
            toast.warning("User creation failed !")
        }
    }

    return (
        <div className='container'>
            <h3>Please enter user details</h3>
            <div className='row justify-content-center'>

                <div className="col-md-2 mt-3">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {(formik) => (
                            <form className='d-flex flex-column mb-3 text-center' onSubmit={formik.handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor='firstName' className='visually-hidden'></label>
                                    <input type='text' className='form-control' name='firstName' placeholder='First name'
                                        onChange={(e) => handleChange(e, formik)}
                                        value={formik.values.firstName}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className='error'>{formik.errors.firstName}</div>
                                    ) : null}

                                </div>

                                <div class="mb-3">
                                    <label htmlFor='lastName' className='visually-hidden'></label>
                                    <input type='text' className='form-control' name='lastName' placeholder='Last name'
                                        onChange={(e) => handleChange(e, formik)}
                                        value={formik.values.lastName}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className='error'>{formik.errors.lastName}</div>
                                    ) : null}
                                </div>



                                <div class="mb-3">
                                    <label htmlFor='email' className='visually-hidden'></label>
                                    <input type='text' className='form-control' name='email' placeholder='Email'
                                        onChange={(e) => handleChange(e, formik)}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className='error'>{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div class="mb-3">
                                    <label htmlFor='address' className='visually-hidden'></label>
                                    <input type='text' className='form-control' name='address' placeholder='Address'
                                        onChange={(e) => handleChange(e, formik)}
                                        value={formik.values.address}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.address && formik.errors.address ? (
                                        <div className='error'>{formik.errors.address}</div>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='firstName' className='visually-hidden'></label>
                                    <input type='text' className='form-control' name='contact' placeholder='Contact number'

                                        onChange={(e) => handleChange(e, formik)}
                                        value={formik.values.contact}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.contact && formik.errors.contact ? (
                                        <div className='error'>{formik.errors.contact}</div>
                                    ) : null}
                                </div>

                                <div className='mb-3 text-center'>
                                    <button type='submit' className='btn btn-primary me-2'>
                                        Create user
                                    </button>
                                    <button className='btn btn-secondary'
                                    onClick={()=>{
                                        formik.resetForm();
                                        setState(initialValues)
                                    }}
                                    
                                    >

                                        Clear form
                                    </button>

                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>


        </div>
    )
}

export default CreateUser
