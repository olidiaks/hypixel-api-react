import axios from "axios";

export const instance = axios.create({
    baseUrl: "https://api.hypixel.net",
    key: "9a8ff3f8-6883-46fe-92a8-28b058047bd6",
});