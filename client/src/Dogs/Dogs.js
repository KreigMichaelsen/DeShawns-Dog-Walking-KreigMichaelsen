import { useEffect, useState } from "react"

import { Link, useNavigate } from "react-router-dom"
import { Dog } from "./Dog"
import { getDogs } from "../apiManager"


export const Dogs = ({  }) => {
    const [dogs, setDogs] = useState([])
    const [filteredDogs, setFilteredDogs] = useState([])

    const navigate = useNavigate()


    const localDogUser = localStorage.getItem("dog_user")
    const dogUserObject = JSON.parse(localDogUser)

    async function fetchData() {
        
    }


    useEffect(
        () => {
           getDogs()
           .then(setDogs)
        },
        [] 
    ) 

    useEffect(
        () => {
            setFilteredDogs(dogs)
        },
        [dogs] 
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
        
   

        <article className="dogs" >
            {
                filteredDogs.map(
                    (filteredDog) => <Dog key={`dog--${filteredDog.id}`} 
                     currentUser={dogUserObject}
                      dog={filteredDog} 
                     
              
                      />
                    
                )
            }

        </article>
    </>
}
