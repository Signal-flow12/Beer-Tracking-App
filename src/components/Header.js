import { Link } from "react-router-dom"

const Header = ({ user }) => {
    return (
        <div className="header">
            <Link to='/breweries'>Breweries</Link>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/auth/register'>Signup</Link>
            <Link to='/auth/login'>Login</Link>
        </div>
    )
}

export default Header