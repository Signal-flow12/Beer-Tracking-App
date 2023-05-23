import { useEffect, useState } from "react";
import BreweryData from "../../components/BreweryData";

const Home = () => {
    
    const URL = "https://njbeer-app-backend.onrender.com/breweries"

    const [breweries, setBreweries] = useState([]);

    
    const getBreweries = async () => {
        try{
            let myBreweries = await fetch(URL);
            myBreweries =await myBreweries.json();
            setBreweries(myBreweries);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getBreweries();
    }, []);


    const getRandomBreweries = (breweries, count) => {
        //using sort compare function that defines the sort order
        const shuffeledBreweries = breweries.sort(() => 0.5 - Math.random());
        return shuffeledBreweries.slice(0, count);
    }


    const breweriesLoaded = (breweries) => {
        //I want to grab 3 random breweries from the breweries array
        const randomBreweries = getRandomBreweries(breweries, 3);

        return(
            <>
                {randomBreweries.map((brewery, idx) =>{
                    return(
                        
                        <div key={idx}>
                            <BreweryData brewery={brewery} />
                        </div>
                        
                    )
                })}
            </>
        )
    }


return (
    <>
    <h1>Recomemendations!</h1>
        {breweries.length ? breweriesLoaded(breweries) : <h2>Preparing NJ breweries</h2>}
    </>
)
}

export default Home;