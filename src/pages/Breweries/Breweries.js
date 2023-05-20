import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Breweries = () => {

    const URL = "https://njbeer-app-backend.onrender.com/breweries"
    
    const [breweries, setBreweries] = useState([]);
    const [likes, setLikes ] = useState(0);
    const [BreweryForm, setBreweryForm] = useState({
        name: "",
        address: "",
        website: "",
        image: "",
        flagship: ""

    });

    const getBrewries = async () => {
        try{
            let myBreweries = await fetch(URL);
            myBreweries =await myBreweries.json();
            setBreweries(myBreweries);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getBrewries();
    }, []);

    const updatedLikes = () => {
        let currentlikes = likes;
        currentlikes++;
        setLikes(currentlikes)
    }

    const breweriesLoaded = (breweries) => {
        return(
            <>
                {breweries.map((brewery, idx) =>{
                    return(
                        <div key={idx}>
                            <h1>{brewery.name}</h1>
                            <h2>{brewery.address}</h2>
                            <h2><a href={brewery.website}target="_blank">{brewery.website}</a></h2>
                            <img src={brewery.image}/>
                            <h2>Flagship brew<br />{brewery.flagship}</h2>
                            <button onClick={updatedLikes}>🍺 {likes}</button>
                            <button>💛 Add to Favorites</button>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }


    return (
        <>
            <h1>Brewery route</h1>
            {breweries.length ? breweriesLoaded(breweries) : <h2>Preparing NJ breweries</h2>}
        </>

    )
}

export default Breweries