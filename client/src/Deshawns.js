import { Navbar, NavbarBrand, Nav, NavItem, NavLink,} from "reactstrap";
import { Dogs } from "./Dogs/Dogs"
import { Application } from "./Application"


import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { Outlet, Route, Routes } from "react-router-dom";


export const Deshawns = () => {
	return <Routes>

		<Route path="*" element={
				<>
					
						
          <Navbar color="light" expand="md">
          <Nav navbar>
            <NavbarBrand href="/">🐕‍🦺 🐩 DeShawn's Dog Walking</NavbarBrand>
            <NavItem>
              <NavLink href="/walkers">Walkers</NavLink>
              <NavLink href="/cities">Cities</NavLink>
            </NavItem>
          </Nav>
          </Navbar>
				  <Application />
						
					
				</>

		} />
	</Routes>
}

 