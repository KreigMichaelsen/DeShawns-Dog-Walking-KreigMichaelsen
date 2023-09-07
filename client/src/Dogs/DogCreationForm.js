import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { postDog } from "../apiManager"


export const DogCreationForm = () => {

    const [dog, addDog] = useState("")

    const navigate = useNavigate()
    

    const handleNameInput = (event) => {
        addDog(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const dogToPost = {
            name: dog
        };

        postDog(dogToPost)
            .then(() => {
                navigate("/home");
            });
    };

    return <>
      <div className="dogCreationFormContainer">
        <form className="dogCreationForm" onSubmit={handleSubmit}>
            <h2 className="dogFormTitle">New Dog</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name..."
                        value={dog}
                        onChange={handleNameInput} />
                </div>
            </fieldset>   
            <button type="submit" className="btn btn-primary">
            Add Dog
            </button>
        </form>
        </div>
    </>
}