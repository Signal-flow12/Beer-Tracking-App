import { Link } from "react-router-dom"
import { Button } from "@mui/material";

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
            <h3 className="flagship">Flagship brew: <br  />{brewery.flagship}</h3> 
            <Button size="large" color="primary" variant="contained">Add to Favorites!</Button>      
        </>
    )
}

export default BreweryData