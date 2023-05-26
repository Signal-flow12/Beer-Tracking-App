import { useState } from "react";

const BreweryForm = ({ getBreweries}) => {
    
        // const URL = "https://njbeer-app-backend.onrender.com/breweries"
        const URL = "http://localhost:4000/breweries"
        
    const [breweryForm, setBreweryForm] = useState({
        name: "",
        address: "",
        website: "",
        image: "",
        flagship: "",
    
    });

    const handleChange = (e) => {
        //console.log(e.target)
        setBreweryForm((previousFormState)=> ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSumbit = async (e) => {
        try{
            e.preventDefault();
            const newBrewery = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(breweryForm)
            });
            console.log(await newBrewery.json())

            getBreweries();
            e.target.reset();

        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
                <div className="breweryForm">
                    <h3>Know a brewery thats not on the list? <br /> Add it!</h3>
                    <form onSubmit={handleSumbit}>
                        <label>Brewery</label>
                        <input type="text" name="name" placeholder="Enter Brewery Name" onChange={handleChange}/>

                        <label>Address</label>
                        <input type="text" name="address" placeholder="Enter Address" onChange={handleChange}/>

                        <label>Website</label>
                        <input type="text" name="website" placeholder="Enter Website" onChange={handleChange}/>

                        <label>Image</label>
                        <input type="text" name="image" placeholder="Insert Image Link" onChange={handleChange}/>

                        <label>Flagship beer</label>
                        <input type="text" name="flagship" placeholder="Enter Beer Name" onChange={handleChange}/>
                        
                        <button>Submit</button>

                    </form>
                </div>
        </>

    )
}

export default BreweryForm