import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const BreweryData = ({brewery}) => {
    return (
        <>
            <Link to={`/breweries/${brewery._id}`}>
            <h1>{brewery.name}</h1>
            </Link>
            <h2>{brewery.address}</h2>
            <h2><a href={brewery.website}target="_blank" rel="noopener noreferrer">{brewery.website}</a></h2> 
             <img className="img" src={brewery.image} alt="{brewery.image}"/>
            <h3>Flagship brew: </h3>
            <h2>{brewery.flagship}</h2> 
            <h3> Likes: {brewery.likes}</h3>
            {/* <button className="button" onClick={handleLikes}>🍺 </button> */}
            <button className="button">💛 Add to Favorites</button>
            <hr />
        </>
    )
}

export default BreweryData