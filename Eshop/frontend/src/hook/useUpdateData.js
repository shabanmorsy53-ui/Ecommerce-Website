import baseUrl from "../Api/baseUrl";


export const useUpdateDataWithImage = async (url ,prams) => {

    const config = {
        headers: {'Content-Type' : 'multipart/form-data'}
    }

    const res = await baseUrl.put(url,prams,config);
    return res.data
}


export const useUpdateData = async (url ,prams) => {
    const res = await baseUrl.put(url,prams);
    return res.data
}