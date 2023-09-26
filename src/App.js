import './App.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import FacilityList from "./components/facility/FacilityList";
import CustomerList from "./components/customer/CustomerList";
import {Route, Routes} from "react-router";
import CustomerCreate from "./components/customer/CustomerCreate";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css"
function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/services" element={<FacilityList/>}/>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/customers/add" element={<CustomerCreate/>}/>
            </Routes>
            <Footer/>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
