import {useEffect, useState} from "react";
import * as facilityService from "../../services/FacilityService"
import Header from "../layouts/Header";

export default function FacilityList() {
    const [facilities, setFacilities] = useState([]);

    const getAllFacility = async () => {
        setFacilities(await facilityService.getAll());
    }

    useEffect(() => {
        getAllFacility();
    }, []);

    return (
        <>
            {/*==============================Content=================================*/}
            <div className="content">
                <div className="ic">
                    More Website Templates @ TemplateMonster.com - February 10, 2014!
                </div>
                <div className="container_12">
                    <div className="banners">
                        {
                            facilities.map((e)=>(
                                <div className="grid_4">
                                    <div className="banner">
                                        <img src={e.image} alt=""/>
                                        <div className="label">
                                            <div className="title">{e.title}</div>
                                            <div className="price">
                                                from<span>$ 1.200</span>
                                            </div>
                                            <a href="#">Edit</a>
                                            &emsp;
                                            <a href="#">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}