//----------------------
//  Index Page
//----------------------

//----------------------
//  import dependencies
//----------------------
import { Form, Link, useLoaderData } from "react-router-dom" 

function Index (props) {
    //define list of cheeses from loader data
    const cheeses = useLoaderData();

    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="cheese name" />
                <input type="input" name="countryOfOrigin" placeholder="country of origin" />
                <input type="input" name="image" placeholder="picture of cheese" />
                <input type="submit" value="create cheese" />
            </Form>

            <h2>Cheeses</h2>
                {cheeses.map(cheese => (
                <div key={cheese._id} className="cheese">
                    <Link to={`/${cheese.id}`}>
                        <h1>{cheese.name}</h1>
                    </Link>
                    <h3>Country of Origin: {cheese.countryOfOrigin}</h3>
                    <img src={cheese.image} alt={cheese.name} className="index-img-sz"/>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                ))}
        </div>
    )
}

//----------------------
//  Export Index Page
//----------------------
export default Index;