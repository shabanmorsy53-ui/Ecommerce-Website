import baseUrl from "../Api/baseUrl";


const useGetData = async (url ,prams) => {
    const res = await baseUrl.get(url);
    return res.data
}


export const useGetDataWithToken = async (url) => {
  const token = localStorage.getItem("tkn");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await baseUrl.get(url, config);
  return res.data;
};

export default useGetData ;