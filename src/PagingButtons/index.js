import React, { Component } from "react";
import "./style.css";

class PagingButtons extends Component {

    render(){
        return(
            <div className="buttons-wrapper"> 
            {this.props.page > 0 &&
            <button className="button" onClick={ ()=> {let pageChange = -5; this.props.pageInfo(pageChange);}}>Back</button>
            }
            <button className="button" onClick={ ()=> {let pageChange = 5; this.props.pageInfo(pageChange);}}>Next</button>
            </div>
        )
    }
}

export default PagingButtons;