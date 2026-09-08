import baseUrl from "../Api/baseUrl";


const useGetData = async (url ,prams) => {
    const res = await baseUrl.get(url);
    return res.data
}

export default useGetData ;