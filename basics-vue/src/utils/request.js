import axios from "axios";

const request = axios.create({
    baseURL: "http://www.liulongbin.top:3006",
})

export default request;