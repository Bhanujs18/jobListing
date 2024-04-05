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
        const token = await res.data.token;
        const id = await res.data.id;
        localStorage.setItem("id" , id);
        localStorage.setItem("token" , token);
        return res.data;
    } catch (error) {
        console.log(error)
    }
    }


    export const getUser = async (id) => {
        try {
            const reqUrl = `${backend}auth/getUser/${id}`;
            const res = await axios.get(reqUrl);
            return res.data;
        } catch (error) {
            console.log(error)
        }
        }