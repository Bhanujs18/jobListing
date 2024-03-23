import axios from 'axios';
const backend = "http://localhost:3000/api/v1/";

export const createUser = async (userRegisterDetails) => {
try {
    const reqUrl = `${backend}auth/register`;
    const res = await axios.post(reqUrl , userRegisterDetails);
} catch (error) {
    console.log(error)
}
}



export const loginUser = async (userLoginDetails) => {
    try {
        const reqUrl = `${backend}auth/login`;
        const res = await axios.post(reqUrl , userLoginDetails);
        console.log(res);
    } catch (error) {
        console.log(error)
    }
    }