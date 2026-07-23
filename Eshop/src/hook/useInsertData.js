import baseUrl from "../Api/baseUrl";


export const useInsertDataWithImage = async (url ,prams) => {

    const config = {
        headers: {'Content-Type' : 'multipart/form-data'}
    }

    const res = await baseUrl.post(url,prams,config);
    return res.data
}

// export const useInsertDataWithImage = async (url, params) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };

//     const res = await baseUrl.post(url, params, config);
//     return res.data;
//   } catch (error) {
//     console.log(error.response);
//     console.log(error.response?.data);
//     throw error;
//   }
// };

export const useInsertData = async (url ,prams) => {
    const res = await baseUrl.post(url,prams);
    return res.data
}

// export default {useInsertData , useInsertDataWithImage} ;