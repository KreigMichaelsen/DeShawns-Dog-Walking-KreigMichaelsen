import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDogs, getWalker, getCities, editWalker } from "../apiManager"
import { Dog } from "../Dogs/Dog"


export const WalkerCityEdit = () => {

    const [walker, setWalker] = useState({
    })
    const [walkerData, addWalkerData] = useState({})
    // const [dogs, setDogs] = useState([])
    // const [selectedDogs, setSelectedDogs] = useState({});
    const [updatedWalkerName, setUpdatedWalkerName] = useState("");
    const [selectedCities, setSelectedCities] = useState([]);
    const [cities, setCities] = useState([])
    


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
            getCities()
                .then(setCities)
        },
        []
    )




    const handleSubmit = async (event)  => {
        event.preventDefault(); // Prevent default form submission behavior

        const updatedWalker = {
            id: parseInt(walkerId), 
            cities: selectedCities
        };

            console.log(updatedWalker)
            await editWalker(walkerId, updatedWalker)
            .then(() => {
                navigate("/walkers");
            });
    };


    return <> 
        <div className="walkerEditContainer">
            <form className="walkerEditForm" onSubmit={handleSubmit}>
                <h1 className="ticketForm__title">Edit {walker.name}'s Cities</h1>
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
                    <h1>Available Cities</h1>
                    {cities.map((city) => (
                        <div key={city.id}>
                            <input
                                type="checkbox"
                                value={city.id}
                                name="cityCheckboxes"
                                checked={selectedCities.includes(city)}
                                onChange={(event) => {
                                    const isChecked = event.target.checked;
                                    const cityId = city.id;
                                    setSelectedCities((prevSelectedCities) => {
                                        if (isChecked) {
                                          return [...prevSelectedCities, city];
                                        } else {
                                            return prevSelectedCities.filter(selectedCity => selectedCity.id !== city.id);
                                          }
                                         
                                      });
                                    }}
                                  />
                            <label>{city.name}</label>
                            
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