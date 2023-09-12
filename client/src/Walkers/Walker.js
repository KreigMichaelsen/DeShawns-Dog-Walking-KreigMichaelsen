import { Link, useNavigate } from "react-router-dom"
import { deleteWalker } from "../apiManager";


export const Walker = ({walker, currentUser, getAllWalkers}) => {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        await deleteWalker(walker.id)
        getAllWalkers()
        navigate("/walkers")
    };

    return <section className="walker">

    <h3 onClick={() => navigate(`/walkers/${walker.id}`)}>{walker.id}. {walker.name}</h3>
    {/* <ul>
        {walker?.cities?.map(city => (
          <li key={city.id}>{city.name}</li>
        ))}
    </ul>  */}
    <form onSubmit={handleSubmit}>
     <button type="submit" className="btn btn-primary">
            Remove</button>
            </form>
     <button className="btn btn-primary" onClick={() => navigate(`/walkers/${walker.id}/editCities`)}>
            Edit Cities</button>
            <button className="btn btn-primary" onClick={() => navigate(`/walkers/${walker.id}/editDogs`)}>
            Add Dog</button>
 </section>
}