import * as customerService from "../../services/CustomerService"
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getAllCustomer();
    }, []);

    const getAllCustomer = async () => {
        setCustomers(await customerService.getAll());
        console.log(customers)
    }

    return (
        <>
            <h1>CUSTOMER LIST</h1>
            <button
                onClick={() => navigate('/customers/add')}
                className="btn btn-primary mb-4"
            >Create New Customer
            </button>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>ID Card</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map((e, index) => (
                        <tr key={e.id}>
                            <td>{index + 1}</td>
                            <td>{e.fullName}</td>
                            <td>{e.birthday}</td>
                            <td>{e.gender === 1 ? 'Male' : 'Female'}</td>
                            <td>{e.idCard}</td>
                            <td>{e.phoneNumber}</td>
                            <td>{e.email}</td>
                            <td>{e.customerType.name}</td>
                            <td>{e.address}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={()=>navigate(`/customers/edit/${e.id}`)}
                                >Edit</button>
                                &nbsp;
                                <button
                                    className="btn btn-danger"
                                    onClick={()=>navigate(`/customers/edit/${e.id}`)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}