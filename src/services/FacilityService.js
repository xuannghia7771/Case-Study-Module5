import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/facilities");
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu")
    }
};