//----------------------
//  Index Page
//----------------------

//----------------------
//  import dependencies
//----------------------
import { Link, useLoaderData } from "react-router-dom" 

function Index (props) {
    //define list of cheeses from loader data
    const cheeses = useLoaderData();

    return cheeses.map(cheese => (
        <div key={cheese._id} className="cheese">
            <Link to={`/${cheese.id}`}>
                <h1>{cheese.name}</h1>
            </Link>
            <h3>Country of Origin: {cheese.countryOfOrigin}</h3>
            <img src={cheese.image} alt={cheese.name} className="index-img-sz"/>
        </div>
    ))
}

//----------------------
//  Export Index Page
//----------------------
export default Index;