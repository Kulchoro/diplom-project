import axios from "axios";
const instance = axios.create({
  baseURL: "https://tian-shi-23dc0.firebaseio.com/"
});
export default instance;