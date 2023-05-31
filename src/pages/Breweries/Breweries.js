    import { useEffect } from "react";
    import { useState, useRef} from "react";
    import BreweryData from "../../components/BreweryData";
    import BreweryForm from "../../components/BreweryForm";
    import { Button, TextField } from "@mui/material";

 

    const Breweries = () => {


        const URL = "https://njbeer-app-backend.onrender.com/breweries"
        
        const [breweries, setBreweries] = useState([]);
        const [filteredBreweries, setFilteredBreweries] = useState(breweries)
        const inputRef = useRef(null)

        //search
        const searchBrewery = (searchString) => {
            return breweries.filter((brewery) => {
              return (
                brewery.name &&
                brewery.name.toLowerCase().includes(searchString.toLowerCase())
              );
            });
          };
          //handle search submit
          const handleSubmit = (e) => {
            e.preventDefault();
            const search = inputRef.current.value;
            if (search === "") {
              setFilteredBreweries(breweries);
            } else {
              setFilteredBreweries(searchBrewery(search));
            }
          };
    

        //fetch breweries 
        const getBreweries = async () => {
            try{
                let myBreweries = await fetch(URL);
                myBreweries = await myBreweries.json();
                setBreweries(myBreweries);
            }catch(err){
                console.log(err)
            }
        }
        //call getBreweires function
        useEffect(() => {
            getBreweries();
        }, []);

        useEffect(() => {
            setFilteredBreweries(breweries);
          }, [breweries]);
       
        const breweriesLoaded = (filteredBreweries) => {
 
            return(
                <>
                    {filteredBreweries.map((brewery, idx) =>{
                        return(
                            <div className="breweries" key={idx}>
                                <BreweryData brewery={brewery} />
                            </div>
                            
                        )
                    })}
                </>
            )
        }

        return (
            <>  <div>
                    <form className="search" onSubmit={handleSubmit}>
                        <TextField
                        size="small"
                        id="outlined-search"
                        label="Search field"
                        type="search"
                        inputRef={inputRef}
                        />
                        <Button size="small" variant="outlined" type="submit">
                        Search
                        </Button>
                    </form>
                </div>

                <div className="forms">
                    <h3>Know a brewery thats not on the list? </h3>
                    <BreweryForm getBreweries={getBreweries}/>
                </div>
                {filteredBreweries.length ? breweriesLoaded(filteredBreweries) : <h2>Preparing NJ breweries</h2>}
            </>

        )
    }
    
    export default Breweries