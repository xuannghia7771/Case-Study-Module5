// import React, {useEffect, useState} from 'react';
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from 'yup';
// import * as customerService from '../../services/CustomerService';
// import {toast} from "react-toastify";
// import {useNavigate} from "react-router";
// import "./customer-create.css";
//
//
// function CustomerCreate() {
//     const [customerType, setCustomerType] = useState([]);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         getAllCustomerType();
//     }, []);
//     const getAllCustomerType = async () => {
//         const data = await customerService.getAllCustomerType();
//         console.log(data)
//         setCustomerType(data);
//     }
//     const createCustomer = async (values) => {
//
//         const newCustomer = {
//             ...values,
//             customerType: JSON.parse(values.customerType)
//         };
//         const res = await customerService.createNewCustomer(newCustomer);
//         if (res.status === 201) {
//             toast("Create successfully!");
//             navigate("/customers")
//         } else {
//             toast.error("Create failed!");
//         }
//     }
//     return (
//         <div>
//             <Formik initialValues={{
//                 fullName: "",
//                 birthday: "",
//                 gender: 0,
//                 idCard: "",
//                 phoneNumber: "",
//                 email: "",
//                 customerType: JSON.stringify({
//                     id: 1,
//                     name: "Diamond"
//                 }),
//                 address: ""
//             }} onSubmit={(values) => {
//                 createCustomer(values)
//             }}
//                     validationSchema={Yup.object(
//                         {
//                             fullName: Yup.string()
//                                 .required("Required")
//                                 .matches(/^([A-Z][a-z]+ )+([A-Z][a-z]+)$/, "Name must be capitalized on first character"),
//                             phoneNumber: Yup.string()
//                                 .required("Required")
//                                 .matches(/^(090|091|\(84\)\+90|\(84\)\+91)[0-9]{7}$/, "Phone number is invalid!"),
//                             email: Yup.string()
//                                 .required("Required")
//                                 .matches(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invalid\nFor Example: myname@gmail.com"),
//                             idCard: Yup.string()
//                                 .required("Required")
//                                 .matches(/^(([0-9]{9})|([0-9]{12}))$/, "ID Card must be in 9 or 12 digits"),
//                             address: Yup.string().required("Required")
//                         }
//                     )}
//             >
//                 <div className="container-fluid" style={{minHeight: "500px"}} align="center">
//                     <div className="bg-light p-5" style={{maxWidth: "40%"}}>
//                         <h2 className="mb-4" style={{textAlign: "center"}}>NEW CUSTOMER</h2>
//                         <Form>
//                             <div className="form-group">
//                                 <label htmlFor="fullName" className="form-label">Full Name <span
//                                     style={{color: "red"}}>*</span> </label>
//                                 <div>
//                                     <Field type="text" id="fullName" name="fullName" className="form-control"
//                                            style={{width: "100%"}}/>
//                                     <small>
//                                         <ErrorMessage name="fullName" component="span"
//                                                       className="form-err"></ErrorMessage>
//                                     </small>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="birthday">Birthday <span style={{color: "red"}}>*</span> </label>
//                                 <div>
//                                     <Field type="date" id="birthday" name="birthday" className="form-control"
//                                            style={{width: "100%"}}/>
//                                 </div>
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="birthday">Gender <span style={{color: "red"}}></span> </label><br/>
//                                 <div className="form-check form-check-inline">
//                                     <Field className="form-control form-check-input" type="radio" name="gender"
//                                            id="inlineRadio1"
//                                            value="1" checked/>
//                                     <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
//                                 </div>
//                                 <div className="form-check form-check-inline">
//                                     <Field className="form-control form-check-input" type="radio" name="gender"
//                                            id="inlineRadio2"
//                                            value="0"/>
//                                     <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="idCard" className="form-label">ID Card <span
//                                     style={{color: "red"}}>*</span> </label>
//                                 <div>
//                                     <Field type="text" id="idCard" name="idCard" className="form-control" style={{ width: "100%" }}/>
//                                     <small style={{color: "red"}}>
//                                         <ErrorMessage name="idCard" component="span"
//                                                       className="form-err"></ErrorMessage>
//                                     </small>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="phoneNumber" className="form-label">Phone Number <span
//                                     style={{color: "red"}}>*</span></label>
//                                 <div>
//                                     <Field type="text" id="phoneNumber" name="phoneNumber" className="form-control" style={{ width: "100%" }}/>
//                                     <small style={{color: "red"}}>
//                                         <ErrorMessage name="phoneNumber" component="span"
//                                                       className="form-err"></ErrorMessage>
//                                     </small>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email" className="form-label">Email <span
//                                     style={{color: "red"}}>*</span> </label>
//                                 <div>
//                                     <Field type="text" id="email" name="email" className="form-control" style={{ width: "100%" }}/>
//                                     <small style={{color: "red"}}>
//                                         <ErrorMessage name="email" component="span" className="form-err"></ErrorMessage>
//                                     </small>
//                                 </div>
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="customerType" className="form-label">Type <span
//                                     style={{color: "red"}}>*</span> </label>
//                                 <div>
//                                     <Field as="select" name="customerType" className="form-control" style={{ width: "100%" }}>
//                                         {
//                                             customerType.map((e) => (
//                                                 <option key={e.id} value={JSON.stringify(e)}>{e.name}</option>
//                                             ))
//                                         }
//                                     </Field>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="address" className="form-label">Address <span
//                                     style={{color: "red"}}>*</span> </label>
//                                 <div>
//                                     <Field type="text" id="address" name="address" className="form-control" style={{ width: "100%" }}/>
//                                     <small style={{color: "red"}}>
//                                         <ErrorMessage name="address" component="span"
//                                                       className="form-err"></ErrorMessage>
//                                     </small>
//                                 </div>
//                             </div>
//                             <button type="submit" className="btn btn-primary">Save</button>
//                             &emsp;
//                             <button type="button" className="btn btn-primary"
//                                     onClick={() => navigate("/customers")}>Back to list
//                             </button>
//                         </Form>
//                     </div>
//                 </div>
//             </Formik>
//         </div>
//     );
// }
//
// export default CustomerCreate;