import {createStore} from "redux";
// 1 Step => Save data of all components at one Place
let initialstate={
    name:"",
    email:"",
    city:"",
    userDetails:[],
    cities:[]
}
// 3rd step => AppReducer Function that make necessary changes 
function AppReducer(state=initialstate,action){
    console.log("redux state her ==>",action);
    let newState =JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "User_Name_change":
            newState.name = action.payload;
            return newState;
        case "User_Email_change":
            newState.email = action.payload; 
            return newState;
        case "City_Update":
            newState.city = action.payload;
            return newState;  
        case "add_user_data":
            let UserData ={};
            UserData.name = newState.name;
            UserData.email = newState.email;
            UserData.city = newState.city;
            newState.userDetails.push(UserData);
            if(newState.cities.indexOf(UserData.city)=== -1){
                newState.cities.push(UserData.city);
            }
            console.log("copy of state",newState);
            return newState;    
        default:
            return newState;    
    }
return state;
}
const store = createStore(AppReducer);
export default store;
