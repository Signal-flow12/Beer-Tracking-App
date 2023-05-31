    import { useEffect } from "react";
    import { useState, useRef} from "react";
    import BreweryData from "../../components/BreweryData";
    import BreweryForm from "../../components/BreweryForm";
    import { getUserToken } from "../../utils/authToken";
    import { Button, TextField } from "@mui/material";

    const Breweries = ({ user }) => {

        // const { breweryId } = useParams();
        const URL = "https://njbeer-app-backend.onrender.com/breweries"
        // const URL = "http://localhost:4000/breweries"
        
        const [breweries, setBreweries] = useState([]);
        const [filteredBreweries, setFilteredBreweries] = useState(breweries)
        const inputRef = useRef(null)

        const searchBrewery = (searchString) => {
            return breweries.filter((brewery) => {
              return brewery.name.toLowerCase().includes(searchString.toLowerCase())
            })
          }

          const handleSubmit = (e) => {
            const search = inputRef.current.value
            if (search === ""){
              setFilteredBreweries(breweries)
              return 1
            }
            setFilteredBreweries(searchBrewery(search))
          }
    
        const [likes, setLikes] = useState(0)

        const getBreweries = async () => {
            try{
                let myBreweries = await fetch(URL);
                myBreweries = await myBreweries.json();
                setBreweries(myBreweries);
                setFilteredBreweries(myBreweries)
            }catch(err){
                console.log(err)
            }
        }

        useEffect(() => {
            getBreweries();
        }, []);

        const handleLike = async (breweryId) => {
            try{
                const response = await fetch(`http://localhost:4000/breweries/${breweryId}/likes`, {
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${getUserToken()}`,
		            'Content-Type': 'application/json'
                }
            });
            //console.log(getUserToken)
            const updatedBrewery = await response.json();
            console.log(updatedBrewery)
            const isLiked = updatedBrewery.likes.includes(user._id);
            const addLikes = isLiked ? likes + 1 : likes
            setLikes(addLikes)
            setBreweries(updatedBrewery)

            }catch(err){
                console.log(err)
            }
        }


        
        const breweriesLoaded = (filteredBreweries) => {
 
            return(
                <>
                    {filteredBreweries.map((brewery, idx) =>{
                        return(
                            <div className="breweries" key={idx}>
                                <BreweryData brewery={brewery} />
                                <button onClick={() => handleLike(brewery._id)}>Like</button>
                            </div>
                            
                        )
                    })}
                </>
            )
        }

        return (
            <>  <div className="search">
                    <TextField size="small" id="outlined-search" label="Search field" type="search" ref={inputRef}/> 
                    <Button size="small" variant="contained" onClick={handleSubmit} type="submit">Search</Button>
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