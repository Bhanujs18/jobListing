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



export const createJob = async(jobPayload) => {
    try{
    const reqUrl = `${backend}job/create`;
    const token = localStorage.getItem("token")
    axios.defaults.headers.common["Authorization"] = token;
    const res =  await axios.post(reqUrl , jobPayload);
    if(!res){
        alert("Job Posting Failed!!!")
    }
    }
    catch(err){
console.log(err)
    }
}


export const jobDetailsById = async (jobId) => {
    try{
    const reqUrl = `${backend}job/jobDetails/${jobId}`;
    const res =  await axios.get(reqUrl);
    return res.data;
    }
    catch(err){
console.log(err)
    }
}



export const updateJobById = async (jobId , payload) => {
    try{
        console.log("Yes i m alright!!")
     const token = localStorage.getItem("token")
     axios.defaults.headers.common["Authorization"] = token;
    const reqUrl = `${backend}job/update/${jobId}`;
    const res =  await axios.put(reqUrl , payload);
    return res.data;
    }
    catch(err){
console.log(err)
    }
}
