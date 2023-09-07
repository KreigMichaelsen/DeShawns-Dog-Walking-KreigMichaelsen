import { Outlet, Route, Routes } from "react-router-dom"

import { HomePage } from "./HomePage"
import { DogDetails } from "./Dogs/DogDetails"
import { Walkers } from "./Walkers/Walkers"

export const Application = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    
                    <Outlet />
                </>
            }>
            <Route path="/home" element={ <HomePage />  } /> 
            <Route path="dogs/:dogId" element={ <DogDetails/> } />
            <Route path="walkers" element={ <Walkers/> } />
            </Route>
        </Routes>
    )
}