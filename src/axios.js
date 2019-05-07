import axios from "axios";
const instance = axios.create({
  baseURL: "https://databaseproject-93144.firebaseio.com/"
});
export default instance;