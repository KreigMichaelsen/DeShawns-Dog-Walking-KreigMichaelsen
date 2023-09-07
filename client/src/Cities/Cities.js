import { useEffect, useState } from "react"

import { Link, useNavigate } from "react-router-dom"
import { City } from "./City"
import { getCities } from "../apiManager"


export const Cities = ({  }) => {
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState([])

    const navigate = useNavigate()


    const localDogUser = localStorage.getItem("dog_user")
    const dogUserObject = JSON.parse(localDogUser)



    useEffect(
        () => {
           getCities()
           .then(setCities)
        },
        [] 
    ) 

    useEffect(
        () => {
            setFilteredCities(cities)
        },
        [cities] 
    ) 


    // useEffect(
    //     ()=> {
    //         const searchedShops = coffeeShops.filter(coffeeShop => {
    //             return coffeeShop.name.toLowerCase().startsWith(searchTermState.toLowerCase())
    //         })
    //         setFilteredCoffeeShops(searchedShops)
    //     },
    //     [searchTermState]
    // )




    return <>
        {/* {
            <>
            <button className="createCoffeeShopButton" onClick={() => navigate("/coffeeShops/create")}>Create Coffee Shop</button>
            </>
        } */}
        
   

        <article className="cities" >
            <h2>Cities</h2>
            <button onClick={() => navigate("/cities/create")}>Add City</button>
            {
                filteredCities.map(
                    (filteredCity) => <City key={`city--${filteredCity.id}`} 
                     currentUser={dogUserObject}
                      city={filteredCity} 
                     
              
                      />
                    
                )
            }

        </article>
    </>
}
