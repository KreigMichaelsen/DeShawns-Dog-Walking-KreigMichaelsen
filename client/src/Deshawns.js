import { Navbar, NavbarBrand, Nav, NavItem, NavLink,} from "reactstrap";
import { Dogs } from "./Dogs/Dogs"
import { Application } from "./Application"
import { Navigation } from "./Navigation"


import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { Outlet, Route, Routes } from "react-router-dom";


export const Deshawns = () => {
	return <Routes>

		<Route path="*" element={
				<>
					
						
          		<Navigation />
				<Application />
						
					
				</>

		} />
	</Routes>
}

 