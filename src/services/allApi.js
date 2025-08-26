import BASEURL from "./baseUrl";
import commonApi from "./commonApi";

// addResumeApi - POST - called by steps component
export const addResumeAPI = async (resume) => {
    return await commonApi("POST", `${BASEURL}/all-resumes`, resume)
}

// editResumeAPI - PUT

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