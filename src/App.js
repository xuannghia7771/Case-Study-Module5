import './App.css';

import FacilityList from "./components/facility/FacilityList";
import CustomerList from "./components/customer/CustomerList";
import {Route, Routes} from "react-router";
import CustomerCreate from "./components/customer/CustomerCreate";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css"
import CustomerEdit from "./components/customer/CustomerEdit";
import Navbar from "./components/inc/Navbar";
function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                {/*<Route path="/services" element={<FacilityList/>}/>*/}
                <Route path="/customers" element={<CustomerList/>}/>
                {/*<Route path="/customers/add" element={<CustomerCreate/>}/>*/}
                {/*<Route path="/customers/edit/:id" element={<CustomerEdit/>}/>*/}
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
