import { GET_RESPONSE_ERROR, GET_RESPONSE_USERS, REAQUEST_TO_GET_USERS } from "./user.type"

export const requestToGet=()=>{
  return{
    type:REAQUEST_TO_GET_USERS
  }
}

export const getUsers=(data)=>{
  return{
    type:GET_RESPONSE_USERS,
    payload:data
  }
}

export const getError=(error)=>{
  return{
    type: GET_RESPONSE_ERROR,
    payload:error,
  }
}


export const fetchUsers=()=>{
  return (dispatch)=>{
        dispatch(requestToGet());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
        throw new Error("Something went wrong. Please contact the provider...");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(getUsers(data));
      })
      .catch((error)=>{
        console.log(error);
        dispatch(getError(error.message));
      })
  }
}