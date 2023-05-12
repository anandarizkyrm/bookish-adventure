import axios, { AxiosError } from "axios";

const errorHandler = (error: AxiosError) => {
    return Promise.reject(error);
};

const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN,
    },
};

const api = axios.create({
    baseURL: "https://gorest.co.in",
    headers: config.headers,
});

api.interceptors.response.use(undefined, (error) => errorHandler(error));

export default api;
