import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDogs, getWalker, getCities, editWalker, addDogsToWalker } from "../apiManager"
import { Dog } from "../Dogs/Dog"


export const WalkerDogEdit = () => {

    const [walker, setWalker] = useState({})
    const [updatedWalkerName, setUpdatedWalkerName] = useState("");
    const [selectedDogs, setSelectedDogs] = useState([]);
    const [dogs, setDogs] = useState([])
    


    const { walkerId } = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            getWalker(walkerId)
                .then(setWalker)

        },
        []
    )

    // useEffect(
    //     () => {
    //         getDogs()
    //             .then(setDogs)
    //     },
    //     []
    // )
    useEffect(
        () => {
            getDogs()
                .then(setDogs)
        },
        []
    )




    const handleSubmit = async (event)  => {
        event.preventDefault(); // Prevent default form submission behavior

        const updatedWalker = {
            id: parseInt(walkerId), 
            dogs: selectedDogs
        };

            console.log(updatedWalker)
            await addDogsToWalker(walkerId, updatedWalker)
            .then(() => {
                navigate("/walkers");
            });
    };


    return <> 
        <div className="walkerEditContainer">
            <form className="walkerEditForm" onSubmit={handleSubmit}>
                <h1 className="ticketForm__title">Edit {walker.name}'s Dog</h1>
                {/* <div>

                    <h1>Available Dogs</h1>
                    {dogs.map((dog) => (
                        <div key={dog.id}>
                            <input
                                type="checkbox"
                                value={dog.id}
                                name={dog.name}
                                checked={selectedDogs[dog.id]}
                                onChange={(event) => {
                                    const copy = { ...selectedDogs };
                                    copy[dog.id] = event.target.checked;
                                    setSelectedDogs(copy);
                                }}
                            />
                            <label>{dog.name}</label>
                        </div>
                    ))}
                </div> */}
                <div>
                    <h1>Available Dogs</h1>
                    {dogs.map((dog) => (
                        <div key={dog.id}>
                            <input
                                type="checkbox"
                                value={dog.id}
                                name="dogCheckboxes"
                                checked={selectedDogs.includes(dog)}
                                onChange={(event) => {
                                    const isChecked = event.target.checked;
                                    const dogId = dog.id;
                                    setSelectedDogs((prevSelectedDogs) => {
                                        if (isChecked) {
                                          return [...prevSelectedDogs, dog];
                                        } else {
                                            return prevSelectedDogs.filter(selectedDog => selectedDog.id !== dog.id);
                                          }
                                         
                                      });
                                    }}
                                  />
                            <label>{dog.name}</label>
                            
                        </div>
                    ))}
                </div>

                <button type="submit" className="btn btn-primary">
            Save Edits
            </button>
            </form>
        </div>
    </>
}