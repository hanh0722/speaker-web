import axios from "axios";
import { BASE_URL } from "../../utils/config";

const request = axios.create({
    url: BASE_URL,
});

const onLogin = (username: string, password: string) => {
    return request.post(`${BASE_URL}/api/auth/login`, {
        username,
        password   
    });
}

export {
    onLogin
}