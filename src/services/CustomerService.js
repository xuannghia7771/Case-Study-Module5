import axios from "axios";


export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/customer");
        return res.data;
    } catch (e) {
        alert("No Data!")
    }
};
// export const getAllCustomerType = async () => {
//     try {
//         const res = await axios.get("http://localhost:8080/customerType");
//         return res.data;
//     } catch (e) {
//         alert("Không có dữ liệu")
//     }
// };
//
// export const createNewCustomer = async (data) => {
//     try{
//         const res = await axios.post("http://localhost:8080/customers", data)
//         return res
//     }catch (e){
//         alert("Access Denied!")
//     }
// }
//
//
//
// export const findCustomerById = async (id) => {
//     try {
//         const res = await axios.get(`http://localhost:8080/customers/${id}`);
//         console.log(res.data);
//         return res.data
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
//
// export const editCustomer = async (data) => {
//     try {
//         const res = await axios.put(`http://localhost:8080/customers/${data.id}`,data);
//         return res
//     } catch (e) {
//         alert("Access Denied!")
//     }
// }
//
export const removeCustomer = async (id) => {
    try {
        const res = await axios.delete("http://localhost:8080/api/customer/"+id);
        return res
    } catch (e) {
        alert("Access Denied!")
    }
}
//
// export const getAllByName = async (data) => {
//     try {
//         const res = await axios.get("http://localhost:8080/customers?fullName_like="+data);
//         return res.data;
//     } catch (e) {
//         alert("Không có dữ liệu")
//     }
// }