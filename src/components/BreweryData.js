import { Link } from "react-router-dom"

const BreweryData = ({ brewery, likes}) => {
    if (!brewery) {
        return null;
    }
    return (
        <>
            <Link to={`/breweries/${brewery._id}`} className="link">
            <h1>{brewery.name}</h1>
            <h2>{brewery.address}</h2>
            <img className="img" src={brewery.image} alt="{brewery.image}"/>
            </Link>
            <h2><a className="link" href={brewery.website}target="_blank" rel="noopener noreferrer">{brewery.website}</a></h2> 
            <h3>Flagship brew: </h3>
            <h2>{brewery.flagship}</h2>  
            <h2>Likes:{likes}</h2>       
        </>
    )
}

export default BreweryData