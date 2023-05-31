import { useState } from "react";
import { TextField, Button } from "@mui/material";

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
            //console.log(await newBrewery.json())

            getBreweries();
            e.target.reset();

        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
                <div className="breweryForm">
                    {/* <h3>Know a brewery thats not on the list? <br /> Add it!</h3> */}
                    <form onSubmit={handleSumbit}>
                    
                        <TextField required id="outlined-required" label="Required" type="text" name="name" placeholder="Enter Brewery Name" onChange={handleChange}/>

                        
                        <TextField required id="outlined-required" label="Required" name="address" placeholder="Enter Address" onChange={handleChange}/>

                        <TextField required id="outlined-required" label="Required" name="website" placeholder="Enter Website" onChange={handleChange}/>

                        <TextField required id="outlined-required" label="Required" name="image" placeholder="Insert Image Link" onChange={handleChange}/>

                        <TextField required id="outlined-required" label="Required" name="flagship" placeholder="Enter Beer Name" onChange={handleChange}/>
                        
                        <Button size="large" variant="contained">Submit</Button>

                    </form>
                </div>
        </>

    )
}

export default BreweryForm