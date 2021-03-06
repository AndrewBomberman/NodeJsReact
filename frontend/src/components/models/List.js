import React from "react";
import Model from "../models/Model.js";
export default class List extends React.Component {
    render() {
        // Renders the list component
        return (
            <div className = "row">
                {this.props.list.map(model => {
                    if(model._id){
                        return(
                            <div className="col-lg-4" key = {model._id}>
                                <Model model = {model}/>
                            </div>
                        )
                    }
                    return(
                        <div className="col-lg-4">
                            <div className="card bg-dark">
                                <div className="card-header text-light text-center">{model}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}