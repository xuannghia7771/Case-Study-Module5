import axios from "axios";

export const getAllContract = async () => {
    try {
        const res = await axios.get("http://localhost:8080/contracts")
        return res.data;
    } catch (e){
        alert("No Data!")
    }
}