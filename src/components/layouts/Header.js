import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            {/*==============================header=================================*/}
            <header>
                <div className="container_12">
                    <div className="grid_12">
                        <div className="menu_block">
                            <nav className="horizontal-nav full-width horizontalNav-notprocessed">
                                <ul className="sf-menu">
                                    <li>
                                        <NavLink to="/services">SERVICES</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/customers">CUSTOMERS</NavLink>
                                    </li>
                                    <li>
                                        <a href="#">CONTRACTS</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="clear"/>
                        </div>
                    </div>
                    <div className="grid_12">
                        <h1 style={{fontSize: `100px`, color: "white"}}>
                            Furama resort
                        </h1>
                    </div>
                </div>
            </header>
        </>

    )
}