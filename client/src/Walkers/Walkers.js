import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Walker } from "./Walker"
import { getWalkers, getCities, getFilteredWalkers } from "../apiManager"


export const Walkers = ({  }) => {
    const [walkers, setWalkers] = useState([])
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [cities, setCities] = useState([]) 
    const [selectedCity, setSelectedCity] = useState("");

    const navigate = useNavigate()


    const localDogUser = localStorage.getItem("dog_user")
    const dogUserObject = JSON.parse(localDogUser)



    useEffect(
        () => {
           getWalkers()
           .then(setWalkers)
        },
        [] 
    ) 

    useEffect(
        () => {
            setFilteredWalkers(walkers)
        },
        [walkers] 
    )  

    useEffect(
        () => {
           getCities()
           .then(setCities)
        },
        [] 
    ) 


    const handleSelectedCity = (id) => {
       
        // console.log(id)
        setSelectedCity(id);
        // console.log(selectedCity)
        const foundCity = cities.find(city => city.id === parseInt(id))
        console.log(foundCity)

        if (!foundCity) {
            getWalkers()
            .then((data) => {
                setWalkers(data);
            })
    
        } else {
            getFilteredWalkers(foundCity.id)
            .then((data) => {
                setFilteredWalkers(data);
            })
        }
      };

      const getAllWalkers = () => {
        getWalkers()
           .then(setWalkers)
    }

    return <>

        <div>
        <label className="cities">Choose a City:</label>
        <select value={selectedCity} 
                onChange={(event) => {
                console.log(event.target.value)
                handleSelectedCity(event.target.value);
            }}>
        <option value="">Please Select A City</option>
          {cities.map((city) => {
            return (
                <option key={`city--${city.id}`} value={city.id} >{city.name}</option>
            )
          }
          )}
        </select>
        </div> 
        
        
         
        <article className="walkers" >
            <h2>Walkers</h2>
            {
            filteredWalkers.map(filteredWalker => (
                filteredWalker && <Walker 
                key={`walker--${filteredWalker.id}`} 
                currentUser={dogUserObject}
                walker={filteredWalker} 
                getAllWalkers={getAllWalkers}
        />
            ))
}

        </article>
    </>
}
