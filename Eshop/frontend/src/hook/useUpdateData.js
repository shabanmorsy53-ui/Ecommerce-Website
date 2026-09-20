import baseUrl from "../Api/baseUrl";

export const useUpdateDataWithImage = async (url, prams) => {
  const token = localStorage.getItem("tkn");

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await baseUrl.put(url, prams, config);
  return res.data;
};

export const useUpdateReview = async (url, prams) => {
  const token = localStorage.getItem("tkn");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await baseUrl.put(url, prams, config);
  return res.data;
};

export const useUpdateData = async (url, prams) => {
  const res = await baseUrl.put(url, prams);
  return res.data;
};
