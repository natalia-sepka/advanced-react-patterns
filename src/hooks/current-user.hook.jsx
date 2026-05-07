import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

export const useCurrentUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
           const response = await axios.get(`${BASE_URL}current-user`);
           setUser(response.data);
        })();
    }, []);

    return user;
}