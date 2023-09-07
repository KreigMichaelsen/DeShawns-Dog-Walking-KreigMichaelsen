import { Outlet, Route, Routes } from "react-router-dom"

import { HomePage } from "./HomePage"
import { DogDetails } from "./Dogs/DogDetails"
import { Walkers } from "./Walkers/Walkers"
import { Cities } from "./Cities/Cities"
import { CityCreationForm } from "./Cities/CityCreationForm"
import { DogCreationForm } from "./Dogs/DogCreationForm"


export const Application = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    
                    <Outlet />
                </>
            }>
            <Route path="home" element={ <HomePage />  } /> 
            <Route path="dogs/:dogId" element={ <DogDetails/> } />
            <Route path="dogs/create" element={ <DogCreationForm/> } />
            <Route path="walkers" element={ <Walkers/> } />
            <Route path="cities" element={ <Cities/> } />
            <Route path="cities/create" element={ <CityCreationForm/> } />
            </Route>
        </Routes>
    )
}