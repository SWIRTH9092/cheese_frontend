//----------------------
//  Show Page
//----------------------

//----------------------
// Import dependencies
//----------------------
import {useLoaderData} from "react-router-dom"

function Show (props) {

    const cheese = useLoaderData()

    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <h2>Country of Origin: {cheese.countryOfOrigin}</h2>
            <img src={cheese.image} alt={cheese.name} className="show-img-sz" />
        </div>
    )
}

//----------------------
//  Export Index Page
//----------------------
export default Show;