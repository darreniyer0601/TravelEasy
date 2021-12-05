import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const authenticated = false;

    const handleLogout = () => {
        console.log("logout");
    }

	const authLinks = (
		<>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/login">
					Login
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/signup">
					Register
				</NavLink>
			</li>
		</>
	);

	const logoutButton = (
		<li className="float-right">
			<button className="btn btn-ligt" onClick={handleLogout}>
				Logout
			</button>
		</li>
	);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand m-2" href="/">
				TravelEasy
			</a>
            <ul className="navbar-nav">
                <NavLink to=''>

                </NavLink>
            </ul>
			<ul className="navbar-nav position-absolute end-0 m-2">
				{authenticated ? logoutButton : authLinks}
			</ul>
		</nav>
	);
};

export default Navbar;
