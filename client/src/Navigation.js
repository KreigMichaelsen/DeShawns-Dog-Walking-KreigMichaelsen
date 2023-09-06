import { Link, useNavigate } from "react-router-dom"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink,} from "reactstrap";

import { useState, useEffect } from "react";


export const Navigation = () => {
   
    const navigate = useNavigate()

    const localCoffeeUser = localStorage.getItem("coffee_user")
    const coffeeUserObject = JSON.parse(localCoffeeUser)

    return (
        <Navbar color="light" expand="md">
          <Nav navbar>
            <NavItem>
              <NavLink href="/home">🐕‍🦺 🐩 DeShawn's Dog Walking</NavLink>
              <NavLink href="/walkers">Walkers</NavLink>
              <NavLink href="/cities">Cities</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        
    )
}