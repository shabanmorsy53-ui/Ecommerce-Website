import baseUrl from "../Api/baseUrl";

export const useDeleteData = async (url) => {

    const token = localStorage.getItem('tkn');

    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }

    const res = await baseUrl.delete(url,config);
    return res.data
}
