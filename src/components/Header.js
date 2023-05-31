import { Link } from "react-router-dom"

const Header = ({ user }) => {
    return (
        <div className="header">
            <Link className="navText" to='/breweries'>Breweries</Link>
            <Link className="navText" to='/favorites'>Favorites</Link>
            <Link className="navText" to='/'>Home</Link>
            <Link className="navText" to='/auth/register'>Signup</Link>
            <Link className="navText" to='/auth/login'>Login</Link>                   
        </div>
    )
}

export default Header