import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Breweries = () => {

    const URL = "https://njbeer-app-backend.onrender.com/breweries"
    
    const [likes, setLikes ] = useState(0);
    const [breweries, setBreweries] = useState([]);
    const [breweryForm, setBreweryForm] = useState({
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

    const handleChange = (e) => {
        setBreweryForm((previousFormState)=> ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSumbit = async (e) => {
        try{
            e.preventDefault();
            await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(breweryForm)
            })
            getBrewries();
            e.target.reset();

        }catch(err){
            console.log(err)
        }
    }


    return (
        <>
            <h1>NJ Breweries</h1>
                <div className="breweryForm">
                    <h3>Know a brewery thats not on the list? <br /> Add it!</h3>
                    <form onSubmit={handleSumbit}>
                        <label>Brewery</label>
                        <input type="text" name="name" placeholder="Enter Brewery Name" onChange={handleChange}/>

                        <label>Address</label>
                        <input type="text" name="name" placeholder="Enter Address" onChange={handleChange}/>

                        <label>Website</label>
                        <input type="text" name="name" placeholder="Enter Website" onChange={handleChange}/>

                        <label>Image</label>
                        <input type="text" name="name" placeholder="Insert Image Link" onChange={handleChange}/>

                        <label>Flagship beer</label>
                        <input type="text" name="name" placeholder="Enter Beer Name" onChange={handleChange}/>
                        
                        <button>Submit</button>

                    </form>
                </div>
            {breweries.length ? breweriesLoaded(breweries) : <h2>Preparing NJ breweries</h2>}
        </>

    )
}

export default Breweries