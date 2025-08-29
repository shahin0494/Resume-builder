import BASEURL from "./baseUrl";
import commonApi from "./commonApi";

// addResumeApi - POST - called by steps component
export const addResumeAPI = async (resume) => {
    return await commonApi("POST", `${BASEURL}/all-resumes`, resume)
}

// editResumeAPI - PUT - called by edit component when update button is clicked
export const editResumeApi = async(id,resume)=>{
    return await commonApi("PUT",`${BASEURL}/all-resumes/${id}`,resume)
}

// addHistoryAPI - POST
export const addDownloadHistoryAPI = async (resume) => {
    return await commonApi("POST", `${BASEURL}/history`, resume)
}
// getHistoryAPI - GET : called by history component when its page is open in browser
export const getHistoryAPI = async ()=>{
    return await commonApi("GET",`${BASEURL}/history`,{})
}

// deleteHistoryAPI - DELETE
export const deleteHistoryAPI = async (id)=>{
    return await commonApi("DELETE",`${BASEURL}/history/${id}`,{})
}

// getREsumeAPI - GET called by edit component when its open in browser (useEffect)
export const getAResumeAPI = async (id)=>{
     return await commonApi("GET",`${BASEURL}/all-resumes/${id}`,{})
}