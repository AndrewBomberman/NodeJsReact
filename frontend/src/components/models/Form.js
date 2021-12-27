import {useState} from 'react'
function Form(){
    const [state,setState] = useState();
    const [date,setDate] = useState();
    const [cases,setCases] = useState();
    const [deaths,setDeaths] = useState();
    // Submits the data from the form to the server
    const handleSubmit = (e) => {
        e.preventDefault();//Prevents the page from refreshing
        const localdate = new Date(date).toLocaleDateString('en-GB');//Converts the data into local data
        const data = { //Creates a data object
            "state":state, 
            "date":localdate, 
            "cases":cases, 
            "deaths":deaths 
        };
        console.log(data);
        e.target.reset(); // Resets ther form data 
        fetch('http://localhost:8000/api/home',{ // Fetches the POST route from the server
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data) // Converts the data object into a JSON object and submits the data to the server
        }).then( async (response) => { // Gets back the response
            let res = response; 
            console.log(res); // Sends the response back to the user
        });
    }
    return(
        // Renders the form component
        <div className="Form">
            <div className="card bg-primary">
                <div className="card-header text-light text-center">Add</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="card-text">
                        <select className = "form-select" aria-label="Default select example" name="state" onChange={(e)=>setState(e.target.value)}>
                                    <option defaultValue = "Select state">Select state</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                    <option value="California">California</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Connecticut">Connecticut</option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="District of Columbia">District of Columbia</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Idaho">Idaho</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Iowa">Iowa</option>
                                    <option value="Kansas">Kansas</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Louisiana">Louisiana</option>
                                    <option value="Maine">Maine</option>
                                    <option value="Maryland">Maryland</option>
                                    <option value="Massachusetts">Massachusetts</option>
                                    <option value="Michigan">Michigan</option>
                                    <option value="Minnesota">Minnesota</option>
                                    <option value="Mississippi">Mississippi</option>
                                    <option value="Missouri">Missouri</option>
                                    <option value="Montana">Montana</option>
                                    <option value="Nebraska">Nebraska</option>
                                    <option value="Nevada">Nevada</option>
                                    <option value="New Hampshire">New Hampshire</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="New Mexico">New Mexico</option>
                                    <option value="New York">New York</option>
                                    <option value="North Carolina">North Carolina</option>
                                    <option value="North Dakota">North Dakota</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Ohio">Ohio</option>
                                    <option value="Oklahoma">Oklahoma</option>
                                    <option value="Oregon">Oregon</option>
                                    <option value="Pennsylvania">Pennsylvania</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Rhode Island">Rhode Island</option>
                                    <option value="South Carolina">South Carolina</option>
                                    <option value="South Dakota">South Dakota</option>
                                    <option value="Tennessee">Tennessee</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Utah">Utah</option>
                                    <option value="Vermont">Vermont</option>
                                    <option value="Virgin Islands">Virgin Islands</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington">Washington</option>
                                    <option value="West Virginia">West Virginia</option>
                                    <option value="Wisconsin">Wisconsin</option>
                                    <option value="Wyoming">Wyoming</option>  
                                </select>
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput" placeholder="Date" name="date" required onChange={(e)=>setDate(e.target.value)}/>
                                <label>Select Date:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" min="0" className="form-control" id="floatingInput" placeholder="Cases" name="cases" required onChange={(e)=>setCases(e.target.value)}/>
                                <label>Input Cases:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" min="0" className="form-control" id="floatingInput" placeholder="Deaths" name="deaths" required onChange={(e)=>setDeaths(e.target.value)}/>
                                <label>Input Deaths:</label>
                            </div> 
                        </div>
                        <button className="btn btn-dark" >Add</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default Form;