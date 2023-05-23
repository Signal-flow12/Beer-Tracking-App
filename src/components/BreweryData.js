import { Link } from "react-router-dom"

const BreweryData = ({brewery}) => {
    return (
        <>
            <Link to={`/breweries/${brewery._id}`}>
            <h1>{brewery.name}</h1>
            </Link>
            <h2>{brewery.address}</h2>
            <h2><a href={brewery.website}target="_blank">{brewery.website}</a></h2>
            <img src={brewery.image} alt="{brewery.image}"/>
            <h2>Flagship brew<br />{brewery.flagship}</h2> 
            <h3> Likes: {brewery.likes}</h3>
            {/* <button className="button" target={idx} onClick={updatedLikes}>🍺 {likes}</button> */}
            <button className="button">💛 Add to Favorites</button>
            <hr />
        </>
    )
}

export default BreweryData