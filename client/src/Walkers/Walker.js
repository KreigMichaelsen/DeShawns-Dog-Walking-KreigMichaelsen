import { Link, useNavigate } from "react-router-dom"


export const Walker = ({walker, currentUser, }) => {

    const navigate = useNavigate()



    return <section className="walker">

    <h3 onClick={() => navigate(`/walkers/${walker.id}`)}>{walker.id}. {walker.name} </h3>
 </section>
}