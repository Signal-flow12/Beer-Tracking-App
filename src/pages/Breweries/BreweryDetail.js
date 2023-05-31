import { useState, useEffect } from "react"
import { useParams } from "react-router"


const BreweryDetail = () => {

    
    const [brewery, setBrewery] = useState(null);
    const { breweryId } = useParams();
    const URL = `https://njbeer-app-backend.onrender.com/breweries/${breweryId}`

    const getBreweryDetails = async () => {
        try{
            let breweryDetails = await fetch(URL)
            breweryDetails = await breweryDetails.json();
            setBrewery(breweryDetails);
        }catch(err){
            console.log(err)
        }
    }
    console.log(brewery)


    const breweryLoaded = () => {
        return(
        <div className="brewery">
            <h1>{brewery.name}</h1>
            <h2>{brewery.address}</h2>
            <h2><a className="link" href={brewery.website}target="_blank">{brewery.website}</a></h2>
            <img className="img" src={brewery.image} alt={brewery.image}    />  
            <h2>Flagship brew<br />{brewery.flagship}</h2>                     
        </div>

        )
    }

    useEffect(() => {
        getBreweryDetails();
    }, [])
    return (
        <>
            {brewery ? breweryLoaded() : <h2> Grab a brew while we load your brewery!</h2>}
        </>
    )
}

export default BreweryDetail