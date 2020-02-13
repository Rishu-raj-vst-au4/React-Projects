import React from "react";
import {connect} from "react-redux";

class City extends React.Component{
    getCity=(value)=>{
        this.props.handleCityUpdate({
            type:"City_Update",
            payload : value
        })
    }
    render(){
        console.log("CityProps her===>",this.props);
        return(
            <div className="City">
                <input placeholder="Enter Your City" value ={this.props.city}  onChange={(event)=>this.getCity(event.target.value)} />
            </div>
        )
    }
}


const givedatafromReduxtoReactComponents=(state)=>{
    // console.log("givedatafromReduxtoReactComponents",state);
    return{
        city:state.city
    }
}

const giveReduxChangeRequestsfromreactComponents=(dispatch)=>{
    // console.log("giveReduxChangeRequestsfromreactComponents",dispatch);
    return{
        handleCityUpdate:dispatch,
        
    }
}

export default connect(givedatafromReduxtoReactComponents,giveReduxChangeRequestsfromreactComponents)(City);