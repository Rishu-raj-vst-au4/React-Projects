import React from "react";
import {connect} from "react-redux";

class NameEmail extends React.Component{
    HandlenameChange=(value)=>{
        this.props.handlenameChange({
            type:"User_Name_change",
            payload:value
    })
    }
    HandleEmailChange=(value)=>{
        this.props.handleEmailChange({
            type:"User_Email_change",
            payload:value
        })
    }

    render(){
        console.log("nameEmailProps her===>",this.props);
        return(
            <div className="NameEmail">
               <input type="text" placeholder="Enter Your Name" value = {this.props.name} onChange={(event)=>this.HandlenameChange(event.target.value)} />
               <input type="email" placeholder="Enter your Email" value= {this.props.Email}  onChange={(event)=>this.HandleEmailChange(event.target.value)} />
            </div>
        )
    }
}

/* Jobs of Connect() function:-
1 To give things from Redux state to React components
2 Take change request from React Components to redux state
*/

const givedatafromReduxtoReactComponents=(state)=>{
    // console.log("givedatafromReduxtoReactComponents",state);
    return{
        name:state.name,
        Email:state.email
    }
}

const giveReduxChangeRequestsfromreactComponents=(dispatch)=>{
    // console.log("giveReduxChangeRequestsfromreactComponents",dispatch);
    return{
        handlenameChange:dispatch,
        handleEmailChange:dispatch
    }
}


export default connect(givedatafromReduxtoReactComponents,giveReduxChangeRequestsfromreactComponents)(NameEmail);