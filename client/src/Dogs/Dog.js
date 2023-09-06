import { Link, useNavigate } from "react-router-dom"


export const Dog = ({dog, currentUser, getAllCoffeeShops,  }) => {

    const navigate = useNavigate()



    return <section className="dog">

    <h3 onClick={() => navigate(`/dogs/${dog.id}`)}>{dog.id}. {dog.name}</h3>
 </section>
}