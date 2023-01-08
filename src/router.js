//---------------------------------------
//   import dependencies
//---------------------------------------
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
}  from "react-router-dom"
import App from "./App"

//---------------------------------------
//   Router Paths
//---------------------------------------
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
            
            </Route>)
)

//---------------------------------------
//   Export Router Definition
//---------------------------------------
export default router;

