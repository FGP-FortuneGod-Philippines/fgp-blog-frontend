import axios from "axios";

export const fetchNews = async () => {
  const res = await axios.get(
    "https://gnews.io/api/v4/top-headlines?country=ph&category=general&apikey=7cadcb2cfbb5babca4d79f9eb720714a"
  );
  return res.data;
};
