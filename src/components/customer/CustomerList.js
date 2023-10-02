import * as customerService from "../../services/CustomerService"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {ModalDelete} from "./ModalDelete";
import {BiSolidEdit} from "react-icons/bi";
import {MdDeleteForever} from "react-icons/md";

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();
    // xoa modal
    const [modalStatus, setModalStatus] = useState(false);
    const [selectCustomer, setSelectCustomer] = useState(null);
    // const [name, setName] = useState("")


    useEffect(() => {
        getAllCustomer();
        //searchName();
    }, [
        // name
    ]);

    // const searchName = async () => {
    //     setCustomers(await customerService.getAllByName(name));
    // }

    const getAllCustomer = async () => {
        setCustomers(await customerService.getAll());
    }

    //xoa modal
    const handleModal = (e) => {
        setSelectCustomer(e)
        setModalStatus(true);
    }
    const closeModal = () => {
        setSelectCustomer(null);
        setModalStatus(false);
    }

    return (
        <>
            <h1>CUSTOMER LIST</h1>
            {/*<button*/}
            {/*    onClick={() => navigate('/customers/add')}*/}
            {/*    className="btn btn-primary mb-4"*/}
            {/*>Create New Customer*/}
            {/*</button>*/}
            {/*<div className="text-end"><input type="text" onChange={(e) => setName(e.target.value)}/></div>*/}

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
                            <td>{e.customerType.typeName}</td>
                            <td>{e.address}</td>
                            <td>
                                <Link to={`/customers/edit/${e.id}`}>
                                    <BiSolidEdit size='32px' color="green"/>
                                </Link>
                                &nbsp;
                                <MdDeleteForever
                                    size='32px' color="red"
                                    onClick={() => handleModal(e)}/>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <ModalDelete show={modalStatus}
                         handleClose={closeModal}
                         selectCustomer={selectCustomer}/>
        </>
    )
}