import React from "react";
import {connect} from "react-redux";

class UserDetails extends React.Component{
    render(){
        console.log("USERDETAIL Props",this.props);
        return(
            <div className="UserDetail">
                <div>
                UserDetails
                </div>
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
                    {this.props.userDetails && this.props.userDetails.map((user,index)=>{
                        return(
                            <tr key={index}>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.city }</td>
                            </tr>
                        )
                    })}
               
                
            </table>
            </div>
            
        )
    }
}
const mapStatetoProps = (state) =>{
    console.log(state)
    return{
        userDetails : state.UserDetails
    };
}
 
export default connect(mapStatetoProps)(UserDetails);