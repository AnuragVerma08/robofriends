import React, { Component } from "react";
import './Loader.css';

class Loader extends Component {
    render() {
        return (
            <div className="flex justify-center">
                    <div id="loader"></div>
                    <h1>Loading..!</h1>
            </div>
        )
    }
}

export default Loader;