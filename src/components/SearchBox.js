import React, { Component } from "react";

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.searchField=props.searchField;
        this.searchChange=props.searchChange;
    }
    render() {
        return (
            <div className="pa2">
                <input type="search"
                    className="pa3 ba br3 b--green bg-lightest-blue"
                    placeholder="Search Robo Friends"
                    onChange={this.searchChange} />
            </div>
        )
    }
}

export default SearchBox;