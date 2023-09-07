import { Link, useNavigate } from "react-router-dom"
import { deleteDog } from "../apiManager"


export const Dog = ({dog, currentUser, getAllDogs }) => {

    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        await deleteDog(dog.id)
        getAllDogs()
    };
 
    return <section className="dog">

    <h3 onClick={() => navigate(`/dogs/${dog.id}`)}>{dog.id}. {dog.name}</h3>
    <form onSubmit={handleSubmit}>
     <button type="submit" className="btn btn-primary">
            Remove</button>
            </form>
 </section>
}