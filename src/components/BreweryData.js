import { Link } from "react-router-dom"

const BreweryData = ({ brewery, likes}) => {
    if (!brewery) {
        return null;
    }
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
            <h2>Likes:{likes}</h2>       
        </>
    )
}

export default BreweryData