import axios from "axios";
const faker = "https://randomuser.me/api/?inc=gender,name,email,picture";



export default {
  search: function() {
    return axios.get(faker);
  }
};