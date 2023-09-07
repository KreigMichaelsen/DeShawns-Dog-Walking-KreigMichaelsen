import { Link, useNavigate } from "react-router-dom"


export const City = ({city, currentUser, getAllCoffeeShops,  }) => {

    const navigate = useNavigate()



    return <section className="city">

    <h3 onClick={() => navigate(`/cities/${city.id}`)}>{city.id}. {city.name}</h3>
 </section>
}