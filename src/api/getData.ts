import axios from "axios";
export const getData = async () => {
  const response = await axios.get("https://dpg.gg/test/calendar.json");
  return response.data;
};
