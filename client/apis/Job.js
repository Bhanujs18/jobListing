import axios from "axios";

const backend = "http://localhost:3000/api/v1/";

export const allJobs = async() => {
    try{
    const reqUrl = `${backend}job/allJobs`;
    const res =  await axios.get(reqUrl);
    const data = await res.data;
    return data;
    }
    catch(err){
console.log(err)
    }
}
