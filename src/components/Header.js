//----------------------
//  Header Component
//----------------------


//----------------------
//  import Dependencies
//----------------------
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Cheese App</div>
            </Link>
        </nav>
    )
}

//----------------------
//  Export Header Component
//----------------------
export default Header;