export const LOGIN_ACTION='LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const SEND_MESSAGE = 'SEND_MESSAGE';

function login(username,password){
  return {
    type: LOGIN_ACTION,
    username : username,
    password : password
  }
}

function logout(){
  return {
    type: LOGOUT_ACTION
  }
}

function sendMessage(message){
  return{
    type: SEND_MESSAGE,
    message : message
  }
}