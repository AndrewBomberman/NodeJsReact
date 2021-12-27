import React from "react";
export default class Model extends React.Component{
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            state:this.props.model.state,
            date:this.props.model.date,
            cases:this.props.model.cases,
            deaths:this.props.model.deaths
        };
    }
    handleOnChange (key,value) {
        const data = this.state;
        data[key] = value;
        console.log(data);
        this.setState(data);
    }
    handleSubmit(e,key){
        
        console.log(key);
        if(key === "DELETE"){
            fetch('http://localhost:8000/api/home?_id=' + this.props.model._id,{
            method: "DELETE",
            }).then( async (response) => {
                let res = response;
                console.log(res);
            });
        }
        else if (key === "PUT"){
            e.preventDefault();
            fetch('http://localhost:8000/api/home',{
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "_id":this.props.model._id,
                    "state":this.state.state,
                    "date":new Date(this.state.date).toLocaleDateString('en-GB'),
                    "cases":this.state.cases,
                    "deaths":this.state.deaths
                })
                }).then( async (response) => {
                    let res = await response.json();
                    console.log(res);
            });
        }
    }
    render() {
        return(
            <div className="Search">
                <div className="card bg-dark">
                    <div className="card-body">
                        <form>
                            <div className="card-text">
                            <select className="form-select" aria-label="Default d select example" name="state" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}>
                                    <option defaultValue = {this.props.model.state}>{this.props.model.state}</option>
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

                                    <input type="date" className="form-control" id="floatingInput" 
                                    placeholder={this.props.model.date} name="date" 
                                    onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label>Date: {this.props.model.date}</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" 
                                    placeholder={this.props.model.cases} name="cases" 
                                    onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label>Cases: {this.props.model.cases}</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                    type="number" className="form-control" id="floatingInput" 
                                    placeholder={this.props.model.deaths} name="deaths" 
                                    onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label>Deaths: {this.props.model.deaths}</label>
                                </div>
                            </div>
                            <button className="btn btn-danger" name="DELETE" onClick={(e)=>this.handleSubmit(e,e.target.name)}>Delete</button>
                            <button className="btn btn-primary" name="PUT" onClick={(e)=>this.handleSubmit(e,e.target.name)}>Update</button>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }
}