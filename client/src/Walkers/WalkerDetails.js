import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getWalker } from "../apiManager"


export const WalkerDetails = () => {
    const {walkerId} = useParams()
    const [walker, setWalker] = useState({})
    

    const navigate = useNavigate()

    const localDogUser = localStorage.getItem("dog_user")
    const dogUserObject = JSON.parse(localDogUser)

    useEffect(
        () => {
            getWalker(walkerId)
            .then(setWalker)
        
        },
        []
    )


    return <section className="walkerDetailsContainer">
    
    <h1 className="walkerDetailsHeader">{walker.name}</h1>
    <h3>Current Dogs </h3>
    <ul>
        {walker?.dogs?.map(dog => (
          <li key={dog.id}>{dog.name}</li>
        ))}
    </ul>
    <h3>Current Cities</h3>
    <ul>
        {walker?.cities?.map(city => (
          <li key={city.id}>{city.name}</li>
        ))}
    </ul>

    
    </section>
}