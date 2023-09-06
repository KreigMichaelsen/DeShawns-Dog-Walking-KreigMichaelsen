import { useEffect, useState } from "react";
import { Dogs } from "./Dogs/Dogs";



export const HomePage = () => {

    const localCoffeeUser = localStorage.getItem("coffee_user")
    const coffeeUserObject = JSON.parse(localCoffeeUser)

        return <>

          <div className="homePageContainer">
            <header className="homePageHeader">
            <h1 className="homePageWelcome">Dogs!</h1>
            </header>
            <Dogs  /> 
          </div>
        

        </>
    
}