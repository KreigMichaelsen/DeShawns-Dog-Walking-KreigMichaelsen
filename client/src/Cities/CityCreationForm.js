import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { postCity } from "../apiManager"


export const CityCreationForm = () => {

    const [city, addCity] = useState("")

    const navigate = useNavigate()

    const handleNameInput = (event) => {
        addCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const cityToPost = {
            name: city
        };

        postCity(cityToPost)
            .then(() => {
                navigate("/cities");
            });
    };

    return <>
      <div className="cityCreationFormContainer">
        <form className="cityCreationForm" onSubmit={handleSubmit}>
            <h2 className="cityFormTitle">New City</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name..."
                        value={city}
                        onChange={handleNameInput} />
                </div>
            </fieldset>   
            <button type="submit" className="btn btn-primary">
            Add City
            </button>
        </form>
        </div>
    </>
}