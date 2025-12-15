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
function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        author: "Jack Daleo",
        content:
          "Electric vertical takeoff and landing (eVTOL) aircraft developer Archer Aviation, which has announced urban air taxi networks in Los Angeles, San Francisco, and New York, on Wednesday pulled back the… [+6124 chars]",
        description:
          "eVTOL aircraft developer reveals plans for South Florida air taxi service.",
        publishedAt: "2025-12-03T12:00:00Z",
        title: "Archer Unveils Miami Electric Air Taxi Network",
        url: "https://www.flyingmag.com/archer-miami-electric-air-taxi-network/",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/bc94WDtroT1TT.BOznXWiQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/flying_articles_763/a26b4a4cb571232d1370bd0edb2ca4a8",
      },
      // ...etc, more article objects, as many as you want
    ])
  );
}
export { getNews, checkResponse, getItems };
