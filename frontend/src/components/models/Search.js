import React from "react";
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {inputData:[]};
    }
    handleOnChange (key,value) {
        if(key=="date"){
            value = new Date(value).toLocaleDateString('en-GB');
            this.state.inputData[key]= value;
        }
        this.state.inputData[key]=value;
        console.log(this.state.inputData);
    }
    handleSubmit (e) {
        
        e.preventDefault();
        let request = 'http://localhost:8000/api/home?';
        for (const [key, value] of Object.entries(this.state.inputData)) {
          if(value){
            request+=key+'='+value+'&'
          }
        }
        this.setState({inputData:[]});
        e.target.reset();
        (async () => {
            let response = await fetch(request);
            response = await response.json();
            this.props.searchResults(response);
        })();
    }
    render() {
        return(
            <div className="Search">
                <div className="card bg-success">
                <div class="card-header text-light text-center">Search</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <p className="card-text">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="State" name="state" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Input State:</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="date" class="form-control" id="floatingInput" placeholder="Date" name="date" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Select Date:</label>
                                </div>
                                
                                <div class="form-floating mb-3">
                                    <input type="number" min= "0"class="form-control" id="floatingInput" placeholder="Cases" name="cases" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Input Cases:</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="number" min= "0"class="form-control" id="floatingInput" placeholder="Deaths" name="deaths" onChange={(e)=>this.handleOnChange(e.target.name,e.target.value)}/>
                                    <label for="floatingInput">Input Deaths:</label>
                                </div>
                            </p>
                            <button className="btn btn-dark" >Search</button>
                        </form>
                    </div> 
                </div>
            </div>
        )
    }
} 