import { Link, useNavigate } from "react-router-dom"

import { useState, useEffect } from "react";


export const Navbar = () => {
   
    const navigate = useNavigate()

    const localCoffeeUser = localStorage.getItem("coffee_user")
    const coffeeUserObject = JSON.parse(localCoffeeUser)

    return (
        <Navbar color="light" expand="md">
          <Nav navbar>
            <NavbarBrand href="/">🐕‍🦺 🐩 DeShawn's Dog Walking</NavbarBrand>
            <NavItem>
              <NavLink href="/walkers">Walkers</NavLink>
              <NavLink href="/cities">Cities</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        
    )
}