import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDog } from "../apiManager"


export const DogDetails = () => {
    const {dogId} = useParams()
    const [dog, setDog] = useState({})
    

    const navigate = useNavigate()

    const localDogUser = localStorage.getItem("dog_user")
    const dogUserObject = JSON.parse(localDogUser)

    useEffect(
        () => {
            getDog(dogId)
            .then(setDog)
        
        },
        []
    )


    return <section className="dogDetailsContainer">
    
    <h1 className="dogShopDetailsHeader">{dog.name}</h1>
    <h3>Current Walker </h3>
    <ul>
        {dog?.walker?.name}
    </ul>
    <h3>Current City</h3>
    <ul>
        {dog?.city?.name}
    </ul>

    
    </section>
}