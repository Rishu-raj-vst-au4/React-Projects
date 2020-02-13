import React from "react";
import {connect} from "react-redux";

class UniqueCities extends React.Component{
    render(){
        return(
            <div className="Cities">
                <div>
                  Cities Name
                </div>
            <table className="table">
                {this.props.citie && this.props.cities.map((city,index)=>{
                        return(
                            <tr key={index}>
                              <td>{index+1}    {city}</td>
                            </tr>
                        )
                    })}
            </table>

            </div>
            
        )
    }
}
const mapStatetoProps =(state)=>{
    return{
        Cities : state.cities
    }
}

export default connect(mapStatetoProps)(UniqueCities);