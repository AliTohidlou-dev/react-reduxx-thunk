import { GET_RESPONSE_ERROR, GET_RESPONSE_USERS, REAQUEST_TO_GET_USERS } from "./user.type";

const userInit={
  isLoading:false,
  data:[],
  error:""
}

const userReducer=(state=userInit,action)=>{
switch (action.type) {
  case REAQUEST_TO_GET_USERS:
    return {...state,isLoading:true};
  case GET_RESPONSE_USERS:
    return {isLoading:false,data:action.payload,error:""};
  case  GET_RESPONSE_ERROR:
    return {isLoading:false,data:[],error:action.payload}  
  default:
    return state;
}
}

export default userReducer