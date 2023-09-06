import { Link, useNavigate } from "react-router-dom"


export const Dog = ({dog, currentUser, getAllCoffeeShops,  }) => {

    const navigate = useNavigate()


    // const deleteButton = () => {
    //     if (currentUser.admin) {
    //         return <button onClick={() => {
    //             fetch(`https://localhost:5001/dogs/${dogObject.id}`, { 
    //                 method: "DELETE"
    //             })
    //             .then(() => {
    //                     getAllCoffeeShops()
    //             })
    //         }} className="ticket_delete">Delete</button>
    //     }
    //     else {
    //         return ""
    //     }
    // }

    // const AddButton = () => {
        
    //         return <button
    //         onClick={() => {
    //             fetch(`http://localhost:8088/userCoffeeShops?_expand=coffeeShop&userId=${currentUser.id}`, {
    //                 method:"POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     userId: currentUser.id,
    //                     coffeeShopId:coffeeShopObject.id,
    //                     hasVisited: false,
    //                     rating: 0
    //                 })
    //             })
    //                 .then(response => response.json())
    //                 .then(() => {
    //                         getAllCoffeeShops()})
                            
    //                 }
    //         }
    //         ><i className="fa-solid fa-plus "></i></button>
        
    //     }
    

    return <section className="dog">

    <h3>{dog.name}</h3>
 </section>
}