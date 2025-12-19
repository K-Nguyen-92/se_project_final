export const baseUrl = "https://newsapi.org/v2/everything";
export const apiKey = "5f561ae244424aeb92db40a96b8295fe";

export function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return `${year}-${month}-${day}`;
}

export function getDateOneWeekAgo() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return `${year}-${month}-${day}`;
}

export const defaultUser = {
  _id: "1",
  name: "Default",
  username: "admin",
  keyword: [],
  bookmarks: [],
  articleCounts: 0,
};
