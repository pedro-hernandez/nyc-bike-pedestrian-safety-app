import React, { Component } from "react";
import "./style.css";

class PagingButtons extends Component {

    render(){
        let pageChange = 0;
        return(
            <div className="buttons-wrapper"> 
            {this.props.page > 0 &&
            <button className="button" onClick={ ()=> {pageChange += -5; this.props.pageInfo(pageChange); window.scrollTo(0,0);}}>Back</button>
            }
            <button className="button" onClick={ ()=> {pageChange += 5; this.props.pageInfo(pageChange); window.scrollTo(0,0);}}>Next</button>
            </div>
        )
    }
}

export default PagingButtons;