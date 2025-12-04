import { baseUrl, apiKey, getCurrentDate, getDateOneWeekAgo } from "./constant";

const today = getCurrentDate();
const weekAgo = getDateOneWeekAgo();

function getNews(query) {
  const url = `${baseUrl}?q=${query}&language=en&from=${today}&to=${weekAgo}&pageSize="100"&apiKey=${apiKey}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": `${apiKey}`,
    },
  }).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

export { getNews, checkResponse };
