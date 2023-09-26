import axios from "axios";
import data from "bootstrap/js/src/dom/data";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/customers");
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu")
    }
};
export const getAllCustomerType = async () => {
    try {
        const res = await axios.get("http://localhost:8080/customerType");
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu")
    }
};

export const createNewCustomer = async (data) => {
    try{
        const res = await axios.post("http://localhost:8080/customers", data)
        return res
    }catch (e){
        alert("Access Denied!")
    }
}
