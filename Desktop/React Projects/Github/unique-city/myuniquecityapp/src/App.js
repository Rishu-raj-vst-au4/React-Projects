import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput  from "./Components/UserInput"

import UserDetails from "./Components/UserDetails"
import UniqueCities from "./Components/Cities"

class App extends React.Component {
  
  // addUserdetail=(userDetails)=>{
  //   let cities = this.state.cities.slice();
  //   if(cities.indexOf(userDetails.city)===-1){
  //     cities.push(userDetails.city);
  //   }
  //   let newData = this.state.userDetails.slice();
  //   newData.push(userDetails);
  //   this.setState({
  //     userDetails:newData,
  //     cities:cities
  //   })
    
  // }

  render(){
    return (
      <div className="container"id="Wrapper">
        <UserInput getUserDetail={(UserDetails)=>this.addUserdetail(UserDetails)}/>
        <div className="Lists">
        <UserDetails />
        <UniqueCities />
        </div>
      </div>
      
  
      )
    }
}

export default App;
