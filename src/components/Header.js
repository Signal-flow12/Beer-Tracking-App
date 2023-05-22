import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <Link to='/breweries'>Breweries</Link>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        </>
    )
}

export default Header