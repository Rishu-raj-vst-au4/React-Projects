import React from "react";
import NameEmail from "./NameEmail";
import City from "./City";
import {connect} from "react-redux";

class UserInput extends React.Component{
    // state={
    //     name:"",
    //     email:"",
    //     city:""
    // }
    render(){
        console.log("props Userinput",this.props);
        
        return(
            <div className="UserInput">
                <h4>Form Input</h4>
            <NameEmail/>
            {/* getUserName={(name)=>this.setState({name})} getUserEmail={(email)=>this.setState({email})} */}
            <City />
            {/* getCity={(city)=>this.setState({city})} */}
            <button type="button" className="btn btn-outline-success" id="Button" onClick={()=>this.props.dispatch({type:"add_user_data"})}>Submit</button>
            </div>
            
            
        )
    }
}

export default connect()(UserInput);