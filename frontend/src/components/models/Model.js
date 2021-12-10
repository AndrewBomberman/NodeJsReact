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
       this.state[key]=value;
    }
    handleSubmit(key){
        if(key === "DELETE"){
            fetch('http://localhost:8000/api/home?_id=' + this.props.model._id,{
            method: "DELETE",
            }).then( async (response) => {
                let res = response;
                console.log(res);
            });
        }
        else if (key=== "PUT"){
            fetch('http://localhost:8000/api/home',{
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "_id":this.props.model._id,
                    "state":this.state.state,
                    "date":this.state.date,
                    "cases":this.state.cases,
                    "deaths":this.state.deaths
                })
                }).then( async (response) => {
                    let res = response;
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
                            <p className="card-text">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" 
                                    placeholder={this.props.model.state} name="state" 
                                    onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">State: {this.props.model.state}</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="date" class="form-control" id="floatingInput" 
                                    placeholder={this.props.model.date} name="date" 
                                    onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Date: {this.props.model.date}</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="floatingInput" 
                                    placeholder={this.props.model.cases} name="cases" 
                                    onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Cases: {this.props.model.cases}</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                    type="number" class="form-control" id="floatingInput" 
                                    placeholder={this.props.model.deaths} name="deaths" 
                                    onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Deaths: {this.props.model.deaths}</label>
                                </div>
                            </p>
                            <button className="btn btn-danger" name="DELETE" onClick={(e)=>this.handleSubmit(e.target.name)}>Delete</button>
                            <button className="btn btn-primary" name="PUT" onClick={(e)=>this.handleSubmit(e.target.name)}>Update</button>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }
}