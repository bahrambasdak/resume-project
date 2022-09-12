import Axios from 'axios';



export const LoginAPI = ({email , password})=>{
Axios.post('http://127.0.0.1:8000/login',{email , password});
}