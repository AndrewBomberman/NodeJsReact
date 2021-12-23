import React from "react";
import Search from "../models/Search.js";
import Form from "../models/Form.js";
import Data from "../models/Data.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Home extends React.Component {
    constructor(){
        super()
        this.state = {isLoaded:false,data:null,error:null}
        this.searchAndSetResults = this.searchAndSetResults.bind(this);
    }
    componentDidMount(){
        // Fetches the data
        fetch("http://localhost:8000/api/home")
        .then(res => res.json()).then((result) => {
            this.setState({isLoaded: true,data:result,error:null});
        }) // Sets the data 
        .catch(error=>
            {this.setState({isLoaded: true,data:null,error:error});
        })
    }
    componentDidUpdate(){}

    searchAndSetResults(data){
        // Sets the data of the home component with the data received when a serach is submitted
       this.setState({data:data})
    }
    render(){
        // Renders the Home page component and all it's subcomponents
        if(this.state.data){
            return(
                <div className="Home">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div><Search searchResults = {this.searchAndSetResults} data = {this.state.data} /></div>
                            </div>
                            <div className="col-lg-6">
                                <div><Form /></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Data data = {this.state.data}/>
                    </div>
                </div> 
            )
        }
        return(
            <div>{this.state.isLoaded}</div>
        )
    }
}