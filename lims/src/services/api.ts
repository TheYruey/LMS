import axios from "axios";

export default async function sendRequest(endpoint: string, method: string, data: any) {
    return await axios({
        baseURL: "https://localhost:7299",
        url: endpoint,
        method,
        withCredentials: true,
        data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}
