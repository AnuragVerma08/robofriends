import React, { Component } from 'react';

class Scroll extends Component{
    constructor(props){
        super(props)
        this.child = props.children ;
    }
    render(){
        return(
            <div style={{overflowY: 'auto', border: '1px solid black', height: '400px'}}>
                {this.child}
            </div>
        )
    }
}

export default Scroll;