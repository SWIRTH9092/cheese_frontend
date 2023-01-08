//---------------------------------------
//   import dependencies
//---------------------------------------
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
}  from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { cheesesLoader } from "./loaders"

//---------------------------------------
//   Router Paths
//---------------------------------------
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route path="" element={<Index />} loader={cheesesLoader} />
                <Route path=":id" element={<Show />} />
                <Route path="create" />
                <Route path="update/:id" />
                <Route path="delete/:id" />
            </Route>)
)

//---------------------------------------
//   Export Router Definition
//---------------------------------------
export default router;

