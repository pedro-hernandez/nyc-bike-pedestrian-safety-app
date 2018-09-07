import React, { Component } from "react";
import "./style.css";

class PagingButtons extends Component {

    handleClickNext = (event) => {

        let pageChange = 5;

        this.props.pageInfo(pageChange);
        event.preventDefault();
    }

    handleClickBack = (event) => {

        let pageChange = -5;

        this.props.pageInfo(pageChange);
        event.preventDefault();
    }

    render(){
        return(
            <div className="buttons-wrapper"> 
            {this.props.page > 0 &&
            <button className="button-previous" onClick={this.handleClickBack}>Back</button>
            }
            <button className="button-previous" onClick={this.handleClickNext}>Next</button>
            </div>
        )
    }
}

export default PagingButtons;