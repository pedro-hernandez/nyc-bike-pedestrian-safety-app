import React, { Component } from "react";
import "./style.css";

class PagingButtons extends Component {

    // componentDidUpdate = () => {
    //     // this.props.pageInfo();
    //     this.props.page;
    // }

    render(){
        let pageChange = 0;
        return(
            <div className="buttons-wrapper"> 
            {this.props.page > 0 &&
            <button className="button" onClick={ ()=> {pageChange += -5; this.props.pageInfo(pageChange);}}>Back</button>
            }
            <button className="button" onClick={ ()=> {pageChange += 5; this.props.pageInfo(pageChange);}}>Next</button>
            </div>
        )
    }
}

export default PagingButtons;