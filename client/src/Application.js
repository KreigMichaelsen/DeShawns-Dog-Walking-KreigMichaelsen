import { Outlet, Route, Routes } from "react-router-dom"

import { HomePage } from "./HomePage"

export const Application = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <HomePage />
                    <Outlet />
                </>
            }>
                
                
            </Route>
        </Routes>
    )
}