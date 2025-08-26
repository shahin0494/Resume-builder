import axios from "axios";

const commonApi = async (httpMethod,url,reqBody)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody
    }
    // api call using axios instance
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonApi