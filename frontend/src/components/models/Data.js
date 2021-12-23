import React from "react";
import List from "../models/List.js";
export default class Data extends React.Component {
    constructor(props) {
        super(props);
    }
    // This component renders the results of the user's seaarch
    render() {
        return(
            <div className="Data">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card bg-dark">
                        <div class="card-header text-light text-center">Search Results:{this.props.data.results}</div>
                            {this.props.data.results}
                                <div className="card-body">
                                    <p className="card-text">
                                        <ul class="list-group list-group-flush">
                                            {this.props.data.state && <li class="list-group-item">State: {this.props.data.state}</li>}
                                            {this.props.data.date && <li class="list-group-item">Date: {this.props.data.date}</li>}
                                            {this.props.data.cases && <li class="list-group-item">Cases {this.props.data.cases}</li>}
                                            {this.props.data.deaths && <li class="list-group-item">Deaths: {this.props.data.deaths}</li>}
                                        </ul>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="List">
                    {this.props.data.list && <List list = {this.props.data.list}/>}
                </div>
            </div>
        )
    }
}