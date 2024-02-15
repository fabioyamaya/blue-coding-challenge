import api, { API_KEY } from "./api";

const PAGE_SIZE = 25;

export const getGifsBySearchInput = async (searchValue, page) => {
  const params = {
    api_key: API_KEY,
    q: searchValue,
    offset: page * PAGE_SIZE,
  };

  return (await api.get("/v1/gifs/search", { params })).data;
};
