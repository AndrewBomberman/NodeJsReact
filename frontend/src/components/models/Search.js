import React from "react";
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {inputData:[]};
    }
    handleOnChange (key,value) {
       const inputData = this.state.inputData;
        // This function is triggered when a data is changed in the search form
        // Creates the query array
        if(key === "date"){
            value = new Date(value).toLocaleDateString('en-GB'); // Converts the date into local date
            inputData[key] = value;
        }
        inputData[key] = value;
        this.setState({inputData:inputData});
        
    }
    handleSubmit (e) {
        
        e.preventDefault(); // Prevents the page from refreshing
        
        let request = 'http://localhost:8000/api/home?'; // Gets the route from the server
        for (const [key, value] of Object.entries(this.state.inputData)) { // Creates the front-end query
          if(value){
            request+=key+'='+value+'&'
          }
        }
        (async () => {
            let response = await fetch(request); // Receives the response from the server regarding the submitted query
            response = await response.json(); // Converts the response into a JSON object
            this.props.searchResults(response); // Sends the response back to the user
        })();
        this.setState({inputData:[]}); // Resets the query
        e.target.reset(); // Resets the Search form
    }
    render() {
        // Renders the Search component with the fetched data
        return(
            <div className="Search">
                <div className="card bg-success">
                <div class="card-header text-light text-center">Search</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <p className="card-text">
                                <select className="form-select" aria-label="Default select example" name="state" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}>
                                    <option selected>Select State</option>
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
                                    <input type="date" class="form-control" id="floatingInput" placeholder="Date" name="date" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Select Date:</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="number" min= "0"class="form-control" id="floatingInput" placeholder="Cases" name="cases" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Input Cases:</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" min= "0"class="form-control" id="floatingInput" placeholder="Deaths" name="deaths" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Input Deaths:</label>
                                </div>
                            </p>
                            <button className="btn btn-dark">Search</button>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }
} 